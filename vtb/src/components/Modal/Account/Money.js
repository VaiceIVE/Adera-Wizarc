import React, {useState} from "react";
import acc from '../../../image/account-big.png';
import Sticker from "../../Lending-page/Sticker";
import '../../../css/style.css';

export default class Money extends React.Component {
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
        const {items} = this.state;
        return (
            <>
                <div className="money" >
                    <div className='money__content'>
                        <h2 className="money__heading">Digital кошель</h2>
                        <div className="money__row">
                            {items.map(item => (
                            <div className="money__column">
                                <div key={item.id} className="money__head">{item.id}</div>
                                <div className="money__valute">DR</div>
                                <div className="money__name">{item.name} {item.lastname}</div>
                            </div>))}
                            <div className="money__logo">Logo</div> 
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}