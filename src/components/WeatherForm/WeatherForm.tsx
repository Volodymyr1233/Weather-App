import {WeatherCity} from "../../models/WeatherCity";
import useAddWeatherData from "../../hooks/useAddWeatherData";
import {useState} from "react";

interface WeatherFormProps {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    addWeatherData: (city: string) => void,
}
const WeatherForm = ({setVisible, addWeatherData}: WeatherFormProps) => {

    const [inputValue, setInputValue] = useState<string>("");
    return (
        <div>
            <form>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={() => {
                    addWeatherData(inputValue)
                    setVisible(false);
                }}>Add city</button>
            </form>
        </div>

    )
}

export default WeatherForm;