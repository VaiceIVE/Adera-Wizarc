import React, {useState} from "react";
import acc from '../../../image/account-big.png';
import Sticker from "../../Lending-page/Sticker";
import '../../../css/style.css';
import Money from "./Money";
import Trait from "./Trait";

export default class Account extends React.Component {
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
                <div className="accountt" >
                    <div className='account__content'>
                        <div className="accountt__row">
                            {items.map(item => (
                                <div key={item.id} className="accountt__head">
                                    <img src={acc} width='96px' height='96px'></img><Sticker  
                                    text={'LVL'+item.level} color={'#FF974D'} top={'163px'} right={'1160px'}/>
                                    <div className="accountt__name">{item.name} {item.lastname}</div>
                                    <div className="accountt__job">{item.job}</div>
                                    <div className="accountt__link">
                                        <div className="accountt__lvl">🔮 Все уровни</div>
                                        <div className="accountt__coven">Моий ковен</div>
                                    </div>
                                </div>
                            ))}
                            <Trait/>
                        </div>
                        <div className="accountt__app">
                            <Money/>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}