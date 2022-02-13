const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    const username = loginInput.value;
    localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", onLoginSubmit);


