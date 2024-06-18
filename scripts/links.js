const baseURL = "https://sjjunker.github.io/wdd230/";
const linksURL = "https://sjjunker.github.io/wdd230/data/links.json";
const unorderedList = document.querySelector("#learning-activities");

async function getLinks() {
    const promise = await fetch(linksURL);
    const data = await promise.json();
    console.log(data);

    displayLinks(data);
}

function displayLinks(weeks) {
    weeks.forEach((week) => {
        //Create Elements
        let listItem = document.createElement("li");
        listItem.innerHTML = `Week ${week.lesson}:`;

        //Go through each link in the lesson
        week.list.forEach((link) => {
            let linkItem = document.createElement("a");
            linkItem.setAttribute("href", link.url);
            linkItem.innerHTML = ` ${link.title}`;
            listItem.appendChild(linkItem);
        });

        //Append to the unordered list
        unorderedList.appendChild(listItem);
    });
}

getLinks();