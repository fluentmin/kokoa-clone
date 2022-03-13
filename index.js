const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const clock = document.querySelector(".status-bar__column:nth-child(2) span")

function onLoginSubmit(event) {
    const username = loginInput.value;
    localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function getClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    clock.innerText = (`${hours}:${minutes}`);
}

getClock();
setInterval(getClock, 1000);