import React from "react";
import cl from "./WeatherItem.module.css";
// @ts-ignore
import {WiDayCloudy, WiCloud, WiDaySunny} from "weather-icons-react";
import {WeatherCity} from "../../models/WeatherCity";
import {calculateTempCelsius} from "./calculateTempCelsius";
import {airConditionsProps} from "./airConditionsProps";
import {weatherConditionsProps} from "./weatherConditionsProps";
import {motion} from "framer-motion";
import { MdDelete } from "react-icons/md";

interface WeatherItemProps {
    weatherItem: WeatherCity,
    deleteWeatherData: (city: string) => void,
}

const WeatherItem = ({weatherItem, deleteWeatherData}: WeatherItemProps) => {
    const aqi = weatherItem.airQualityConditions.aqi;
    const cloudiness = weatherItem.weatherConditions.cloudiness;

    const list = {
        hidden: {
            scale: 1,
            translateX: -100
        },
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            whileInView={{
                scale: 1.06,
                translateX: 0,
                transition: { duration: 1 },

            }}
            className={cl.weatherItem}>
            <div className={cl.mainContentBlock}>

                <div style={{textAlign: "center"}} className={cl.icons}>
                        {cloudiness <= 100 && cloudiness > 75 && <span><WiCloud size={82}/></span>}
                    {cloudiness <= 75 && cloudiness >= 50 && <span><WiDayCloudy size={82}/></span>}
                    {cloudiness < 50 && <span><WiDaySunny size={82}/></span>}
                </div>
                <div className={cl.headers}>
                    <h1>{calculateTempCelsius(weatherItem.weatherConditions.temp)}°C</h1>
                    <h1>{weatherItem.city}</h1>
                </div>

            </div>
            <div className={cl.airConditions}>
                <h2>Air conditions</h2>
                <ul>
                    {airConditionsProps.map(item =>
                        <li><p style={{
                            fontWeight: "bold",
                            display: "inline"
                        }}>{item}:</p> {weatherItem.airQualityConditions[item]}</li>
                    )}
                </ul>

            </div>
            <div className={cl.weatherConditions}>
                <h2>Weather conditions</h2>
                <ul>
                    {weatherConditionsProps.map(item =>
                        item === "Description"
                            ? <li>Description: {weatherItem.weatherConditions.description}</li>
                            : <li>{item}: {weatherItem.weatherConditions[item.toLowerCase()]}%</li>
                    )}
                </ul>

                {aqi <= 5 && aqi > 3 && <h3 style={{color: "rgb(51,255,51)"}}>Air Status:<p style={{display: "inline", color: "rgb(51,255,51)"}}> {aqi}</p></h3>}
                {aqi <= 3 && aqi > 1 && <h3 style={{color: "yellow"}}>Air Status:<p style={{display: "inline", color: "yellow"}}> {aqi}</p></h3>}
                {aqi === 1 && <h3 style={{color: "rgb(64, 64, 64)"}}>Air Status:<p style={{display: "inline", color: "rgb(64, 64, 64)"}}> {aqi}</p></h3>}
            </div>

            <span className={cl.deleteIcon} onClick={() => deleteWeatherData(weatherItem.city)}><MdDelete size={24} color={"rgb(0, 255, 255)"}/></span>
        </motion.div>
    )
}

export default WeatherItem;