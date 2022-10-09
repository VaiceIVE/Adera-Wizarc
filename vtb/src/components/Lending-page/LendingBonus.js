import React from "react";
import '../../css/style.css';
import bonus from '../../image/lending/bonus-bg.png';
import Sticker from './Sticker';


function LendingBonus(){
    return(
        <div className="lending-bonus" id="bonus">
            <div className="lending-bonus__content _container">
                <div className="lending-bonus__row">
                    <h2 className="lending-bonus__heading">КАКИЕ БОНУСЫ Я 
                    <Sticker text={'Футболка'} color={'#FFD84D'} rot={'matrix(0.99, 0.16, -0.16, 0.99, 0, 0)'} top={'-21px'} right={'-35px'}/>
                    <Sticker text={'Кофе'} rot={'rotate(-13.6deg)'} color={'#D15E57'} top={'95px'} left={'15px'}/>
                    <br/> МОГУ КУПИТЬ?
                    </h2>
                    <p className="lending-bonus__text">
                        Тратьте DR на всё, что мы так сильно любим: мерч, еда, <br/>
                        подарочные купоны, уходовые средства, скидки, подписки <br/>
                        и многое другое
                    </p>
                </div>
            </div>   
            <div className="lending-bonus__bg-img">
                <img src={bonus}></img>
            </div>  
        </div>
    )
}

export default LendingBonus