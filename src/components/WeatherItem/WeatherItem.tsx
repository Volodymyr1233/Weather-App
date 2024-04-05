import React from "react";
import cl from "./WeatherItem.module.css";
// @ts-ignore
import {WiDayCloudy} from "weather-icons-react";


const WeatherItem = () => {
    return (
        <div className={cl.weatherItem}>
            <div className={cl.mainContentBlock}>
                <div style={{textAlign: "center"}}><WiDayCloudy size={90}/></div>
                <div className={cl.headers}>
                    <h1>23℃</h1>
                    <h1>London</h1>
                </div>

            </div>
            <div>
                <h2>Air conditions</h2>
                <ul>
                    <li>co: 23</li>
                    <li>no: 34</li>
                    <li>no2: 45</li>
                    <li>o3: 432</li>
                    <li>so2: 34</li>
                    <li>nh3: 344</li>
                </ul>

            </div>
            <div className={cl.weatherConditions}>
                <h2>Weather conditions</h2>
                <ul>
                    <li>Humidity: 23%</li>
                    <li>Cloudiness: 34%</li>
                    <li>Description: broke clouds</li>
                </ul>

                <h3>Air Status:<p style={{display: "inline"}}> Correct</p></h3>
            </div>
        </div>
    )
}

export default WeatherItem;