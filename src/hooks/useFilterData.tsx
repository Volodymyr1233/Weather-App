import {WeatherCity} from "../models/WeatherCity";
import {useMemo} from "react";
import {calculateTempCelsius} from "../components/WeatherItem/calculateTempCelsius";



const useTempFilter = (checkedTemperature: boolean[], sortedData: WeatherCity[]) => {
    const filterTemperature = useMemo(() => {
        if (checkedTemperature[0]) {
            return sortedData.filter(weatherItem => Number(calculateTempCelsius(weatherItem.weatherConditions.temp)) > 20);
        }

        else if (checkedTemperature[1]) {
            return sortedData.filter(weatherItem => Number(calculateTempCelsius(weatherItem.weatherConditions.temp)) <= 20 && Number(calculateTempCelsius(weatherItem.weatherConditions.temp)) > 15);
        }

        else if (checkedTemperature[2]) {
            return sortedData.filter(weatherItem => Number(calculateTempCelsius(weatherItem.weatherConditions.temp)) < 15);
        }

        return sortedData;
    }, [checkedTemperature, sortedData]);

    return filterTemperature;
}

const useCloudFilter = (checkedCloudiness: boolean[], weatherData: WeatherCity[], checkedTemperature: boolean[]) => {
    const filterTemperature = useTempFilter(checkedTemperature, weatherData);

    const filterCloudiness = useMemo(() => {
        if (checkedCloudiness[0]) {
            return filterTemperature.filter(weatherItem => weatherItem.weatherConditions.cloudiness > 75);
        }

        else if (checkedCloudiness[1]) {
            return filterTemperature.filter(weatherItem => weatherItem.weatherConditions.cloudiness <= 75 && weatherItem.weatherConditions.cloudiness >= 50);
        }

        else if (checkedCloudiness[2]) {
            return filterTemperature.filter(weatherItem => weatherItem.weatherConditions.cloudiness < 50);
        }

        return filterTemperature;
    }, [checkedCloudiness, filterTemperature]);

    return filterCloudiness;
}

const useHumFilter = (checkedHumidity: boolean[], weatherData: WeatherCity[], checkedTemperature: boolean[], checkedCloudiness: boolean[]) => {
    const filterCloudiness = useCloudFilter(checkedCloudiness, weatherData, checkedTemperature)

    const filterHumidity = useMemo(() => {
        if (checkedHumidity[0]) {
            return filterCloudiness.filter(weatherItem => weatherItem.weatherConditions.humidity > 75);
        }

        else if (checkedHumidity[1]) {
            return filterCloudiness.filter(weatherItem => weatherItem.weatherConditions.humidity <= 75 && weatherItem.weatherConditions.humidity >= 50);
        }

        else if (checkedHumidity[2]) {
            return filterCloudiness.filter(weatherItem => weatherItem.weatherConditions.humidity < 50);
        }

        return filterCloudiness;
    }, [checkedHumidity, filterCloudiness]);

    return filterHumidity;
}

export const useFilterData = (checkedHumidity: boolean[], sortedData: WeatherCity[], checkedTemperature: boolean[], checkedCloudiness: boolean[]) => {
    return useHumFilter(checkedHumidity, sortedData, checkedTemperature, checkedCloudiness);
}