const spotlightsUrl = "https://sjjunker.github.io/wdd230/chamber/data/members.json";
const spotlights = document.querySelector("#spotlights");

//read the json
async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies);
    displayMembers(data.companies);
}

function displayMembers(members) {
    //Get three random numbers
    let memberOne = Math.floor(Math.random() * members.length);
    let memberTwo = Math.floor(Math.random() * members.length);
    let memberThree = Math.floor(Math.random() * members.length);

    //Make sure each number is unique and is not bronze
    while (members[memberOne].membership == "Bronze") {
        memberOne = Math.floor(Math.random() * members.length);
    }

    while (memberOne == memberTwo || members[memberTwo].membership == "Bronze") {
        memberTwo = Math.floor(Math.random() * members.length);
    }

    while (memberOne == memberThree || members[memberThree].membership == "Bronze") {
        memberThree = Math.floor(Math.random() * members.length);
    }

    while (memberThree == memberTwo || members[memberThree].membership == "Bronze") {
        memberThree = Math.floor(Math.random() * members.length);
    }

    //Create and array
    const spotlightArray = [members[memberOne], members[memberTwo], members[memberThree]];

    spotlightArray.forEach(member => {

        //Create document elements
        let card = document.createElement("div");
        card.classList.add("business-card");
        let name = document.createElement("h3");
        let photo = document.createElement("img");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let url = document.createElement("p");

        //Set element values
        name.innerHTML = member.name;

        photo.setAttribute("src", member.img);
        photo.setAttribute("alt", `Photo of ${member.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "auto");

        address.innerHTML = member.address;
        phoneNumber.innerHTML = member.phoneNumber;
        url.innerHTML = member.url;

        //console.log(name);

        //Set child elements to the card
        card.appendChild(name);
        card.appendChild(photo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(url);

        //Append to the apotlights section
        spotlights.appendChild(card);
    })
}

getMembers(spotlightsUrl);