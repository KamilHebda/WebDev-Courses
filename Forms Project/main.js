const addElement = (e, node, txt, attr, value) => {
  e.preventDefault();
  const element = document.createElement(node);
  if (txt) {
    const text = document.createTextNode(txt);
    element.appendChild(text);
  }
  if (attr) {
    element.setAttribute(attr, value)
    }
  document.querySelector('.content').appendChild(element);
}

const searchElements = (e, element) => {
  e.preventDefault();
  const infoElement = document.querySelector('.result');
  infoElement.textContent = '';
  const elements = document.querySelectorAll(element);
  if (elements.length) {
    infoElement.innerHTML = `<p class="result__info"> Found <strong>${elements.length} ${element} </strong> elements in this document </p>`
    showInfo(elements, infoElement)
  } else {
    infoElement.innerHTML = `<p class="result__info"> I haven't found <strong>${element}</strong> elements in this document </p>`
    return;
  }
}

const showInfo = (elements, infoElement) => {
  elements.forEach((element) => {
    const item = document.createElement('div');
    item.className = 'result__element-description';
    item.innerHTML = `
    <div>${element.nodeName}</div>
    <div>class: ${element.className}</div>
    <div>offset height: ${element.offsetHeight}</div>
    <div>offset width: ${element.offsetWidth}</div>
    <div>offset left: ${element.offsetLeft}</div>
    <div>offset top: ${element.offsetTop}</div>
    <div>child element count: ${element.childElementCount}</div>
    `;
    infoElement.appendChild(item);
  })
}


const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
  e,
  addForm.elements.node.value,
  addForm.elements.txt.value,
  addForm.elements.attr.value,
  addForm.elements.value.value,
))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));