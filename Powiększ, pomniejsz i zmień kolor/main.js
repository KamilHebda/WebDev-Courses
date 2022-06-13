const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');
let fontSize = 36;

const biggerSize = () => {
  if (fontSize > 60) return; 
  
  fontSize += 5;
  p.style.fontSize = fontSize + 'px';
}

const lowerSize = () => {
   if (fontSize < 16) return;

  fontSize -= 5
  p.style.fontSize = fontSize + 'px';
}

const color = () => {

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  p.style.color = `rgb(${r}, ${g}, ${b})`;
}

sizeUp.addEventListener('click', biggerSize);
sizeDown.addEventListener('click', lowerSize);
colorBtn.addEventListener('click', color);