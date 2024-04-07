import React, {useContext, useMemo} from "react";
import cl from "./WeatherList.module.css";
import WeatherItem from "../WeatherItem/WeatherItem";
import useWeatherData from "../../hooks/useWeatherData";
import {WeatherDataContext} from "../../context/weatherDataContext";
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