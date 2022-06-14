let toDoInput //miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo // info o braku zadań
let addBtn // przycisk ADD - dodaje nowe elementy do listy
let ulList // lista zadań, tagi UL
let newToDos //nowododany Li, nowe zadanie
let popup // popup
let popupInfo // tekst w popupie, jak się doda pusty tekst
let toDoToEdit // edytowany Todo
let popupInput // input w popupie
let popupAddBtn // przycisk zatwierdź w popupie
let popupCloseBtn //przycisk anuluj w popupie

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();

}

const prepareDOMElements = () => {
  toDoInput = document.querySelector('.todo-input');
  errorInfo = document.querySelector('.error-info');
  addBtn = document.querySelector('.btn-add');
  ulList = document.querySelector('.todolist ul');
  popup = document.querySelector('.popup');
  popupInfo = document.querySelector('.popup-info');
  popupInput = document.querySelector('.popup-input')
  popupAddBtn = document.querySelector('.accept');
  popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
  addBtn.addEventListener('click', addNewToDo);
  ulList.addEventListener('click', checkClick);
  popupCloseBtn.addEventListener('click', closePopup);
}

/*
1. tworzy nowy element Li
2. dodaje nowy element to ul
3. funkcja odpalana na click w przycisk ADD
4. przechwytuje treść z inputa i umieszcza go w nowo utworzonym Li
5. funkcja nie doda do listy pustego todosa

*/

const addNewToDo = () => {
  if (toDoInput.value !== '') {
    newToDos = document.createElement('li');
    newToDos.textContent = toDoInput.value;
    createToolsArea();
    ulList.append(newToDos);

    toDoInput.value = '';
    errorInfo.textContent = '';
  } else
    errorInfo.textContent = "Wpisz treść zadania!"
}

const createToolsArea = () => {
  const toolsPanel = document.createElement('div');
  toolsPanel.classList.add('tools');
  newToDos.append(toolsPanel);


  const completeBtn = document.createElement('button');
  completeBtn.classList.add('complete');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>'

  const editBtn = document.createElement('button');
  editBtn.classList.add('edit');
  editBtn.textContent = "EDIT";

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
}

const checkClick = e => {
  if (e.target.matches('.complete')) {
    
    e.target.closest('li').classList.toggle('completed');
    e.target.classList.toggle('completed');
  } else if (e.target.matches('.edit')){
    editToDo(e);
  } else if (e.target.matches('.delete')) {
    console.log
  }
}

const editToDo = e => {
  toDoToEdit = e.target.closest('li');
  console.log(toDoToEdit.firstChild);
  popup.style.display = 'flex';
}

const closePopup = () => {
  popup.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', main)