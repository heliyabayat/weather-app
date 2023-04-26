const apiKey = "2ff29bed3181c3526c35cc5408037f85";

// get first number
let firstNumber = document.getElementById("firstNumId");
// get second number
let secondNumber = document.getElementById("secondNumId");
// write a function to accept two numbers
function sumTwoNums(num1, num2) {
  // add two numbers
  return num1 + num2;
}

let now = new Date();

let h2 = document.querySelector("#city-date");

let date = now.getDate();
let hours = now.getHours();
let min = now.getMinutes();
// let years = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = ["Jan", "Feb", "March", "Apr", "May"];
let month = months[now.getMonth()];

h2.innerHTML = ` ${date} ${month} ${hours}:${min}`;

function getDayDetails(day, response) {
  let morn = Math.round(response.data.daily[day].temp.morn) - 273;
  let night = Math.round(response.data.daily[day].temp.night) - 273;
  let icon = response.data.daily[day].weather[0].icon;
  let dayMorning = document.querySelector(`.day${day + 1}-morning`);
  let dayNight = document.querySelector(`.day${day + 1}-night`);
  let dayImg = document.querySelector(`.day${day + 1}-img`);
  dayMorning.innerHTML = morn;
  dayNight.innerHTML = night;
  dayImg.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${icon}@2x.png`
  );
}

function displayForecastData(response) {
  getDayDetails(0, response);
  getDayDetails(1, response);
  getDayDetails(2, response);
  getDayDetails(3, response);
  getDayDetails(4, response);
}

function displayWeatherCondition(response) {
  document.querySelector(".city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(
    ".city-wind"
  ).innerHTML = `wind: ${response.data.wind.speed} km, humidity: ${response.data.main.humidity} %`;
  let weatherConditionImg = document.querySelector(".top-left__img");
  weatherConditionImg.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  //forecast
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`;
  forecastRes = axios.get(forecastUrl).then(displayForecastData);
}

function search(event) {
  event.preventDefault();
  console.log("button clicked");
  let searchInput = document.querySelector("#search-text-input");
  let cityName = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

const unitsEl = document.querySelector(".units");
const temperatureElement = document.querySelector("#temperature");

function toggleTempType(type) {
  let currentValue = temperatureElement.innerHTML;
  let convertedValue = 0;
  if (type === "celsius") {
    convertedValue = (currentValue * 9) / 5 + 32;
  } else {
    convertedValue = ((currentValue - 32) * 5) / 9;
  }
  temperatureElement.innerHTML = Math.round(convertedValue);
  unitsEl.classList.toggle("celsius");
  unitsEl.classList.toggle("fahrenheit");
}

function convertToFahrenheit(event) {
  event.preventDefault();
  toggleTempType("fahrenheit");
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  toggleTempType("celsius");
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
