import React, { useEffect, useState } from "react";
import axios from "axios";


const Details = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  // Fetch the weather data for the country's capital city
  useEffect(() => {
    const capital = country.capital?.[0];
    if (capital) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`;
      axios
        .get(weatherUrl)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [country.capital, api_key]);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()} people
      </p>
      <p>
        <strong>Area:</strong> {country.area.toLocaleString()} km²
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={{ width: "200px" }}
      />

      {weather ? (
        <div>
          <h3>Weather in {country.capital?.[0]}</h3>
          <p>
            <strong>Temperature:</strong> {weather.main.temp} °C
          </p>
          <p>
            <strong>Condition:</strong> {weather.weather[0].description}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather icon"
          />
          <p>
            <strong>Wind:</strong> {weather.wind.speed} m/s
          </p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Details;
