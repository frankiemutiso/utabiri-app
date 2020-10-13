import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";

function App() {
  const [weather, setWeather] = useState([]);

  const APIKEY = "2af5881a6979d8aba584a4cdf73c4444";

  useEffect(() => {
    const fetchDataOnLoad = async () =>
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&units=metric&appid=${APIKEY}`
      )
        .then((response) => response.json())
        .then((data) =>
          setWeather({
            city: data.name,
            country: data.sys.country,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            temperature: data.main.temp,
            highs: data.main.temp_max,
            lows: data.main.temp_min,
            feels_like: data.main.feels_like,
            wind: data.wind.speed,
            humidity: data.main.humidity
          })
        );

    fetchDataOnLoad();
  }, []);

  const getWeatherData = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then((data) =>
        setWeather({
          cod: data.cod,
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          highs: data.main.temp_max,
          lows: data.main.temp_min,
          feels_like: data.main.feels_like,
          wind: data.wind.speed,
          humidity: data.main.humidity
        })
      )
      .catch((error) =>
        setWeather({ error: "Sorry! No weather details for this city" })
      );
  };

  return (
    <div className="app">
      <Form getWeatherData={getWeatherData} />
      <div>
        {weather.city && weather.country && (
          <h2>
            {weather.city},{" "}
            <span style={{ color: "#53555e" }}>{weather.country}</span>
          </h2>
        )}
      </div>
      <div>{weather.error && <h2>{console.log(weather.error)}</h2>}</div>

      <WeatherDetails
        city={weather.city}
        country={weather.country}
        description={weather.description}
        icon={weather.icon}
        temperature={weather.temperature}
        highs={weather.highs}
        lows={weather.lows}
        feels_like={weather.feels_like}
        wind={weather.wind}
        humidity={weather.humidity}
        error={weather.error}
      />
    </div>
  );
}

export default App;
