//Set date
const date = new Date();

document.getElementById("lastModified").innerHTML = `Last Modified: ${date.toLocaleDateString("en-US")}`;
document.querySelector("span").innerHTML = date.getFullYear();

//Time and date form submitted
document.getElementById("dateTime").value = date;



