import React from "react";
import '../../css/style.css';
import line4 from '../../image/content/line4.svg'
import arrow1 from '../../image/content/arrow1.svg'
import TestHeader from "../Test/TestHeader";
import { NavLink } from 'react-router-dom';


export default function Tutorial4() {

    return(
        <div className="wrapper">
            <TestHeader/>
            <div className="tutorial">
                <div className="tutorial__content _container">
                    <h1 class="tutorial__heading">Обучение</h1>
                    <div class="tutorial__progress">
                        <div class="tutorial__complite">Пройдено</div>
                        <div class="tutorial__complite1">100%</div>
                    </div>
                    <img src={line4}></img>
                    <div className="tutorial__row _four">
                        <h2 className="tutorial__name">Маркет</h2>
                        <p class="tutorial__text">
                        Накопились Digital-рубли? Значит, пора раскошелиться на что-нибудь приятное. Может, кофейку?
                        </p>
                        <p class="tutorial__text">
                            Как только попьешь, не забудь поторговаться за крутые NFT-стикеры. Баг это не фича? Или ты не программист?
                        </p>
                    </div>
                    <NavLink to={'/tutorial/4'}>
                    <div class="tutorial__btn">
                        <div className="tutorial__s">Я чувствую магическую силу!</div>
                        <img src={arrow1}></img>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}