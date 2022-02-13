const profileUsername = document.querySelector("#user-component__username");

profileUsername.textContent = localStorage.getItem("username");