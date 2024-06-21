const url = "https://sjjunker.github.io/wdd230/chamber/data/members.json";
const memberDiv = document.querySelector(".members");

async function getMembers(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.companies);
    displayMembers(data.companies);
}

function displayMembers(members) {

    members.forEach((member) => {

        //Create document elements
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let membershipLevel = document.createElement("p");
        let photo = document.createElement("img");
        let address = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let url = document.createElement("p");

        //Set element values
        name.innerHTML = member.name;
        membershipLevel.innerHTML = member.membership;

        photo.setAttribute("src", member.img);
        photo.setAttribute("alt", `Photo of ${member.name}`);
        photo.setAttribute("loading", "lazy");
        photo.setAttribute("width", "200");
        photo.setAttribute("height", "auto");

        address.innerHTML = member.address;
        phoneNumber.innerHTML = member.phoneNumber;
        url.innerHTML = member.url;

        //Set child elements to the card
        card.appendChild(name);
        card.appendChild(membershipLevel);
        card.appendChild(photo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(url);

        //Append card to the member div
        memberDiv.appendChild(card);
    });
}

getMembers(url);



//Change from grid view to list view
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".members");

//The grid
gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});


//The list
listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});
