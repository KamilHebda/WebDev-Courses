const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');
const inputForSearch = document.querySelector('input.search');

const searchTask = (e) => {
  const liElements = document.querySelectorAll('li');
  const searchText = e.target.value.toLowerCase()
  let tasks = [...liElements];
  tasks = tasks.filter(li => li.textContent.toLocaleLowerCase().includes(searchText))
  ul.textContent = '';
  tasks.forEach(li => ul.appendChild(li))
}

const deleteTask = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  renderList();
}

const addTask = (e) => {
e.preventDefault()
const titleTask = input.value;
if (titleTask === "") return;
const task = document.createElement('li');
task.className = 'task';
task.innerHTML = titleTask + "<button>Usuń</button>";
toDoList.push(task);
renderList();
ul.appendChild(task);
input.value = "";
taskNumber.textContent = listItems.length;
task.querySelector('button').addEventListener('click', deleteTask);

}
const renderList = () => {
  ul.textContent = '';
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  })
}
form.addEventListener('submit', addTask);

inputForSearch.addEventListener('input', searchTask);