import React from 'react';
import cl from "./Header.module.css";

const Header = () => {
    return (
        <div className={cl.headerApp}>
            <h1>Weather App</h1>
        </div>
    )
}

export default Header;