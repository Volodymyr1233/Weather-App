import React from "react";
import {filterItemIntrf} from "./filters/filterItemIntrf";


interface FilterSectionItemProp {
    filter: filterItemIntrf;
    checked: boolean[],
    onChange: (position: number) => void,
}
const FilterSectionItem = ({filter, checked, onChange}: FilterSectionItemProp) => {
    return (
        <div>
            <h3>{filter.name}</h3>
            {filter.values.map((value, index) => (
                <li>
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