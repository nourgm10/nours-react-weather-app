import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3 align-items-center">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>{" "}
        </div>

        <div className="col-6 conditions">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      <div className="current-weather text-center">
        <img
          src={props.data.iconUrl}
          alt={props.data.description}
          className="align-bottom"
        />
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>
    </div>
  );
}
