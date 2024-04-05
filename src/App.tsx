import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherList from "./components/WeatherList/WeatherList";
import FilterSection from "./components/FilterSection/FilterSection";

function App() {
  return (
    <div className="App">
      <Header/>
        <div className="Content">
            <FilterSection/>
            <WeatherList/>
        </div>

    </div>
  );
}

export default App;
