const overlay = document.querySelector(".overlay");
const picture = document.querySelector(".hero");

window.addEventListener("resize", function () {
    if (picture.clientWidth > 750) {
        overlay.innerHTML = "Large";
    } else if (picture.clientWidth <= 400) {
        overlay.innerHTML = "Small";
    } else {
        overlay.innerHTML = "Medium";
    }
});