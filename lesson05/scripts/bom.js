const list = document.querySelector("#list");
const addButton = document.querySelector("button");
const input = document.querySelector("#favchap");
let number = 1;

addButton.addEventListener("click", () => {

    if (input.value != "") {

        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItem.innerHTML = `${number}. ${input.value}`;
        deleteButton.textContent = "❌";
        listItem.append(deleteButton);

        list.appendChild(listItem);

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
            input.focus();
        });

        input.value = "";
        number += 1;

    } else {
        input.focus();
    }
});

//Extra functionality added numbers to the list.