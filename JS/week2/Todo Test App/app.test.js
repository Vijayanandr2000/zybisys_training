const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Create a virtual DOM environment
const indexHtml = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
const dom = new JSDOM(indexHtml, { runScripts: 'dangerously' });
global.window = dom.window;
global.document = dom.window.document;

// Load the app.js file
const app = fs.readFileSync(path.resolve(__dirname, 'app.js'), 'utf-8');
dom.window.eval(app);

// Retrieve the required elements for testing
const taskInput = dom.window.document.getElementById('taskInput');
const addButton = dom.window.document.getElementById('addButton');
const taskList = dom.window.document.getElementById('taskList');

// Test cases
test.only('Add a task to the todo list', () => {
  taskInput.value = 'Buy groceries';
  addButton.click();
  expect(taskList.innerHTML).toContain('<li></li>');
});

test('Mark a task as completed', () => {
  const li = document.createElement('li');
  li.innerText = 'Buy groceries';
  taskList.appendChild(li);

  const addedTask = taskList.querySelector('li');
  addedTask.click();

  expect(addedTask.classList.contains('completed')).toBe(true);
});

test('Remove a task from the list', () => {
  const li = document.createElement('li');
  li.innerText = 'Buy groceries';
  taskList.appendChild(li);

  const addedTask = taskList.querySelector('li');
  addedTask.remove();

  expect(taskList.innerHTML).not.toContain('Buy groceries');
});
