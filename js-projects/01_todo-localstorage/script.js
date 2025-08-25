document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input')
const addTask = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')

let Task = JSON.parse(localStorage.getItem("tasks")) || [];

//Task is the element it is like the item in the Array
Task.forEach(task => RenderTasks(task));

addTask.addEventListener('click', () => {
  const TaskText = todoInput.value.trim()
  console.log(TaskText);
  

  if(TaskText === "") return;

  const TaskStoring = {
    id: Date.now(),
    tasktext: TaskText,
    completed: false
  }

  Task.push(TaskStoring);
  saveTasks();
  RenderTasks(TaskStoring)
  todoInput.value = "";
  console.log(Task)
})

function RenderTasks(task) {
     console.log(task.tasktext);
     const li = document.createElement('li');
     li.setAttribute("data-id", task.id);
     if (task.completed) {
        li.classList.add('completed')
     }
     li.innerHTML = `
    <span> ${task.tasktext} </span>
    <button> delete </button>`;

    li.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON') return;
      task.completed = !task.completed;
      li.classList.toggle('completed')
       saveTasks();
})

li.querySelector('button').addEventListener('click', (e) => {
        e.stopPropagation() //Prevent toggle from firing that is prevention of bubbling of the event
        Task = Task.filter((t) => t.id !== task.id)
        li.remove();
        saveTasks();
      })
     

    todoList.appendChild(li)
}

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(Task));
}
})