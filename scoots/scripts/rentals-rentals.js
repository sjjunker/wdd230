const rentalTable = document.getElementById("rental-vehicles");
const url = "https://sjjunker.github.io/wdd230/scoots/data/rentals.json";


async function getRentals(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayRentals(data.rentals);
}

function displayRentals(rentals) {

    rentals.forEach(rental => {
        //Create the table row and its elements
        let tableRow = document.createElement("tr");
        let name = document.createElement("th");
        let maxPeople = document.createElement("td");
        let halfReserv = document.createElement("td");
        let fullReserv = document.createElement("td");
        let halfWalk = document.createElement("td");
        let fullWalk = document.createElement("td");

        //Set the attributes
        name.innerHTML = rental.name;
        maxPeople.innerHTML = rental.maxPeople;
        halfReserv.innerHTML = rental.halfDayReservation;
        fullReserv.innerHTML = rental.fullDayReservation;
        halfWalk.innerHTML = rental.halfDayWalk;
        fullWalk.innerHTML = rental.fullDayWalk;

        //Append the elements to the row
        tableRow.appendChild(name);
        tableRow.appendChild(maxPeople);
        tableRow.appendChild(halfReserv);
        tableRow.appendChild(fullReserv);
        tableRow.appendChild(halfWalk);
        tableRow.appendChild(fullWalk);

        //Add the row to the DOM
        rentalTable.appendChild(tableRow);
    });
}

getRentals(url);