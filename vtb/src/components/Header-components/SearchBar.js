import React from "react";
import '../../css/style.css';
import search from '../../image/search.svg'

const SearchBar = () => {
    return (
        <div className="Search">
            <input
                className="Search__input"
                type="text"
                placeholder='Поиск'
            />
            <span className="Search__span">
                <img src={search}></img> 
            </span>
        </div>
    );
};

export default SearchBar