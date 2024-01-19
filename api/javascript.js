document.addEventListener('DOMContentLoaded', () => {
    const locationInput = document.getElementById('location');
    const getWeatherButton = document.getElementById('getWeather');
    const weatherInfoDiv = document.getElementById('weatherInfo');

    getWeatherButton.addEventListener('click', getWeather);

    function getWeather() {
        const location = locationInput.value;

        if (!location) {
            alert('Please enter a location.');
            return;
        }

        fetchWeatherData(location)
            .then(displayWeather)
            .catch(handleError);
    }

    function fetchWeatherData(location) {
        const apiKey = 'a27c14ce2f22d43287c55fc1da0aac29'; // Replace with your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        return fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Location not found');
                }
                return response.json();
            });
    }

    function displayWeather(data) {
        const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
        const humidity = data.main.humidity;
        const description = data.weather[0].description;

        const weatherInfo = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Description: ${description}</p>
        `;

        weatherInfoDiv.innerHTML = weatherInfo;
    }

    function handleError(error) {
        weatherInfoDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
});
