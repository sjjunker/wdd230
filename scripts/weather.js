//Get HTML Elements
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//API url
//TODO: Update location to fort Novosel
const url = "https://api.openweathermap.org/data/2.5/weather?lat=31.4&lon=-85.75&units=imperial&appid=b119c36cdfc204d7f88190d1fd8b5ff4";

//Fetch
async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//Call fetch function
apiFetch();

//Display the results
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&degF`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}