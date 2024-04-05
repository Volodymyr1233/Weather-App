import React from "react";
import cl from "./WeatherList.module.css";
import WeatherItem from "../WeatherItem/WeatherItem";

const WeatherList = () => {
    return (
        <div className={cl.weatherList}>
            <WeatherItem/>
        </div>
    )
}

export default WeatherList;