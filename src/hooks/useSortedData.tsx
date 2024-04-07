import {useMemo} from "react";
import {WeatherCity} from "../models/WeatherCity";


const useSortedData = (sort: string, weatherData: WeatherCity[]) => {

    const sortedData = useMemo(() => {
        if (sort === "aqi") {
            return [...weatherData].sort((a, b) => a.airQualityConditions[sort] - (b.airQualityConditions[sort]));
        }

        else if (sort === "cloudiness") {
            return [...weatherData].sort((a, b) => a.weatherConditions[sort] - (b.weatherConditions[sort]));
        }

        else if (sort === "city") {
            return [...weatherData].sort((a, b) => a[sort].localeCompare(b[sort]));
        }

        return weatherData;
    }, [sort, weatherData]);

    return sortedData;
}

export default useSortedData;