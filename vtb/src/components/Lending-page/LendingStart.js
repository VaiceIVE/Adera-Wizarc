import React from "react";
import LendingScroll from "./LendingScroll";
import Sticker from './Sticker';

function LendingStart(){
    return(
        <div className="lending-start" id="start">
            <div className="lending-start__content _container">
                <div className="lending-start__row">
                    <h2 className="lending-start__heading">
                        Как мне начать <br/> 
                        участвовать в игре?
                        <Sticker text={'Регистрация'} color={'#5C0FDC'} rot={'matrix(0.96, -0.29, 0.29, 0.96, 0, 0)'} top={'-27px'} left={'-55px'}/>
                        <Sticker text={'Тестирование'} rot={'matrix(0.97, 0.24, -0.24, 0.97, 0, 0)'} color={'#FF7A72'} top={'-20px'} right={'-30px'}/>
                        <Sticker text={'Обучение'} color={'#DDBC45'} rot={'matrix(0.96, -0.28, 0.27, 0.96, 0, 0)'} top={'20px'} right={'-107px'}/>
                    </h2>
                    <p className="lending-start__text">
                        Начало использования серсива занимает менее 15 <br/>
                        минут 
                    </p>
                    <LendingScroll/>
                </div>
            </div>      
        </div>
    )
}

export default LendingStart