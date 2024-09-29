// script.js

// Classe para representar uma Tarefa
class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}

// Função para criar um elemento de tarefa com checkbox
const createTaskElement = (task) => {
    const taskContainer = document.createElement('div');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;

    checkbox.addEventListener('change', () => {
        task.toggle();
        checkbox.checked = task.completed;
        taskContainer.style.textDecoration = task.completed ? 'line-through' : 'none';
    });

    const label = document.createElement('label');
    label.textContent = task.name;
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(label);

    taskContainer.style.textDecoration = task.completed ? 'line-through' : 'none';
    
    return taskContainer;
};

// Array para armazenar as tarefas
let tasks = [];

// Função para adicionar uma nova tarefa
const addTask = () => {
    const input = document.getElementById('taskInput');
    const taskName = input.value.trim();
    if (taskName) {
        const newTask = new Task(taskName);
        tasks.push(newTask);
        renderTasks();
        input.value = '';
    }
};

// Função para renderizar as tarefas na lista
const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpa a lista antes de renderizar
    tasks.forEach(task => {
        taskList.appendChild(createTaskElement(task));
    });
};

// Event listener para o botão de adicionar tarefa
document.getElementById('addTaskButton').addEventListener('click', addTask);