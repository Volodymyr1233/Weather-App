import React, {useState} from "react";
import cl from "./SortSelect.module.css";

interface SortSelectProps {
    OnChange: (value: string) => void,
}
const SortSelect = ({OnChange}: SortSelectProps) => {
    const[disabledState, setDisabledState] = useState<boolean>(false);
    return (
        <select className={cl.sortSelect} name="weatherData" onChange={(e) => {setDisabledState(true); OnChange(e.target.value)}}>
            <option value="Sort by: " disabled={disabledState}>Sort by:</option>
            <option value="city">city</option>
            <option value="aqi">air status</option>
            <option value="cloudiness">cloudiness</option>
        </select>
    )
}

export default SortSelect;