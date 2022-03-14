const timeOnPge = () => {
  let seconds = 0;
  document.body.textContent = `You are currently ${seconds} seconds on this web page`;

  function timer() {
    seconds++;
    document.body.textContent = `You are currently ${seconds} seconds on this web page`;
  }

  return timer
}
const start = timeOnPge();

setInterval(start, 1000);