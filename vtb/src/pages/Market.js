import React from "react";
import Calendar from '../components/Calendar/index';
import Header from "../components/Header-components/Header";
import EventsComponents from "../components/Events-components/EventsComponents";
import '../css/style.css';
import MarketComponents from "../components/Market-components/MarketComponents";

function Market() {
    return (
        <div className="market">
            <div className="market__content">
                <Header/>
                <div className="events__row">
                    <div className="events_column">
                        <MarketComponents/>
                    </div>
                </div>
            </div>   
        </div>
    );
}

export default Market;