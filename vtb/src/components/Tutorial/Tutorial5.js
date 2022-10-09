import React from "react";
import '../../css/style.css';
import line4 from '../../image/content/line4.svg'
import arrow1 from '../../image/content/arrow1.svg'
import TestHeader from "../Test/TestHeader";
import { NavLink } from 'react-router-dom';


export default function Tutorial5() {

    return(
        <div className="wrapper">
            <TestHeader/>
            <div className="tutorial">
                <div className="tutorial__content _container _f">
                    <h1 class="tutorial__heading">Обучение</h1>
                    <div className="tutorial__row _five">
                        <h2 className="tutorial__name">Еще кое-что...</h2>
                        <p class="tutorial__text">
                        Мы не стали говорить тебе сразу, но за это обучение ты получишь свои первые Digital-рубли. 
                        </p>
                        <p class="tutorial__custom-text">
                            + 200 DR 🎉
                        </p>
                    </div>
                    <NavLink to={'/app/main'}>
                    <div class="tutorial__btn">
                        <div className="tutorial__s">Начать играть</div>
                        <img src={arrow1}></img>
                    </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}