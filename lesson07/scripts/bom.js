const list = document.querySelector("#list");
const addButton = document.querySelector("button");
const input = document.querySelector("#favchap");

addButton.addEventListener("click", () => {

    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});


//Save the book list
let chaptersArray = getChapterList() || [];

//populate the displayed list of chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//Display LIst function
function displayList(item) {
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");

    listItem.innerHTML = item;
    deleteButton.textContent = "❌";
    listItem.append(deleteButton);

    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

//Set local storage
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

//Get from local stoage
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

//Delete a chapter in local storage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}