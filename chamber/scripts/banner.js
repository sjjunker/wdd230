//Get the date
const bannerDate = new Date();
const day = bannerDate.getDay();

//Get the banner
const banner = document.getElementById("banner");

//Show if it is MOnday, TUesday, Wednesday
window.addEventListener("load", (event) => {
    if (day == 1 || day == 2 || day == 3) {
        banner.setAttribute("style", "opacity:1");
    } else {
        banner.setAttribute("style", "opacity:0");
    }
});

//Get the button
const bannerButton = document.getElementById("banner-exit");

//hide the banner when button is clicked
bannerButton.addEventListener("click", () => {
    banner.setAttribute("style", "opacity:0");
});
