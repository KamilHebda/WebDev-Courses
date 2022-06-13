const conventer = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit
let celcius

const change = () => {
  if (one.textContent === '°C') {
    one.textContent = '°F';
    two.textContent = '°C';
    result.textContent = '';
  } else {
    one.textContent = '°C';
    two.textContent = '°F';
    result.textContent = '';
  }
}

const fahrToCel = () => {
  fahrenheit = conventer.value * 1.8 + 32
  result.textContent = `${conventer.value} °C to ${fahrenheit.toFixed(1)} °F`;
  conventer.value = '';
}

const celToFahr = () => {
  celcius = (conventer.value - 32) / 1.8;
  result.textContent = `${conventer.value} °F to ${celcius.toFixed(1)} °C`;
  conventer.value = '';
}

const conversion = () => {
  if (conventer.value !== '') {
    if (one.textContent === '°C') {
      fahrToCel();
    } else{
      celToFahr();
    }
  } else
    result.textContent = 'Musisz podać jakąś wartość!'
}

const reset = () => {
  conventer.value = '';
  result.textContent = '';
}

changeBtn.addEventListener('click', change);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);