import "./App.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="col3">
        <button id="current-button">Current</button>
      </div>

      <div className="col">
        <form id="search-city">
          <input
            type="search"
            width="300"
            size="20"
            placeholder="Type a city"
            id="city-input"
            class="col-8"
          />
          <input
            type="submit"
            value="Search"
            class="col-3"
            id="search-button"
          />
        </form>
      </div>
    </div>
  );
}
