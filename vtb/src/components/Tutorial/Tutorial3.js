import React from "react";
import '../../css/style.css';
import line3 from '../../image/content/line3.svg'
import arrow1 from '../../image/content/arrow1.svg'
import TestHeader from "../Test/TestHeader";
import { NavLink } from 'react-router-dom';


export default function Tutorial3() {

    return(
        <div className="wrapper">
            <TestHeader/>
            <div className="tutorial">
                <div className="tutorial__content _container">
                    <h1 class="tutorial__heading">Обучение</h1>
                    <div class="tutorial__progress">
                        <div class="tutorial__complite">Пройдено</div>
                        <div class="tutorial__complite1">75%</div>
                    </div>
                    <img src={line3}></img>
                    <div className="tutorial__row _three">
                        <h2 className="tutorial__name">Список мероприятий</h2>
                        <p class="tutorial__text">
                            Здесь ты всегда можешь увидеть предстоящие мероприятия, а также те, что рекомендованы тебе.
                        </p>
                        <p class="tutorial__text">
                            Кроме всего, ты можешь посмотреть NFT-товары, которые получишь за особоые достижения на мероприятиях.
                        </p>
                        <p class="tutorial__text">
                            Карта поможет тебе визуализировать свой путь в волшебном мире.
                        </p>
                    </div>
                    <NavLink to={'/tutorial/3'}>
                    <div class="tutorial__btn">
                        <div className="tutorial__s">Уже почти преисполнился (ась)...</div>
                        <img src={arrow1}></img>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}