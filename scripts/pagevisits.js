const pageVisits = document.querySelector("#page-visits");

//Get the number of visits from local storage
let visits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//Display the number of visits
if (visits !== 0) {
    pageVisits.innerHTML = visits;
} else {
    pageVisits.innerHTML = "This is your first visit. Welcome!";
}

//Increment visits
visits++;
localStorage.setItem("numVisits-ls", visits);
