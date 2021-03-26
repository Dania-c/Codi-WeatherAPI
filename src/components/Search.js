import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <form className="div-search" onSubmit={ this.props.getWeather}>
        {/* {this.state.input} */}
        <input
          type="text"
          id="input-name"
          name="city"
          placeholder="type in a city name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button className="btn-search"
          onClick={event => {
            this.props.handleInput(this.state.input);
           
          }}
        >
          FIND WEATHER
        </button>
      </form>
    );
  }
}
export default Search;
