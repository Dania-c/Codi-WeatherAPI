import React, { Component,useState } from "react";
import Search from "./components/Search";

import WeatherItem from "./components/WeatherItem";

import "./App.css";
import WeatherNow from "./components/WeatherNow";
import DetailWeath from "./components/DetailWeath";



const API_KEY="047c54c9be210c32c9b4c6c654079e73";

// const k="http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${API_KEY}";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wdata:"",
      name: "",
      tempMax:"",
     tempMin:"",
     description:"",
     pressure:"",
     humidity:"",
     error:"",
      };
  }
  
getWeather =async (e) =>{
  e.preventDefault();
  const city= this.state.name;
  // const api_call=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${API_KEY}`);
  const api_call=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${API_KEY}`);
  const data = await api_call.json();
  this.setState({ wdata: data });
  if (city && data.cod !=="404" && data.cod !=="400" ) {
  this.setState ( {
    description:data.list[0].weather[0].description,
   tempMin:data.list[0].main.temp_min,
   tempMax:data.list[0].main.temp_max,
   pressure:data.list[0].main.pressure,
   humidity:data.list[0].main.humidity,
   error:""
    });}
    else{
      this.setState ( {
        description:"",
       tempMin:"",
       tempMax:"",
       pressure:"",
       humidity:"",
       error:"Please enter a valid city"
        })
    }
    }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search handleInput={this.handleInputChange} className="app__header" getWeather={this.getWeather} />
        {this.state.error && <p>{this.state.error}</p>  }
        {!this.state.error && <WeatherNow tempMax={this.state.tempMax}  tempMin={this.state.tempMin} description={this.state.description} pressure={this.state.pressure} humidity={this.state.humidity}  />}
        {!this.state.error && <WeatherItem weatherdata={this.state.wdata}/> }
        
        {/* <DetailWeath city={this.state.name}/> */}
      </div>
    );
  }
}

export default App;
