const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.checked) {
        main.style.background = "#000000";
        main.style.color = "#FFFFFF";
    } else {
        main.style.background = "#FFFFFF";
        main.style.color = "#000000";
    }
});