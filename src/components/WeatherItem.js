import React, { Component } from "react";
import { render } from "react-dom";
import FakeWeather from '../data/FakeWeather.json' ;
import {Fog, Storm, Cloudy, Rain,Clear} from './ImagesComponents';

export default class WeatherItem extends Component {
  
  render() {
    return <div className="cards-container">
      <WeatherItemDet/>
    
      

      </div>;
  }
}
export class WeatherItemDet extends Component {
  render() {
    function convertToC (k) {
      return (k - 273.15).toFixed(1)
    }
    var i = 0;
    var arr =[];
    for( var j=i+1;j<=i+7 ;j++){
      var p;
      if(FakeWeather.list[j].weather[0].main==="Clouds"){
        p=<Cloudy/>;
      }else if (FakeWeather.list[j].weather[0].main==="Rain"){
        p=<Rain/>;
      }else if (FakeWeather.list[j].weather[0].main==="Clear"){
        p=<Clear />;
      }
      arr.push(
      <div className="subcard">
        <h4>{FakeWeather.list[j].dt_txt.substring(10,16)}</h4>
        {p}
        <h4>{convertToC(FakeWeather.list[j].main.temp)}&deg;C</h4>
      </div>)
}
    return (
      <div style={{ color: this.props.color }} className="cards-container">
        {/* Hello {this.props.name}
        <p>12:00</p>
        <img src="http://placekitten.com/80/100" alt="ff" />
        <Fog />
        <Storm />
        <p>12&deg;</p> */}
        {arr}
      </div>
    );
  }
}
