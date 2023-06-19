const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
  const task = taskInput.value;
  if (task.trim() === '') {
    return;
  }

  const li = document.createElement('li');
  li.innerText = task;
  taskList.appendChild(li);
  taskInput.value = '';
}

taskList.addEventListener('click', completeTask);

function completeTask(e) {
  const target = e.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
}
