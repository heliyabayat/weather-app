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

// function searchCity(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-text-input");
//   console.log(searchInput.value);
// }
// let form = document.querySelector("#search-form");
// form.addEventListener("submit", searchCity);

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-name");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#the-day-temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#the-day-temperature");
  temperatureElement.innerHTML = 19;

  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);
}
