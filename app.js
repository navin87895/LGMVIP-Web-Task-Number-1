document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText) {
      addTask(taskText);
      todoInput.value = "";
    }
  });

  todoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addButton.click();
    }
  });

  function addTask(taskText) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    taskSpan.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", () => {
      todoList.removeChild(li);
    });
  }
});
