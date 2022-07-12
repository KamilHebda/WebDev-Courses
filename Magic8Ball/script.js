const img = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArr = [
  "Tak!",
  "Nie.",
  "Może.",
  "Ciężko powiedzieć...",
  "Nie chcesz znać odpowiedzi na to pytanie...",
];

const animation = () => {
  img.classList.add("shake-animation");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = "Pytanie musi być zakończone znakiem '?'.";
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać jakieś pytanie";
    answer.textContent = "";
  }
  img.classList.remove("shake-animation");
};

const generateAnswer = () => {
  const number = Math.floor(Math.random() * 5);
  answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
};

img.addEventListener("click", animation);
