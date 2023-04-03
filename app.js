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

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  // alert("searching");
  // console.log(searchInput.value);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `search for ${searchInput.value}....`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
