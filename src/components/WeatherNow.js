import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import FakeWeather from '../data/FakeWeather.json' ;
// import {Mostlycloudy} from './ImagesComponents';
const WeatherNow = () => {
    var i = 0;
    function convertToC (k) {
        return (k - 273.15).toFixed(1)
      }
    return ( 
        <div className='app__main' id="app_main">
            
            <img src={clear} alt="clear sky" className="imgNow"></img>
            {/* <Mostlycloudy className="imgNow"/> */}
            <p className="now-temp-desc">{FakeWeather.list[i].weather[0].description}</p>
            <p ><span className="now-temp" >Temperature    </span> {convertToC(FakeWeather.list[i].main.temp_min)}&deg;C to {convertToC(FakeWeather.list[i].main.temp_max)}&deg;C</p>
            <p><span className="now-hum-press strong-desc">Humidity   </span>{FakeWeather.list[i].main.humidity}% <span className="now-hum-press strong-desc">Pressure</span> {FakeWeather.list[i].main.pressure}</p>

        </div>
        
     );
}
 
export default WeatherNow;