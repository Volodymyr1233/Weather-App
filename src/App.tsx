import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherList from "./components/WeatherList/WeatherList";
import FilterSection from "./components/FilterSection/FilterSection";
import {WeatherCity} from "./models/WeatherCity";
import {WeatherDataContext} from "./context/weatherDataContext";
import SortSelect from "./components/SortSelect/SortSelect";
import useWeatherData from "./hooks/useWeatherData";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import useSortedData from "./hooks/useSortedData";

function App() {
    const [weatherData, setWeatherData] = useState<WeatherCity[]>([]);
    const [sort, setSort] = useState<string>("");


    const changeSort = (sort: string) => {
        setSort(sort);
    }

    useWeatherData(setWeatherData);

    const sortedData = useSortedData(sort ,weatherData);




  return (
    <div className="App">
      <Header/>
        <div className="Content">
            <WeatherDataContext.Provider value={{
                weatherData,
                setWeatherData,
            }}>
                <SortSelect OnChange={changeSort}/>
                <div className="weatherDataSection">
                    <FilterSection/>
                    <WeatherList weatherData={sortedData}/>
                </div>

            </WeatherDataContext.Provider>

        </div>

    </div>
  );
}

export default App;
