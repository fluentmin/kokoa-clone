const warning = document.querySelector(".user-component__alert");

function handleWarningMouseOver() {
    warning.innerText = "Check your number";
}

function handleWarningMouseLeave() {
    warning.innerText = "1 warning";
}

warning.addEventListener("mouseover", handleWarningMouseOver);
warning.addEventListener("mouseleave", handleWarningMouseLeave);