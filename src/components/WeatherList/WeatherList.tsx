import React, {useContext} from "react";
import cl from "./WeatherList.module.css";
import WeatherItem from "../WeatherItem/WeatherItem";
import useWeatherData from "../../hooks/useWeatherData";
import {WeatherDataContext} from "../../context/weatherDataContext";


const WeatherList = () => {
    const {weatherData, setWeatherData} = useContext(WeatherDataContext);


    useWeatherData(setWeatherData);



    return (
        <div className={cl.weatherList}>
            {weatherData.map((weatherItem, index) =>
                <WeatherItem weatherItem={weatherItem} city_index={index}/>
            )}
        </div>
    )
}

export default WeatherList;