
const addTaskForm = document.getElementById("add-task-form");
const taskList = document.getElementById("task-list");
let tasks = [];

function addTask(title, desc) {
     const task = { title, desc };
    tasks.push(task);
    updateTaskList();
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function updateTaskList() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-desc">${task.desc}</div>
        <div class="task-actions">
        <button onclick="removeTask(${index})">Remove</button>
        </div>
        `;
        taskList.appendChild(taskElement);
        });
}

addTaskForm.addEventListener("submit", (event) => {
event.preventDefault();
const title = event.target.elements["task-title"].value;
const desc = event.target.elements["task-desc"].value;
addTask(title, desc);
event.target.reset();
});
