import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("dsfdgd");
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Lahore,Pakistan&appid=e4c382f216f9a34d671e9ecb4e4f53d7&units=metric`
        );
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (!weather) {
    return <div>Unable to fetch weather data</div>;
  }

  return (
    <div className="weather">
      <h2>Current Weather</h2>
      <p>Location: {weather.name}</p>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default Weather;
