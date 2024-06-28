//Get HTML Elements
const currentTemp = document.querySelector("#current-temp");
const currentHum = document.querySelector("#humidity");
const currentWindSpeed = document.querySelector("#wind-speed");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const dayOneLow = document.getElementById("day-one-low");
const dayOneHigh = document.getElementById("dayOneHigh");
const dayTwoLow = document.getElementById("dayTwoLow");
const dayTwoHigh = document.getElementById("dayTwoHigh");
const dayThreeLow = document.getElementById("dayThreeLow");
const dayThreeHigh = document.getElementById("dayThreeHigh");


//API url
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=43.27&lon=-85.53&units=imperial&appid=b119c36cdfc204d7f88190d1fd8b5ff4";


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
    currentTemp.innerHTML = `${data.list[0].main.temp}&degF`;
    currentHum.innerHTML = `${data.list[0].main.humidity}%`;
    currentWindSpeed.innerHTML = `${data.list[0].wind.speed}mph`;
    const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;

    //3 Day temperature forcast
    dayOneLow.innerHTML = `Low: ${data.list[1].main.temp_min}&degF`;
    dayOneHigh.innerHTML = `High: ${data.list[1].main.temp_max}&degF`;

    dayTwoLow.innerHTML = `Low: ${data.list[2].main.temp_min}&degF`;
    dayTwoHigh.innerHTML = `High: ${data.list[2].main.temp_max}&degF`;

    dayThreeLow.innerHTML = `Low: ${data.list[3].main.temp_min}&degF`;
    dayThreeHigh.innerHTML = `High: ${data.list[3].main.temp_max}&degF`;
}