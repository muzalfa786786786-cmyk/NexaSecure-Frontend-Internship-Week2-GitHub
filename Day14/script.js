const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load tasks on page load
document.addEventListener("DOMContentLoaded", renderTasks);

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <i class="fas fa-trash" onclick="deleteTask(${index})"></i>
    `;
    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") return alert("Please enter a task!");

  tasks.push(value);
  taskInput.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Search Function
searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase();
  const items = document.querySelectorAll("li");

  items.forEach(item => {
    const text = item.querySelector("span").textContent.toLowerCase();
    item.style.display = text.includes(searchText) ? "flex" : "none";
  });
});

addBtn.addEventListener("click", addTask);

// Enter key support
taskInput.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    addTask();
  }
});