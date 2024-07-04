const showDate = document.querySelector("#last-visit");

//Get today's date in milliseconds
const todaysDate = Date.now();

//Get the last date of visitation from local storage
let lastDate = Number(window.localStorage.getItem("last-date")) || date;

//Get # of days
let days = (todaysDate - lastDate) / 86400000;

//Display Message
if (lastDate == todaysDate) {
    showDate.innerHTML = "Welcome! Let us know if you have any questions.";
} else if (todaysDate - lastDate <= 86400000) {
    showDate.innerHTML = "Back so soon! Awesome!";
} else {
    showDate.innerHTML = `You last visited ${days.toFixed(0)} days ago.`;
}

//Set new last date
window.localStorage.setItem("last-date", todaysDate);
