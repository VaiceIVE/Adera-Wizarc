import React, { Component } from "react";
import '../../css/style.css';
import arrow from '../../image/content/arrow.svg';

export default class Greetings extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/usertest", 
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

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <div className="greetings">
                    <div className="greetings__content">
                        {items.map(item => (
                            <div key={item.id} className="greetings__row">
                                <h2 className="greetings__heading">Привет, {item.name}!</h2>
                                <p className="greetings__text">
                                Тебе осталось всего <span>200 очков</span>  до следующего  <br/>
                                уровня! Скорее записывайся на мероприяти ;)
                                </p>
                                <img src={arrow}></img>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

