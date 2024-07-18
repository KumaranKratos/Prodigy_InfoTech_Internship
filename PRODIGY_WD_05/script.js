document.getElementById("getWeather").addEventListener("click", function () {
  const location = document.getElementById("location").value;
  if (location) {
    fetchWeather(location);
  } else {
    alert("Please enter a location.");
  }
});

function fetchWeather(location) {
  const apiKey = "9df73f83950583d5165dc35eeda73f16"; 

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.cod === 200) {
        displayWeather(data);
      } else {
        alert("Location not found.");
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data.");
    });
}

function displayWeather(data) {
  document.getElementById("city").innerText = `City: ${data.name}`;
  document.getElementById(
    "temperature"
  ).innerText = `Temperature: ${data.main.temp}°C`;
  document.getElementById(
    "description"
  ).innerText = `Weather: ${data.weather[0].description}`;
  document.getElementById(
    "humidity"
  ).innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById(
    "wind"
  ).innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
