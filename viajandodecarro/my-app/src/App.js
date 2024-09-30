import React, { useState } from 'react';

function App() {
  const [carro, setCarro] = useState({
    nome: '',
    modelo: '',
    marca: '',
    kmCidade: '',
    kmEstrada: '',
    tamanhoTanque: '',
    distanciaTotal: '',
    precoGasolina: '',
    precoAlcool: '',
    precoDiesel: '',
  });

  const [resultado, setResultado] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCarro((prevCarro) => ({ ...prevCarro, [id]: value }));
  };

  const calcular = (e) => {
    e.preventDefault();

    const {
      nome,
      modelo,
      marca,
      kmCidade,
      kmEstrada,
      distanciaTotal,
      precoGasolina,
      precoAlcool,
      precoDiesel,
    } = carro;

    const combustiveis = [];
    const eficienciaCidadeGasolina = kmCidade / precoGasolina;
    const eficienciaEstradaGasolina = kmEstrada / precoGasolina;

    if (document.getElementById('gasolina').checked) {
      combustiveis.push({
        tipo: 'Gasolina',
        preco: precoGasolina,
        eficienciaCidade: eficienciaCidadeGasolina,
        eficienciaEstrada: eficienciaEstradaGasolina,
      });
    }

    if (document.getElementById('alcool').checked) {
      combustiveis.push({
        tipo: 'Álcool',
        preco: precoAlcool,
        eficienciaCidade: kmCidade / precoAlcool,
        eficienciaEstrada: kmEstrada / precoAlcool,
      });
    }

    if (document.getElementById('diesel').checked) {
      combustiveis.push({
        tipo: 'Diesel',
        preco: precoDiesel,
        eficienciaCidade: kmCidade / precoDiesel,
        eficienciaEstrada: kmEstrada / precoDiesel,
      });
    }

    let resultadoFinal = '';

    combustiveis.forEach((combustivel) => {
      const consumoCidade = (distanciaTotal / kmCidade).toFixed(2);
      const consumoEstrada = (distanciaTotal / kmEstrada).toFixed(2);
      const custoCidade = (consumoCidade * combustivel.preco).toFixed(2);
      const custoEstrada = (consumoEstrada * combustivel.preco).toFixed(2);

      resultadoFinal += `Para o carro ${nome} (${modelo}, ${marca}):\n`;
      resultadoFinal += `Consumo na Cidade com ${combustivel.tipo}: ${consumoCidade} L\n`;
      resultadoFinal += `Custo na Cidade: R$ ${custoCidade}\n`;
      resultadoFinal += `Consumo na Estrada com ${combustivel.tipo}: ${consumoEstrada} L\n`;
      resultadoFinal += `Custo na Estrada: R$ ${custoEstrada}\n\n`;
    });

    setResultado(resultadoFinal);
  };

  return (
    <div>
      <h1>Calculadora de Combustível</h1>
      <form onSubmit={calcular}>
        <label>
          Nome do Carro:
          <input type="text" id="nome" value={carro.nome} onChange={handleChange} required />
        </label>

        <label>
          Modelo:
          <input type="text" id="modelo" value={carro.modelo} onChange={handleChange} required />
        </label>

        <label>
          Marca:
          <input type="text" id="marca" value={carro.marca} onChange={handleChange} required />
        </label>

        <label>
          Km/h na Cidade:
          <input type="number" id="kmCidade" value={carro.kmCidade} onChange={handleChange} required />
        </label>

        <label>
          Km/h na Estrada:
          <input type="number" id="kmEstrada" value={carro.kmEstrada} onChange={handleChange} required />
        </label>

        <label>
          Tamanho do Tanque (L):
          <input type="number" id="tamanhoTanque" value={carro.tamanhoTanque} onChange={handleChange} required />
        </label>

        <label>
          Distância Total (Km):
          <input type="number" id="distanciaTotal" value={carro.distanciaTotal} onChange={handleChange} required />
        </label>

        <label>
          Tipo de Combustível:
          <input type="checkbox" id="gasolina" value="gasolina" /> Gasolina
          <input type="checkbox" id="alcool" value="alcool" /> Álcool
          <input type="checkbox" id="diesel" value="diesel" /> Diesel
        </label>

        <label>
          Preço da Gasolina (R$):
          <input type="number" id="precoGasolina" value={carro.precoGasolina} onChange={handleChange} required />
        </label>

        <label>
          Preço do Álcool (R$):
          <input type="number" id="precoAlcool" value={carro.precoAlcool} onChange={handleChange} required />
        </label>

        <label>
          Preço do Diesel (R$):
          <input type="number" id="precoDiesel" value={carro.precoDiesel} onChange={handleChange} required />
        </label>

        <button type="submit">Calcular</button>
      </form>

      <pre>{resultado}</pre>
    </div>
  );
}

export default App;
