import React from "react";
import cl from "./FilterSection.module.css";
import {filters} from "./filters";

interface FilterSectionProps {
    checked: boolean,
    changeChecked: () => void,
}
const FilterSection = ({checked, changeChecked}: FilterSectionProps) => {
    return (
        <div className={cl.filterSection}>
            <h2>Filter Data</h2>
            <div className={cl.filterFields}>
                {filters.map(filter => (
                    <div>
                        <h3>{filter.name}</h3>
                        {filter.values.map(value => (
                            <li>
                                <label>
                                    <input type="checkbox" checked={checked} onChange={changeChecked}/>
                                    {value}
                                </label>
                            </li>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterSection;