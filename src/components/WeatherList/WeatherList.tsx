import React from "react";
import cl from "./WeatherList.module.css";
import WeatherItem from "../WeatherItem/WeatherItem";
import {WeatherCity} from "../../models/WeatherCity";
import IsLoading from "../isLoading/isLoading";
import {cities} from "../../hooks/cities";

interface WeatherListProps {
    weatherData: WeatherCity[],
    setWeatherData:  React.Dispatch<React.SetStateAction<WeatherCity[]>>,
    isLoading: boolean
}
const WeatherList = ({weatherData, isLoading, setWeatherData}: WeatherListProps) => {

    const deleteWeatherData = (city: string) => {
        if (cities.includes(city)) cities.splice(cities.indexOf(city), 1);
        const newWeatherData = weatherData.filter(weatherItem => weatherItem.city !== city);
        setWeatherData(newWeatherData);
    }

    return (
        <div className={cl.weatherList}>
            {isLoading
            ? <IsLoading/>
            : weatherData.map((weatherItem, index) =>
                        <WeatherItem weatherItem={weatherItem} key={index} deleteWeatherData={deleteWeatherData}/>
                    )}
        </div>
    )
}

export default WeatherList;