import React, { Component } from "react";
import '../../css/style.css';
import arrow from '../../image/content/arrow1.svg'

export default class MarketComponents extends Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }



    componentDidMount() {
        fetch("http://localhost:8000/api/testmarket", 
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
                <div className="market-com">
                    <div className="market-com__heading">🍔 Еда и напитки</div>
                    <div className="market-com__content">
                        {items.map(item => (
                            <div key={item.id} className="market-com__row">
                                <div className="market-com__column">
                                    <img  src={item.picurl} ></img>
                                    <div className="market-com__name">{item.name}</div>
                                    <div className="market-com__des">{item.des}</div>
                                    <div className="market-com__btn"><span>Хочу</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}

