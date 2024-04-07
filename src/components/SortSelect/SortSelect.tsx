import React from "react";

interface SortSelectProps {
    OnChange: (value: string) => void,
}
const SortSelect = ({OnChange}: SortSelectProps) => {
    return (
        <select name="weatherData" id="weatherData" onChange={(e) => OnChange(e.target.value)}>
            <option value="Sort by: " disabled>Sort by:</option>
            <option value="city">city</option>
            <option value="aqi">air status</option>
            <option value="cloudiness">cloudiness</option>
        </select>
    )
}

export default SortSelect;