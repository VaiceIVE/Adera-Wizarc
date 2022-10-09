import React from "react";
import '../css/style.css';
import Calendar from '../components/Calendar/index';
import Header from "../components/Header-components/Header";
import EventsComponents from "../components/Events-components/EventsComponents";

function Events() {
    return (
        <section className="events">
            <div className="events__content">
                <Header/>
                <div className="events__row">
                    <div className="events_column">
                        <EventsComponents/>
                    </div>
                    <div className="events__app">
                        <Calendar/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;