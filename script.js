"use strict";

let inputCity = document.querySelector(".inputCity");
let searchBtn = document.querySelector(".searchBtn");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let weatherIcon = document.querySelector(".weather-icon");

let apiKey = "&appid=71c1b285b82ebbce3e3812586b72ca78";

searchBtn.addEventListener("click", () => {
  let inputvalue = inputCity.value;
  console.log(inputvalue);

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&units=metric`;

  let rose = url + apiKey;
  console.log(rose);
  fetch(url + apiKey)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.cod == "404") {
        return (
          (temp.textContent = data.cod),
          (city.textContent = data.message),
          (wind.textContent = "N/A"),
          (humidity.textContent = "N/A")
        );
      } else {
        (temp.textContent = `${Math.floor(data.main.temp)}°C`),
          (city.textContent = `${data.name}, ${data.sys.country}`),
          (wind.textContent = `${data.wind.speed} KM/h`),
          (humidity.textContent = `${data.main.humidity}%`);
      }
      if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
      } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
      } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png";
      }

      document.querySelector(".weather").style.display = "block";
    });
});
