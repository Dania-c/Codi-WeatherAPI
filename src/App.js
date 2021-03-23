import React, { Component } from "react";
import Search from "./components/Search";

import WeatherItem, { WeatherItemDet } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import WeatherNow from "./components/WeatherNow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dania c"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search handleInput={this.handleInputChange} className="app__header" />
        <WeatherNow/>
        <WeatherItem />
        {/* <SayHello color="black" name={this.state.name} /> */}
        
      </div>
    );
  }
}

export default App;
