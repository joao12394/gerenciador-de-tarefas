// Seleciona os elementos do DOM
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Função para adicionar tarefa
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const li = document.createElement("li");

    // Adiciona o texto da tarefa
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="remove">Remover</button>
    `;

    // Adiciona o evento de marcar como concluído
    li.querySelector(".task-text").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Adiciona o evento de remover a tarefa
    li.querySelector(".remove").addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // Adiciona a tarefa à lista
    taskList.appendChild(li);

    // Limpa o campo de input
    taskInput.value = "";
}

// Evento de clique no botão para adicionar tarefa
addTaskButton.addEventListener("click", addTask);

// Evento de pressionar 'Enter' no campo de input para adicionar tarefa
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
