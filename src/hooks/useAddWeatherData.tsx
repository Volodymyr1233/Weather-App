import {useMemo} from "react";
import WeatherAPI from "../API/WeatherAPI";
import {WeatherCity} from "../models/WeatherCity";
import {cities} from "./cities";

const useAddWeatherData = (setCity: React.Dispatch<React.SetStateAction<string>>, city: string, weatherData: WeatherCity[], setWeatherData: React.Dispatch<React.SetStateAction<WeatherCity[]>>) => {
    useMemo(async() => {
        if (!cities.includes(city) && city !== "") {
            try {
                const geoCodResponse = await WeatherAPI.getLatAndLon(city.toLowerCase());
                const lat = geoCodResponse.data[0].lat;
                const lon = geoCodResponse.data[0].lon;
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

                const weatherObject = {
                    city: city,
                    airQualityConditions: airQualityConditions,
                    weatherConditions: weatherConditions,
                }

                setCity("");
                setWeatherData([weatherObject, ...weatherData]);



            } catch (Exception: any) {}
        }



    }, [city]);
}

export default useAddWeatherData;