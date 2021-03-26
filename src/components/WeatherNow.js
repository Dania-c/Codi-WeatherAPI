import React, { useState } from "react";
import clear from "../img/weather-icons/clear.svg";

const WeatherNow = (props) => {
    
    
    var i = 0;
    function convertToC (k) {
        return (k - 273.15).toFixed(1)
      }
    return ( 
        <div className='app__main' id="app_main">
            
            <img src={clear} alt="clear sky" className="imgNow"></img>
            <p className="now-temp-desc">{props.description}</p>
            <p ><span className="now-temp" >Temperature</span> {convertToC(props.tempMin)}&deg;C to {convertToC(props.tempMax)}&deg;C</p>
            <p><span className="now-hum-press strong-desc">Humidity</span>{props.humidity}% <span className="now-hum-press strong-desc">Pressure</span> {props.pressure}</p>

        </div>
        
     );
}
 
export default WeatherNow;