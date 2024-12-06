import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherDetails = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const api_key = process.env.REACT_APP_WEATHER_API_KEY; // Päivitetty

  useEffect(() => {
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
  }, [capital, api_key]);

  if (!weather) {
    return <p>Loading weather data...</p>;
  }

  return (
    <div>
      <h3>Weather in {capital}</h3>
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
  );
};

export default WeatherDetails;