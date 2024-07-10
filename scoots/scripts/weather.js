//Get HTML Elements
const currentTemp = document.querySelector("#current-temp");
const currentHum = document.querySelector("#humidity");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-description");
const tomorrowsHigh = document.querySelector("#tomorrows-high");


//API url
const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.4&lon=-86.9&units=imperial&appid=b119c36cdfc204d7f88190d1fd8b5ff4";

//Fetch
async function apiFetch() {
    try {
        let response = await fetch(weatherUrl);
        if (response.ok) {
            let data = await response.json();
            displayResults(data);
            console.log(data);
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
    currentTemp.innerHTML = `${data.list[0].main.temp}&degF`;
    currentHum.innerHTML = `${data.list[0].main.humidity}%`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    weatherDesc.innerHTML = `${desc}`;
    tomorrowsHigh.innerHTML = `High: ${data.list[1].main.temp_max}&degF`;
}