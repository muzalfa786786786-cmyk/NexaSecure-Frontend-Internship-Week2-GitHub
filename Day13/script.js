let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
        <span onclick="toggleComplete(${index})"
        class="${task.completed ? 'completed' : ''}">
        ${task.text}
        </span>

        <button class="delete-btn"
        onclick="deleteTask(${index})">Delete</button>
        `;

        list.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    let input = document.getElementById("taskInput");
    if(input.value === "") return;

    tasks.push({
        text: input.value,
        completed: false
    });

    input.value = "";
    showTasks();
}

function deleteTask(index) {
    tasks.splice(index,1);
    showTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    showTasks();
}

showTasks();