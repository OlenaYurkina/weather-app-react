import "./App.css";
import React, { useState } from "react";

import axios from "axios";

export default function Main() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Main">
        <div className="Header">
          <div className="row">
            <div className="col right" id="date-right">
              Monday, 12:00
            </div>
            <div className="col left">30.05.2022</div>
          </div>
        </div>
        <div className="Form">
          <form id="search-city">
            <input
              type="search"
              size="20"
              placeholder="Type a city"
              id="city-input"
            />

            <input type="submit" value="Search" id="search-button" />
            <button id="current-button">Current</button>
          </form>
        </div>

        <div className="Central">
          <div className="row">
            <div className="col humidity">
              Humidity <br />
              {weatherData.humidity}%
            </div>

            <div className="col" id="central">
              <span id="main-city">{weatherData.city}</span> <br />
              <span id="main-temperature">{Math.round(weatherData.temp)}</span>
              <sup>
                <span>
                  {" "}
                  <a href="#0" id="celsius-temp">
                    °C/
                  </a>{" "}
                </span>
                <span>
                  {" "}
                  <a href="#0" id="farenheit-temp">
                    °F
                  </a>{" "}
                </span>
              </sup>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
              ></img>
            </div>

            <div className="col wind">
              Wind <br />
              <span id="main-wind">{weatherData.wind}</span> km/hour
            </div>
          </div>
        </div>
        <div className="days">
          <div className="row">
            <div className="col">
              Tue
              <p>
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
                  alt="brokenclouds"
                ></img>
              </p>
              22°C
            </div>
            <div className="col">
              Wed
              <p>☀️</p>
              22°C
            </div>
            <div className="col">
              Thu
              <p>☀️</p>
              22°C
            </div>
            <div className="col">
              Fri
              <p>☀️</p>
              22°C
            </div>
            <div className="col">
              Sat
              <p>☀️</p>
              22°C
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "at424fcffc5a6c9ob1fe73bb3cd30e3b";
    let city = "Kyiv";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
