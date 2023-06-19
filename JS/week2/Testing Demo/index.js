class Todo {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push({ task, completed: false });
  }

  completeTask(index) {
    this.tasks[index].completed = true;
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }
}

module.exports = Todo;