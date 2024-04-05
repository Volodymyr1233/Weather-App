import {AirQualityConditions} from "./AirQualityConditions";
import {WeatherConditions} from "./WeatherConditions";

export interface WeatherCity {
    airQualityConditions: AirQualityConditions,
    weatherConditions: WeatherConditions,
}