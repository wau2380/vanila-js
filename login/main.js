const loginInput = document.querySelector(".login-form input");
const loginForm = document.querySelector(".login-form");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
