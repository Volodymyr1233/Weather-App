import {WeatherCity} from "../models/WeatherCity";
import React, {createContext} from "react";

interface WeatherDataContextType {
    weatherData: WeatherCity[],
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherCity[]>> | (() => void)
}

export const WeatherDataContext = createContext<WeatherDataContextType>({weatherData: [], setWeatherData: () => {}})