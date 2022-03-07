document.body.addEventListener('click', function (event) {
  console.log(event.clientX, event.clientY);

  const x = event.clientX;
  const y = event.clientY;

  if (x % 2 == 0 && y % 2 == 0) {
    document.body.style.backgroundColor = 'red';
  }
  else if (x % 2 == !0 && y % 2 == !0) {
    document.body.style.backgroundColor = 'green';
  }
  else {
    document.body.style.backgroundColor = 'blue';
  }
})