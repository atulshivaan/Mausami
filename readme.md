# Mausam

Mausam is a simple weather application that allows users to get the current weather information for a specified city. The application fetches data from the OpenWeatherMap API and displays it in a user-friendly format.

## Project Structure

- `index.html`: The main HTML file that contains the structure of the web page.
- `script.js`: The JavaScript file that handles fetching weather data from the OpenWeatherMap API and updating the DOM.
- `styles.css`: The CSS file that contains the styling for the web page.

## Usage

1. Open the `index.html` file in your web browser.
2. Enter the name of the city in the input field.
3. Click the "Get Mausam" button to fetch and display the weather information.

## API Key

The application uses the OpenWeatherMap API to fetch weather data. The API key is stored in the `script.js` file:

```javascript
const apikey = "3bc6b019ba446b71300d9a088cfbba72";