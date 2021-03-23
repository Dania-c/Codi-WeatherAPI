import React, { Component } from "react";
import storm from "../img/weather-icons/storm.svg";
const WeatherNow = () => {
    return ( 
        <div className='app__main' id="app_main">
            <h1>weather now</h1>
            <img src={storm} alt="storm" width="100" height="150"></img>
            <p ><span className="now-temp">Temperature</span> 30&deg; to 80&deg;</p>
            <p><span className="now-hum-press">Humidity</span> xxx  <span className="now-hum-press">Pressure</span> yyy</p>

        </div>
        
     );
}
 
export default WeatherNow;