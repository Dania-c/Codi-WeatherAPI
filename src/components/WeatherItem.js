import React, { Component } from "react";
import { render } from "react-dom";
import FakeWeather from '../data/FakeWeather.json' ;

export default class WeatherItem extends Component {
  
  render() {
    return <div className="cards-container">
      <WeatherItemDet/>
      <WeatherItemDet/>
      <WeatherItemDet/>
      <WeatherItemDet/>
      <WeatherItemDet/>
      <WeatherItemDet/>
      <WeatherItemDet/>
      

      </div>;
  }
}
export class WeatherItemDet extends Component {
  render() {
    return (
      <div style={{ color: this.props.color }} className="subcard">
        {/* Hello {this.props.name} */}
        <p>12:00</p>
        <img src="http://placekitten.com/80/100" alt="ff" />
        <p>12&deg;</p>
      </div>
    );
  }
}
