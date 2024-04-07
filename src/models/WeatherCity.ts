import {AirQualityConditions} from "./AirQualityConditions";
import {WeatherConditions} from "./WeatherConditions";

export interface WeatherCity {
    city: string,
    airQualityConditions: AirQualityConditions,
    weatherConditions: WeatherConditions,
}