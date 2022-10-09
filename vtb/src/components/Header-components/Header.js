import React from "react";
import '../../css/style.css';
import AccountComponent from "./AccountComponents";
import SearchBar from "./SearchBar";
import ThemeSwitch from './ThemeSwitch';

function Header() {

    return(
        <header className="header">
            <div className="header__content">
                <div className="header__row">
                    <SearchBar/>
                    <AccountComponent/>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;