import React from "react";
import "./WeatherDetails.css";

function WeatherDetails({
  icon,
  description,
  temperature,
  highs,
  lows,
  feels_like,
  wind,
  humidity,
  error
}) {
  return (
    <div className="weatherDetails">
      {error && <h1>{error}</h1>}
      {icon && description && temperature && feels_like && (
        <div className="weatherDetails__top">
          <div className="weatherDetails__topLeft">
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="weather icon"
            />

            <p>{`${
              description.charAt(0).toUpperCase() + description.slice(1)
            }`}</p>
          </div>
          <div className="weatherDetails__topRight">
            <h1>{Math.round(temperature)}°</h1>
            <h6>Feels like {Math.floor(feels_like)}°</h6>
          </div>
        </div>
      )}
      {highs && lows && wind && humidity && (
        <div className="weatherDetails__bottom">
          <div className="weatherDetails__bottomExtra">
            <div className="highs">
              <h5>Highs</h5>
              <h4>{Math.round(highs)}°</h4>
            </div>
          </div>
          <div className="weatherDetails__bottomExtra">
            <div className="lows">
              <h5>Lows</h5>
              <h4>{Math.round(lows)}°</h4>
            </div>
          </div>
          <div className="weatherDetails__bottomExtra">
            <div className="wind">
              <h5>Wind</h5>
              <h4>{Math.round(wind)}m/s</h4>
            </div>
          </div>
          <div className="weatherDetails__bottomExtra">
            <div className="humidity">
              <h5>Humidity </h5>
              <h4> {humidity}%</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDetails;
