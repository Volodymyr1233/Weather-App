import {WeatherCity} from "../../models/WeatherCity";
import useAddWeatherData from "../../hooks/useAddWeatherData";
import React, {useState} from "react";
import cl from "./WeatherForm.module.css";

interface WeatherFormProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    visible: boolean,
    addWeatherData: (city: string) => void,
}
const WeatherForm = ({setVisible, visible, addWeatherData}: WeatherFormProps) => {

    const [inputValue, setInputValue] = useState<string>("");

    const rootClasses = [cl.dataForm];

    if (visible) rootClasses.push(cl.active);
    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={cl.content} onClick={(e) => e.stopPropagation()}>
                <form onClick={(e) => e.preventDefault()}>
                    <input placeholder="Type your city..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <button className={cl.addButt} onClick={() => {
                        addWeatherData(inputValue);
                        setInputValue("");
                        setVisible(false);
                    }}>Add city
                    </button>
                </form>
            </div>
        </div>

    )
}

export default WeatherForm;