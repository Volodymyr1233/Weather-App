import {WeatherCity} from "../models/WeatherCity";
import {useMemo} from "react";



const useSearchedData = (searchValue: string, sortedAndFilterData: WeatherCity[]) => {

    const searchedData = useMemo(() => {
        return sortedAndFilterData.filter(item => item.city.toLowerCase().includes(searchValue.toLowerCase()));

    }, [searchValue, sortedAndFilterData]);

    return searchedData;
}

export default useSearchedData;