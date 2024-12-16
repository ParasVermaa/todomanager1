// script.js

document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");

    // Create a new list item
    const taskItem = document.createElement("li");

    // Task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    taskSpan.classList.add("task-text");
    taskItem.appendChild(taskSpan);

    // Create Edit button
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(taskItem, taskSpan));
    taskItem.appendChild(editButton);

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTask);
    taskItem.appendChild(deleteButton);

    // Toggle task completion
    taskSpan.addEventListener("click", toggleCompletion);

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
  }
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}

function toggleCompletion(event) {
  const taskSpan = event.target;
  taskSpan.classList.toggle("completed");
}

function editTask(taskItem, taskSpan) {
  const newTaskText = prompt("Edit your task:", taskSpan.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskSpan.textContent = newTaskText.trim();
  }
}
