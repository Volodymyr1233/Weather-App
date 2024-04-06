import axios from "axios";
import {API_key} from "./API_key";
export default class WeatherAPI {

    static async getLatAndLon(city: string) {
        return await this.makeRequest(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1`)
    }
    static async getAirConditions(lat: string, lon: string) {
        return await this.makeRequest(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`)
    }

    static async getWeatherConditions(lat: string, lon: string) {
        return await this.makeRequest(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`);
    }

    static async makeRequest(link: string) {
        const response = await axios.get(link, {
            params: {
                'appid': API_key
            }
        });

        return response;
    }
}