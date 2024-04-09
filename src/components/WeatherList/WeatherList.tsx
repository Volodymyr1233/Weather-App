import React from "react";
import cl from "./WeatherList.module.css";
import WeatherItem from "../WeatherItem/WeatherItem";
import {WeatherCity} from "../../models/WeatherCity";

interface WeatherListProps {
    weatherData: WeatherCity[]
}
const WeatherList = ({weatherData}: WeatherListProps) => {


    return (
        <div className={cl.weatherList}>
            {weatherData.map((weatherItem, index) =>
                <WeatherItem weatherItem={weatherItem} key={index}/>
            )}
        </div>
    )
}

export default WeatherList;