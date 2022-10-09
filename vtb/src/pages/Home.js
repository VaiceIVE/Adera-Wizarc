import React from "react";
import Header from "../components/Header-components/Header";
import Greetings from "../components/Home-components/Greetings";
import '../css/style.css';
import Calendar from '../components/Calendar/index';
import EventsComponents from "../components/Events-components/EventsComponents";

export default class Home extends React.Component {

    render () {
        return(
            <>
                <section className="home">
                    <div className="home__content">
                        <Header/>
                        <div className="home__row">
                            <div className="home_column">
                                <Greetings></Greetings>
                                <EventsComponents/>
                            </div>
                            <div className="home__app">
                                <Calendar/>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        ) 
    }
}

