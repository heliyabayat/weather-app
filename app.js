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

function displayWeatherCondition(response) {
  document.querySelector(".city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  let weatherConditionImg = document.querySelector(".top-left__img");
  weatherConditionImg.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function search(event) {
  event.preventDefault();
  console.log("button clicked");
  let searchInput = document.querySelector("#search-text-input");
  // alert("searching");
  // console.log(searchInput.value);
  // let h1 = document.querySelector("h1");
  // h1.innerHTML = `search for ${searchInput.value}....`;
  let cityName = document.querySelector("#search-text-input").value;
  let apiKey = "2ff29bed3181c3526c35cc5408037f85";
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
