const p1 = document.querySelector("#password1");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#wrong-password");

p2.addEventListener("focusout", checkSame);

//Check that the passwords are the same
function checkSame() {
    if (p1.value !== p2.value) {
        message.textContent = "Passwords do not match. Please try again.";
        message.style.visibility = "show";
        p2.style.backgroundColor = "#fff0f3";
        p1.value = "";
        p2.value = "";
        p1.focus();
    } else {
        message.style.display = none;
        p2.style.backgroundColor = "#fff";
        p2.style.color = "#000";
    }
}