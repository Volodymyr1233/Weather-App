import React from "react";
import {filterItemIntrf} from "./filters/filterItemIntrf";
import cl from "./FilterSection.module.css";


interface FilterSectionItemProp {
    filter: filterItemIntrf;
    checked: boolean[],
    onChange: (position: number) => void,
}
const FilterSectionItem = ({filter, checked, onChange}: FilterSectionItemProp) => {
    return (
        <div className={cl.filterItem}>
            <h3>{filter.name}</h3>
            {filter.values.map((value, index) => (
                <li style={{paddingLeft: "7%"}}>
                    <label>
                        <input type="checkbox" checked={checked[index]} onChange={() => onChange(index)}/>
                        {value}
                    </label>
                </li>
            ))}
        </div>
    )
}

export default FilterSectionItem;