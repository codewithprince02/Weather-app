const apiKey = "19cecc88dcf436130a8305e8eaffcd1b";

async function getWeather() {

const city = document.getElementById("city").value;

const api = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ city + "&units=metric&appid=" + apiKey;

const response = await fetch(api);
const data = await response.json();

if (data.cod !== 200) {
alert("City not found");
return;
}

document.getElementById("temp").innerHTML = data.main.temp + " °C";
document.getElementById("cityName").innerHTML = data.name;
document.getElementById("humidity").innerHTML = data.main.humidity + " %";
document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

}