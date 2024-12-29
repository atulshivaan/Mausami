const apikey = "3bc6b019ba446b71300d9a088cfbba72";

const weatherData = document.getElementById("weather-data");
const cityInput = document.getElementById("city");
const formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityValue = cityInput.value.trim();
    if (cityValue) {
        getWeatherData(cityValue);
    }
});

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
        );

        if (!response.ok) {
            throw new Error(`City not found or invalid request!`);
        }

        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`,
        ];

        // Update the DOM
        weatherData.querySelector(
            ".icon"
        ).innerHTML = `<img class="img" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">`;
        weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherData.querySelector(".description").textContent = description;
        weatherData.querySelector(".details").innerHTML = details
            .map((detail) => `<div>${detail}</div>`)
            .join("");

    } catch (error) {
        // Display error message
        weatherData.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}
