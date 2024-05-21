import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      precipitation: response.data.rain,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-dark w-100"
              />
            </div>
          </div>
        </form>
        <div className="row mt-3 align-items-center">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>{" "}
          </div>

          <div className="col-6 conditions">
            <ul>
              <li>Precipitation: 0%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="current-weather text-center">
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="align-bottom"
          />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
    );
  } else {
    const apiKey = "b40b135798f82a05aed08769f9275f50";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="Weather">
        <h3>Loading...</h3>
      </div>
    );
  }
}
