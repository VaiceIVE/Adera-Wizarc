import React from "react";
import '../../css/style.css';
import line2 from '../../image/content/line2.svg'
import arrow1 from '../../image/content/arrow1.svg'
import TestHeader from "../Test/TestHeader";
import { NavLink } from 'react-router-dom';


export default function Tutorial2() {

    return(
        <div className="wrapper">
            <TestHeader/>
            <div className="tutorial">
                <div className="tutorial__content _container">
                    <h1 class="tutorial__heading">Обучение</h1>
                    <div class="tutorial__progress">
                        <div class="tutorial__complite">Пройдено</div>
                        <div class="tutorial__complite1">50%</div>
                    </div>
                    <img src={line2}></img>
                    <div className="tutorial__row _two">
                        <h2 className="tutorial__name">Личный кабинет</h2>
                        <p class="tutorial__text">
                            Нажав на иконку пользователя. ты откроешь свой личный кабинет. Тут ты сможешь найти всю нужную информацию о своих бонусах и NFT-товарах.
                        </p>
                        <p class="tutorial__text">
                            Посмотрим список уровней или зайди в DIgital кошель и отправь другу парочку монет.
                        </p>
                    </div>
                    <NavLink to={'/tutorial/2'}>
                    <div class="tutorial__btn">
                        <div className="tutorial__s">Еще больше!</div>
                        <img src={arrow1}></img>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}