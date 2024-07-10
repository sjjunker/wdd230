const rentalsSect = document.getElementById("cards");
const url = "https://sjjunker.github.io/wdd230/scoots/data/rentals.json";


async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayRentals(data.rentals);
}

function displayRentals(rentals) {

    rentals.forEach(rental => {
        //Create the card and its elements
        let card = document.createElement("article");
        let name = document.createElement("h3");
        let photo = document.createElement("img");

        //Set the attributes
        name.innerHTML = rental.name;
        photo.setAttribute("src", rental.image);
        photo.setAttribute("alt", `Photo of ${rental.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "auto");

        //Append the elements to the card
        card.appendChild(name);
        card.appendChild(photo);

        //Add the card to the DOM
        rentalsSect.appendChild(card);
    });
}

getMembers(url);