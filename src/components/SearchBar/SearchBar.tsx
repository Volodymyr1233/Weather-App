import React from "react";
import {FaSearch} from "react-icons/fa";
import cl from "./SearchBar.module.css";

const SearchBar = (props: React.ComponentPropsWithoutRef<"input">) => {
    return (
        <form className={cl.searchForm}>
            <span className={cl.searchIcon}><FaSearch/></span>
            <input {...props} className={cl.searchInput}/>
        </form>
    )
}

export default SearchBar;