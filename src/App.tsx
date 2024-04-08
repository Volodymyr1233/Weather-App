import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherList from "./components/WeatherList/WeatherList";
import FilterSection from "./components/FilterSection/FilterSection";
import {WeatherCity} from "./models/WeatherCity";
import SortSelect from "./components/SortSelect/SortSelect";
import useWeatherData from "./hooks/useWeatherData";
import useSortedData from "./hooks/useSortedData";
import {useFilterData} from "./hooks/useFilterData";

function App() {
    const [weatherData, setWeatherData] = useState<WeatherCity[]>([]);
    const [sort, setSort] = useState<string>("");
    const [checkedTemperature, setCheckedTemperature] = useState<boolean[]>(
        new Array(3).fill(false)
    )

    const [checkedCloudiness, setcheckedCloudiness] = useState<boolean[]>(
        new Array(3).fill(false)
    )

    const [checkedHumidity, setCheckedHumidity] = useState<boolean[]>(
        new Array(3).fill(false)
    )

    const changeCheckedTemperature = (position: number) => {
        const updateChangeCheckedTemperature = checkedTemperature.map((item, index) =>
            index === position ? !item : false
        )

        setCheckedTemperature(updateChangeCheckedTemperature);
    }

    const changeCheckedHumidity = (position: number) => {
        const updateChangeCheckedHumidity = checkedHumidity.map((item, index) =>
            index === position ? !item : false
        )

        setCheckedHumidity(updateChangeCheckedHumidity);
    }

    const changeCheckedCloudiness = (position: number) => {
        const updateChangeCheckedCloudiness = checkedCloudiness.map((item, index) =>
            index === position ? !item : false
        )

        setcheckedCloudiness(updateChangeCheckedCloudiness);
    }
    const changeSort = (sort: string) => {
        setSort(sort);
    }

    useWeatherData(setWeatherData);

    const sortedData = useSortedData(sort, weatherData);

    const sortedAndFilterData = useFilterData(checkedHumidity, sortedData, checkedTemperature, checkedCloudiness);



  return (
    <div className="App">
      <Header/>
        <div className="Content">
            <SortSelect OnChange={changeSort}/>
            <div className="weatherDataSection">
                <FilterSection
                    checkedTemperature={checkedTemperature}
                    changeCheckedTemperature={changeCheckedTemperature}
                    checkedCloudiness={checkedCloudiness}
                    changeCheckedCloudiness={changeCheckedCloudiness}
                    checkedHumidity={checkedHumidity}
                    changeCheckedHumidity={changeCheckedHumidity}
                />
                <WeatherList weatherData={sortedAndFilterData}/>
            </div>
        </div>

    </div>
  );
}

export default App;
