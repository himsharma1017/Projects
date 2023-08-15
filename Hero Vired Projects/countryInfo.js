const apiUrl = 'https://restcountries.com/v3.1/name/';

const countryContainer = document.querySelector('.country-info');

// Function to fetch country data from the API
async function fetchCountryData(countryName) {
  const response = await fetch(`${apiUrl}${countryName}`);
  const data = await response.json();
  return data;
}

// Function to update the country data on the webpage
function updateCountryUI(data) {
  const countryInfo = data[0];
  const languages = Object.values(countryInfo.languages).join(', ');

  countryContainer.innerHTML = `
    <p>Name: ${countryInfo.name.common}</p>
    <p>Capital: ${countryInfo.capital}</p>
    <p>Population: ${countryInfo.population}</p>
    <p>Languages: ${languages}</p>
    <p>Region: ${countryInfo.region}</p>
  `;
}

// Function to handle errors
function handleError(error) {
  countryContainer.innerHTML = `<p>Error fetching country data: ${error.message}</p>`;
}

// Entry point: Get the country name from the user and fetch/display country data
const countryName = prompt('Enter a country name:');
if (countryName) {
  fetchCountryData(countryName)
    .then(updateCountryUI)
    .catch(handleError);
} else {
  countryContainer.innerHTML = '<p>No country name entered.</p>';
}
