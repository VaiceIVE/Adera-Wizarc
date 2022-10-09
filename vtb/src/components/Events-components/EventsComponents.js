import React, { Component } from "react";
import '../../css/style.css';
import test from '../../image/test.png'
import arrow from '../../image/content/arrow1.svg'

export default class EventsComponents extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            items2: []
        };
        this.handleClick = this.handleClick.bind(this);
    }



    componentDidMount() {
        fetch("http://localhost:8000/api/events/t", 
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Access-Control-Allow-Origin':  'http://localhost:3000/',
                'Access-Control-Allow-Methods': 'GET',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
        }) 
        .then (res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )   
    }

    handleClick(b){
        let date = b[8]+b[9]
        console.log(date);
    }

    render() {
        const {error, isLoaded, items} = this.state;
        const items2 = this.state;
        if (error) {
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div className="events-com">
                    <div className="events-com__heading">Предстоящие мероприятия</div>
                    <div className="events-com__content">
                        {items.map(item => (
                            <div key={item.id} className="events-com__row">
                                    <img  src={item.url} onClick={this.handleClick(item.date)}></img>
                                <div className="events-com__column">
                                    <div className="events-com__name">{item.name}</div>
                                    <div className="events-com__date">{item.date}</div>
                                    <div className="events-com__btn">Подробнее <img src={arrow}></img></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

