import React from "react";
import aboutus from '../../image/lending/about-us-bg.png';
import LendingFunctions from "./LendingFunctions";


function LendingAboutUs(){
    return(
        <div className="lending-about-us" id="about-us">
            <div className="lending-about-us__content _container">
                <div className="lending-about-us__row">
                    <h2 className="lending-about-us__heading">Что это такое?</h2>
                    <p className="lending-about-us__text">
                        Wizark - это сервис от ВТБ, который повзоляет <br/>
                        сотрудникам компании получать бонусы за корпоративную <br/>
                        активность
                    </p>
                    <p className="lending-about-us__text">
                        Посещайте мероприятия, встречайтесь с коллегами и <br/>
                        говорите с ними в чате, а мы будем начислять вам DR, <br/>
                        которые можно тратить на маркете
                    </p>
                </div>
                <LendingFunctions/>
            </div>  
            <div className="lending-about-us__bg-img">
                <img src={aboutus}></img>
            </div>     
        </div>
    )
}

export default LendingAboutUs