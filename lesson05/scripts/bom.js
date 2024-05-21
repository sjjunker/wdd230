const list = document.querySelector("#list");
const addButton = document.querySelector("button");
const input = document.querySelector("#favchap");

addButton.addEventListener("click", () => {

    if (input.value != "") {

        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        listItem.innerHTML = input.value;
        deleteButton.textContent = "❌";
        listItem.append(deleteButton);

        list.appendChild(listItem);

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
            input.focus();
        });

        input.value = "";

    } else {
        input.focus();
    }
});