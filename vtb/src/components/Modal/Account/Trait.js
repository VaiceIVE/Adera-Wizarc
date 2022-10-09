import React, {useState} from "react";
import acc from '../../../image/account-big.png';
import Sticker from "../../Lending-page/Sticker";
import '../../../css/style.css';
import ans from '../../../image/answer.svg';

export default class Trait extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/testtrait", 
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
                <div className="trait" >
                    <div className='trait__content'>
                        <h2 className="trait__heading">Мои заклинания <img src={ans}></img></h2>
                        <div className="trait__row">
                            {items.map(item => (
                            <div className="trait__column">
                                <div key={item.id} className="trait__head">
                                    <img src={item.picurl}></img>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}