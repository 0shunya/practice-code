const todoInput = document.getElementById('todo-input')
const addTask = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

const Task = []

addTask.addEventListener('click', () => {
  const TaskText = todoInput.value.trim()

  if(TaskText === "") return;

  const TaskStoring = {
    id: Date.now(),
    task: TaskText,
    completed: false
  }

  Task.push(TaskStoring);
  todoInput.value = "";

  console.log(Task)

})