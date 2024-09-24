const apiKey = "4b106785d76f57cbf9cda20172eb8f35";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0] == "Clouds") {
      weatherIcon.src = "images/cloud.png";
    } else if (data.weather[0] == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0] == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0] == "Humidity") {
      weatherIcon.src = "images/humidity.png";
    } else if (data.weather[0] == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0] == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0] == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0] == "Wind") {
      weatherIcon.src = "images/wind.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
