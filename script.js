async function getCountry() {

const country = document.getElementById("countryInput").value;

const url = "https://restcountries.com/v3.1/name/" + country;

try {

const response = await fetch(url);

if (!response.ok) {
throw new Error("Country not found");
}

const data = await response.json();

const countryData = data[0];

document.getElementById("flag").src = countryData.flags.png;
document.getElementById("name").textContent = countryData.name.common;
document.getElementById("capital").textContent = countryData.capital[0];
document.getElementById("region").textContent = countryData.region;
document.getElementById("population").textContent = countryData.population;

document.getElementById("error").textContent = "";

}

catch (error) {

document.getElementById("error").textContent = error.message;

}

}
