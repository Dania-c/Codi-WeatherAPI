import React ,{Component} from 'react';
import fog from "../img/weather-icons/fog.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import unknown from "../img/weather-icons/unknown.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";
// import FakeWeather from "./data/FakeWeather.json";

export class Fog extends Component {
  render() {
    return (
      <div>
        <img src={fog} alt="fog icon" />
      </div>
    );
  }
}

export class Rain extends Component {
  render() {
    return (
      <div>
        <img src={rain} alt="fog rain" />
      </div>
    );
  }
}

export class Snow extends Component {
  render() {
    return (
      <div>
        <img src={snow} alt="snow rain" />
      </div>
    );
  }
}

export class Storm extends Component {
  render() {
    return (
      <div>
        <img src={storm} alt="storm rain" />
      </div>
    );
  }
}

export class Clear extends Component {
  render() {
    return (
      <div>
        <img src={clear} alt="clear icon" />
      </div>
    );
  }
}

export class Cloudy extends Component {
  render() {
    return (
      <div>
        <img src={cloudy} alt="cloudy icon" />
      </div>
    );
  }
}

export class Unknown extends Component {
  render() {
    return (
      <div>
        <img src={unknown} alt="unknown icon" />
      </div>
    );
  }
}

export class Drizzle extends Component {
  render() {
    return (
      <div>
        <img src={drizzle} alt="drizzle icon" />
      </div>
    );
  }
}

export class Mostlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={mostlycloudy} alt="mostlycloudy icon" />
      </div>
    );
  }
}

export class Partlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={partlycloudy} alt="partlycloudy icon" />
      </div>
    );
  }
}