import React from "react";
import cl from "./FilterSection.module.css";
import FilterSectionItem from "./FilterSectionItem";
import {filterTemp} from "./filters/filterTemp";
import {filterCloud} from "./filters/filterCloud";
import {filterHum} from "./filters/filterHum";

interface FilterSectionProps {
    checkedTemperature: boolean[],
    changeCheckedTemperature: (position: number) => void,
    checkedCloudiness: boolean[],
    changeCheckedCloudiness: (position: number) => void,
    checkedHumidity: boolean[],
    changeCheckedHumidity: (position: number) => void,
}
const FilterSection = ({checkedTemperature, changeCheckedTemperature, checkedCloudiness, changeCheckedCloudiness, checkedHumidity, changeCheckedHumidity}: FilterSectionProps) => {
    return (
        <div className={cl.filterSection}>
            <h2>Filter Data</h2>
            <div className={cl.filterFields}>
                <FilterSectionItem filter={filterTemp} checked={checkedTemperature} onChange={changeCheckedTemperature}/>
                <FilterSectionItem filter={filterCloud} checked={checkedCloudiness} onChange={changeCheckedCloudiness}/>
                <FilterSectionItem filter={filterHum} checked={checkedHumidity} onChange={changeCheckedHumidity}/>
            </div>
        </div>
    )
}

export default FilterSection;