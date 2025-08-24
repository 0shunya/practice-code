document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input')
const addTask = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

const Task = JSON.parse(localStorage.getItem("tasks")) || [];

//Task is the element it is like the item in the Array
Task.forEach(task => RenderTasks(task));

addTask.addEventListener('click', () => {
  const TaskText = todoInput.value.trim()

  if(TaskText === "") return;

  const TaskStoring = {
    id: Date.now(),
    task: TaskText,
    completed: false
  }

  Task.push(TaskStoring);
  saveTasks();
  todoInput.value = "";

  console.log(Task)
})

function RenderTasks(task) {
  console.log(task);
  
}

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(Task));
}
})