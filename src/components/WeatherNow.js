import React, { Component } from "react";
import storm from "../img/weather-icons/storm.svg";
const WeatherNow = () => {
    return ( 
        <div className='app__main' id="app_main">
            
            <img src={storm} alt="storm" width="100" height="150"></img>
            <p className="now-temp-desc">Weather now</p>
            <p ><span className="now-temp" >Temperature    </span> 30&deg; to 80&deg;</p>
            <p><span className="now-hum-press strong-desc">Humidity   </span> xxx  <span className="now-hum-press strong-desc">Pressure</span> yyy</p>

        </div>
        
     );
}
 
export default WeatherNow;