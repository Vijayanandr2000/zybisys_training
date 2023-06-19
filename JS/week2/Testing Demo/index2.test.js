const Todo = require('./index.js');

test('Add a task to the todo list', () => {
  const todo = new Todo();
  todo.addTask('Buy groceries');
  expect(todo.tasks).toEqual([{task:'Buy groceries',completed: false}]);
});

test('Mark a task as completed', () => {
  const todo = new Todo();
  todo.addTask('Buy groceries');
  todo.completeTask(0);
  expect(todo.tasks[0].completed).toBe(true);
});

test('Remove a task from the list', () => {
  const todo = new Todo();
  todo.addTask('Buy groceries');
  todo.addTask('Walk the dog');
  todo.removeTask(1);
//   console.C
  expect(todo.tasks.length).toEqual(1);
});
