let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red+=3}, ${green+=3}, ${blue+=3})`;
      break;
  }
  switch (e.keyCode) {
    case 40:
      document.body.style.backgroundColor = `rgb(${red-=3}, ${green-=3}, ${blue-=3})`;
      break;
  }

}

window.addEventListener('keydown', changeColor)