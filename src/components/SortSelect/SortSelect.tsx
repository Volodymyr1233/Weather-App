import React, {useState} from "react";

interface SortSelectProps {
    OnChange: (value: string) => void,
}
const SortSelect = ({OnChange}: SortSelectProps) => {
    const[disabledState, setDisabledState] = useState<boolean>(false);
    return (
        <select name="weatherData" id="weatherData" onChange={(e) => {setDisabledState(true); OnChange(e.target.value)}}>
            <option value="Sort by: " disabled={disabledState}>Sort by:</option>
            <option value="city">city</option>
            <option value="aqi">air status</option>
            <option value="cloudiness">cloudiness</option>
        </select>
    )
}

export default SortSelect;