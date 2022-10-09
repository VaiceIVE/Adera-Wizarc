import React, { Component } from "react";
import '../../css/style.css';
import account from '../../image/account.png';
import { NavLink } from 'react-router-dom';

export default class AccountComponent extends Component {
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
                <div className="account">
                    { items.map(item => (
                        <NavLink to={'account'}>
                            <div key={item.id} className="account__row">
                            <div className="account__column" >
                                <div className="account__name">
                                    {item.name}
                                </div>
                                <div className="account__level">
                                    LVL {item.level}
                                </div>
                            </div>
                            <img src={account} width="56" height="56"></img>
                            
                        </div>
                        </NavLink>
                    ))}
                </div>
            )
        }
    }
}

