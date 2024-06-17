const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //Create document elements
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");

        //Set the h2 and p elements to proper information
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birthdate.innerHTML = `Date of birth: ${prophet.birthdate}`;
        birthplace.innerHTML = `Place of birth: ${prophet.birthplace}`;

        //Set the img attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name}.`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        //Append to the card element
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        //Add the card to the "cards" div
        cards.appendChild(card);
    });
}