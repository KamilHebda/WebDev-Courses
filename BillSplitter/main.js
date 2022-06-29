const priceVal = document.getElementById('price');
const peopleVal = document.getElementById('people');
const tipVal = document.getElementById('tip');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const errorInfo = document.querySelector('.error');
const costVal = document.querySelector('.cost');


const bill = () => {
  if (priceVal.value == "" || peopleVal.value == "" || tipVal.value == 0) {
    errorInfo.textContent = "Uzupełnij wszystkie pola!";
    costInfo.style.display = "none";
  } else {
    errorInfo.textContent = "";
    countBill()
  }
}

const countBill = () => {
  const price = parseInt(priceVal.value);
  const people = parseInt(peopleVal.value);
  const tip = parseInt(tipVal.value);

  const sum = (price + (price * tip)) / people;

  costInfo.style.display = "block";
  costVal.textContent = sum.toFixed(2);
}

countBtn.addEventListener('click', bill);
