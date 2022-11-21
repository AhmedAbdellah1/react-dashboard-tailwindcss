import { Component, useState } from "react";
import FormWeather from "./components/FormWeather";
import Weather from "./components/Weather";

const API_KEY = "e36ed364400282e43250b6c4c0274d44";

class App extends Component {

  state = {
    tempreature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  gitWeather = async (e) => {

    e.preventDefault();

    // get value of element a name city and stor is in varibel city
    const city = e.target.elements.city.value;

    // get value of element a name country and stor is in varibel country
    const country = e.target.elements.country.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const data = await api.json();
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({
        index: 1,
        tempreature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'please Enter Data'
      })
    }
  }

  render() {
    return (
      <div className="wrapper" >
        <div className="form-container" >

          <FormWeather gitWeather={this.gitWeather} />

          <Weather
            tempreature={this.state.tempreature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;

/**
 * ***************************************************************************************
import { useState } from "react";
import FormWeather from "./components/FormWeather";
import Weather from "./components/Weather";

const API_KEY = "e36ed364400282e43250b6c4c0274d44";

function App() {

  const [weather, setWeather] = useState(
    {
      tempreature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      error: ''
    }
  );

  const gitWeather = async (e) => {

    e.preventDefault();

    // get value of element a name city and stor is in varibel city
    const city = e.target.elements.city.value;

    // get value of element a name country and stor is in varibel country
    const country = e.target.elements.country.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const data = await api.json();

    setWeather(
      weather.tempreature = data.main.temp,
      weather.city = data.name,
      weather.country = data.sys.country,
      weather.humidity = data.main.humidity,
      weather.description = data.weather[0].description,
    )
    console.log(weather);
  };


  return (
    <div className="App">
      <FormWeather gitWeather={gitWeather} />
      <Weather />
    </div>
  );
}

export default App;

 */