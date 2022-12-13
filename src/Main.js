import "./App.css";

export default function Main() {
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
            78%
          </div>

          <div className="col" id="central">
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

          <div className="col wind">
            Wind <br />
            <span id="main-wind">5</span> km/hour
          </div>
        </div>
      </div>
      <div className="days">
        <div className="row">
          <div className="col">
            Tue
            <p>☀️</p>
            22°C
          </div>
          <div class="col">
            Wed
            <p>☀️</p>
            22°C
          </div>
          <div class="col">
            Thu
            <p>☀️</p>
            22°C
          </div>
          <div class="col">
            Fri
            <p>☀️</p>
            22°C
          </div>
          <div class="col">
            Sat
            <p>☀️</p>
            22°C
          </div>
        </div>
      </div>
    </div>
  );
}
