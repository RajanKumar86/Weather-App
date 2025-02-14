const cityName = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const apiKey = "516778d05d83e2151de70f587404b499";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkWeather(city) {
  const res = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
  if (res.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    var data = await res.json();

    cityName.innerHTML = data.name;

    temp.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }
    weather.style.display = "block";
    error.style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
