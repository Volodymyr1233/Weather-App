import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherList from "./components/WeatherList/WeatherList";
import FilterSection from "./components/FilterSection/FilterSection";
import {WeatherCity} from "./models/WeatherCity";
import {WeatherDataContext} from "./context/weatherDataContext";

function App() {
    const [weatherData, setWeatherData] = useState<WeatherCity[]>([]);

  return (
    <div className="App">
      <Header/>
        <div className="Content">
            <WeatherDataContext.Provider value={{
                weatherData,
                setWeatherData,
            }}>
                <FilterSection/>
                <WeatherList/>
            </WeatherDataContext.Provider>

        </div>

    </div>
  );
}

export default App;
