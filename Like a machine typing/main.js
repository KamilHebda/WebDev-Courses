const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = ['Hello!', "let's", 'start!']

let activeLetter = -20;
let activeText = 0;

const addLetter = () => {
  if (activeLetter >= 0){
    spanText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;
    
    return setTimeout(() => {
    activeLetter = -10;
      spanText.textContent = '';
      addLetter();
    }, 2000)
    

  }
  setTimeout(addLetter, 100);
}
addLetter();


const cursorAnimation = () => {
  spanCursor.classList.toggle('active');
}

setInterval(cursorAnimation, 400)