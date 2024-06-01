/*Get temperature and windspeed*/
const temperature = document.querySelector("#temperature").innerHTML;
const windSpeed = document.querySelector("#wind-speed").innerHTML;

/*Check that temperature is <=50 degrees and 
wind speed is >= 3mph*/
/*Display/calculate windchill or display N/A*/
const windChillSpan = document.querySelector("#wind-chill");

if (temperature <= 50 && windSpeed >= 3) {
    let windChill = 35.74 + .6215 * temperature - 35.75 * (windSpeed ** .16) + .4275 * temperature * (windSpeed ** .16);
    windChill = (Math.round(windChill * 100) / 100).toFixed(0);
    windChillSpan.innerText = `${windChill}°F`;
} else {
    windChillSpan.innerText = "N/A";
}


