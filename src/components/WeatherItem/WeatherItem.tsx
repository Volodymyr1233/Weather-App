import React from "react";
import cl from "./WeatherItem.module.css";
// @ts-ignore
import {WiDayCloudy, WiCloud, WiDaySunny} from "weather-icons-react";
import {WeatherCity} from "../../models/WeatherCity";
import {calculateTempCelsius} from "./calculateTempCelsius";

interface WeatherItemProps {
    weatherItem: WeatherCity,
}

const WeatherItem = ({weatherItem}: WeatherItemProps) => {
    const aqi = weatherItem.airQualityConditions.aqi;
    const cloudiness = weatherItem.weatherConditions.cloudiness;

    return (
        <div className={cl.weatherItem}>
            <div className={cl.mainContentBlock}>

                <div style={{textAlign: "center"}}>
                    {cloudiness <= 100 && cloudiness > 75 && <WiCloud size={90}/>}
                    {cloudiness <= 75 && cloudiness >= 50 && <WiDayCloudy size={90}/>}
                    {cloudiness < 50 && <WiDaySunny size={90}/>}
                </div>
                <div className={cl.headers}>
                    <h1>{calculateTempCelsius(weatherItem.weatherConditions.temp)}°C</h1>
                    <h1>{weatherItem.city}</h1>
                </div>

            </div>
            <div>
                <h2>Air conditions</h2>
                <ul>
                    <li>co: {weatherItem.airQualityConditions.co}</li>
                    <li>no: {weatherItem.airQualityConditions.no}</li>
                    <li>no2: {weatherItem.airQualityConditions.no2}</li>
                    <li>o3: {weatherItem.airQualityConditions.o3}</li>
                    <li>so2: {weatherItem.airQualityConditions.so2}</li>
                    <li>nh3: {weatherItem.airQualityConditions.nh3}</li>
                </ul>

            </div>
            <div className={cl.weatherConditions}>
                <h2>Weather conditions</h2>
                <ul>
                    <li>Humidity: {weatherItem.weatherConditions.humidity}%</li>
                    <li>Cloudiness: {cloudiness}%</li>
                    <li>Description: {weatherItem.weatherConditions.description}</li>
                </ul>

                {aqi <= 5 && aqi > 3 && <h3 style={{color: "green"}}>Air Status:<p style={{display: "inline", color: "green"}}> {aqi}</p></h3>}
                {aqi <= 3 && aqi > 1 && <h3 style={{color: "yellow"}}>Air Status:<p style={{display: "inline", color: "yellow"}}> {aqi}</p></h3>}
                {aqi === 1 && <h3 style={{color: "rgb(64, 64, 64)"}}>Air Status:<p style={{display: "inline", color: "rgb(64, 64, 64)"}}> {aqi}</p></h3>}
            </div>
        </div>
    )
}

export default WeatherItem;