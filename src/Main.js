import "./App.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="ColHumidity">
        Humidity <br />
        78%
      </div>

      <div className="Col" id="central">
        <span id="main-city">LISBON</span> <br />
        <span id="main-temperature">20</span>
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
        ☀️
      </div>

      <div className="ColWind">
        Wind <br />
        <span id="main-wind">5</span> km/hour
      </div>
    </div>
  );
}
