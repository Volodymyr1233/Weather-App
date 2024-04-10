import React, {useState} from "react";
import cl from "./SortSelect.module.css";
import {motion} from "framer-motion";

interface SortSelectProps {
    OnChange: (value: string) => void,
}
const SortSelect = ({OnChange}: SortSelectProps) => {
    const[disabledState, setDisabledState] = useState<boolean>(false);
    return (
        <motion.select
            whileHover={{
                scale: 1.02,
                transition: {duration: 0.6}
            }}
            className={cl.sortSelect}
            name="weatherData"
            onChange={(e) => {setDisabledState(true);
                OnChange(e.target.value)}}>
            <option value="Sort by: " disabled={disabledState}>Sort by:</option>
            <option value="city">city</option>
            <option value="aqi">air status</option>
            <option value="cloudiness">cloudiness</option>
        </motion.select>
    )
}

export default SortSelect;