import React, {useMemo} from "react";
import WeatherAPI from "../API/WeatherAPI";
import {WeatherCity} from "../models/WeatherCity";
import {cities} from "./cities";



const useWeatherData = (setWeatherData: React.Dispatch<React.SetStateAction<WeatherCity[]>>) => {

    useMemo(async() => {
        console.log("useWeatherData")
        const weatherDataArray = [];
        for (let i = 0; i < cities.length; i++) {
            try {
                const geoCodResponse = await WeatherAPI.getLatAndLon(cities[i]);
                const lat = geoCodResponse.data[0].lat;
                const lon = geoCodResponse.data[0].lon;
                const city = geoCodResponse.data[0].local_names["en"];
                const airConditionsResponse = await WeatherAPI.getAirConditions(lat, lon);
                const weatherConditionsResponse = await WeatherAPI.getWeatherConditions(lat, lon);


                const weatherConditions = {
                    temp: weatherConditionsResponse.data.main["temp"],
                    humidity: weatherConditionsResponse.data.main["humidity"],
                    cloudiness: weatherConditionsResponse.data.clouds.all,
                    description: weatherConditionsResponse.data.weather[0].description,

                }

                const airQualityConditions = {
                    co: airConditionsResponse.data.list[0].components.co,
                    no: airConditionsResponse.data.list[0].components.no,
                    no2: airConditionsResponse.data.list[0].components.no2,
                    o3: airConditionsResponse.data.list[0].components.o3,
                    so2: airConditionsResponse.data.list[0].components.so2,
                    nh3: airConditionsResponse.data.list[0].components.nh3,
                    aqi: airConditionsResponse.data.list[0].main.aqi,
                }

                const myWeatherTest = {
                    city: city,
                    airQualityConditions: airQualityConditions,
                    weatherConditions: weatherConditions,
                }

                weatherDataArray.push(myWeatherTest);

            } catch (Exception: any) {
                console.log("This city doesn't exist");
            }

        }

        setWeatherData(weatherDataArray);



    }, []);
}

export default useWeatherData;