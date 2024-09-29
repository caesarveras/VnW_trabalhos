const hamburgerMenu = document.querySelector('.hamburger-menu');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

// Quando o menu hambúrguer for clicado, mostrar/esconder a barra lateral
hamburgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    content.classList.toggle('shifted');
});


// Seleção dos elementos do DOM
const newProjectBtn = document.getElementById('newProjectBtn');
const modal = document.getElementById('newProjectModal');
const closeModalBtn = document.querySelector('.close');
const newProjectForm = document.getElementById('newProjectForm');
const projectsTable = document.querySelector('.projects-table tbody');

// Função para abrir o modal
function openModal() {
  modal.style.display = 'block';
 // modal.style.display = 'none';
}


// Get the button and modal elements
const newProjectModal = document.getElementById('newProjectModal');

// Add an event listener to the button's click event
newProjectBtn.addEventListener('click', () => {
  // Open the modal
  newProjectModal.style.display = 'block';
});


// Abrir o modal ao clicar no botão "New Project"
newProjectBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});


// Adicionar um novo projeto à tabela ao submeter o formulário
newProjectForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir reload da página

    // Capturar os valores dos campos do formulário
    const projectName = document.getElementById('projectName').value;
    const projectIcon = document.getElementById('projectIcon').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const status = document.getElementById('status').value;
    const participants = document.getElementById('participants').value.split(',').map(participant => participant.trim());
    const priority = document.getElementById('priority').value;

    // Criar a nova linha de projeto na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${projectIcon} ${projectName}</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td>$$$</td>
        <td>${status}</td>
        <td>${participants.map(p => `<img src="avatar-placeholder.png" alt="${p}" title="${p}" class="participant-avatar">`).join(' ')}</td>
        <td class="priority ${priority.toLowerCase()}">${priority}</td>
    `;

    // Adicionar a nova linha à tabela
    projectsTable.appendChild(newRow);

    // Fechar o modal
    modal.style.display = 'none';

    // Limpar os campos do formulário
    newProjectForm.reset();
});


// Abrir o modal ao clicar no botão "New Project"
newProjectBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Fechar o modal ao clicar no botão de fechar (x)
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar o modal ao clicar fora da janela modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Adicionar um novo projeto à tabela ao submeter o formulário
newProjectForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir reload da página

    // Capturar os valores dos campos do formulário
    const projectName = document.getElementById('projectName').value;
    const projectIcon = document.getElementById('projectIcon').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const status = document.getElementById('status').value;
    const participants = document.getElementById('participants').value.split(',').map(participant => participant.trim());
    const priority = document.getElementById('priority').value;

    // Criar a nova linha de projeto na tabela
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${projectIcon} ${projectName}</td>
        <td>${startDate}</td>
        <td>${endDate}</td>
        <td>$$$</td>
        <td>${status}</td>
        <td>${participants.map(p => `<img src="avatar-placeholder.png" alt="${p}" title="${p}" class="participant-avatar">`).join(' ')}</td>
        <td class="priority ${priority.toLowerCase()}">${priority}</td>
    `;

    // Adicionar a nova linha à tabela
    projectsTable.appendChild(newRow);

    // Fechar o modal
    modal.style.display = 'none';

    // Limpar os campos do formulário
    newProjectForm.reset();
});