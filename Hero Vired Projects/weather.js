const apiKey = 'Y(https://openweathermap.org/api';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=city_name&appid=${apiKey}&units=metric`;

const weatherContainer = document.querySelector('.weather-data');

async function fetchWeatherData(cityName) {
  const response = await fetch(apiUrl.replace('city_name', cityName));
  const data = await response.json();
  return data;
}

// Function to update the weather data on the webpage
function updateWeatherUI(data) {
  weatherContainer.innerHTML = `
    <p>City: ${data.name}</p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
}

// Function to handle errors
function handleError(error) {
  weatherContainer.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
}

// Entry point: Get the city name from the user and fetch/display weather data
const city = prompt('Enter a city name:');
if (city) {
  fetchWeatherData(city)
    .then(updateWeatherUI)
    .catch(handleError);
} else {
  weatherContainer.innerHTML = '<p>No city entered.</p>';
}
