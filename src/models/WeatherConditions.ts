export interface WeatherConditions {
    [temp: string]: number,
    humidity: number,
    cloudiness: number,
    // @ts-ignore
    description: string,
}