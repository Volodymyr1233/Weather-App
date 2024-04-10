import React from "react";
import cl from "./WeatherList.module.css";
import WeatherItem from "../WeatherItem/WeatherItem";
import {WeatherCity} from "../../models/WeatherCity";
import IsLoading from "../isLoading/isLoading";

interface WeatherListProps {
    weatherData: WeatherCity[],
    isLoading: boolean
}
const WeatherList = ({weatherData, isLoading}: WeatherListProps) => {


    return (
        <div className={cl.weatherList}>
            {isLoading
            ? <IsLoading/>
            : weatherData.map((weatherItem, index) =>
                        <WeatherItem weatherItem={weatherItem} key={index}/>
                    )}
        </div>
    )
}

export default WeatherList;