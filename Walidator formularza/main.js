const username = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const showError = (input, msg) => {
  //argument input przechowuje nasze inputy
  //argument msg przechowuje placeholder

  const formBox = input.parentElement;
  const errorMsg = formBox.querySelector(".error-text");

  formBox.classList.add("error");
  errorMsg.textContent = msg;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((el) => {
    if (el.value === "") {
      showError(el, el.placeholder);
    } else {
      clearError(el);
    }
  });
};

//argument input z funkcji 'checkForm' przechowuje tablicę z naszymi inputami
//argument el odnosi się do każdej zmiennej, którą umieściliśy w tablicy

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} składa się z min. ${min} znaków.`
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, "Hasła się nie zgadzają.");
  }
};

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([username, pass, pass2, email]);
  checkLength(username, 3);
  checkLength(pass, 8);
  checkPassword(pass, pass2);
});

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();

  [username, pass, pass2, email].forEach((el) => {
    el.value = "";
  });
});