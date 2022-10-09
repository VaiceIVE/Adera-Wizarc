import React from "react";
import '../../css/style.css';
import AccountComponent from '../Header-components/AccountComponents'
import Logo from '../../image/logo.svg'

function TestHeader() {

    return(

            <div className="test-header">
                <div className="test-header__content _container">
                <div className="test-header__row">
                    <img src={Logo}></img>
                    <nav className="test-header__nav">
                        <ul className="test-header__list">
                            <li><a href="">Главная</a></li>
                            <li><a href="">О сервисе</a></li>
                            <li><a href="">Бонусы</a></li>
                            <li><a href="">Как участвовать</a></li>
                        </ul>
                    </nav>
                    <AccountComponent/>
                </div>
            </div>          
        </div>

        
    );
}

export default TestHeader;