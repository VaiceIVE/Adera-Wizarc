import React from "react";
import '../../css/style.css';
import { NavLink } from 'react-router-dom';
import testbg from '../../image/content/test-bg.png';

function TestHome() {

    return(
            <div className="test-home">
                <div className="test-home__content">
                    <div className="test-home__row">
                        <h2 className="test-home__heading">Тестирование</h2>
                        <div className="test-home__gretings">
                            <h3 className="test-home__hi">Привет 👋</h3>
                            <p className="test-home__text">
                                Я верховный маг Адера. Добро пожаловать в Магитек. <br/>
                                Здесь ты наконец разовьешься в великого техномага.  
                            </p>
                            <p className="test-home__text">
                                Но прежде, чем начать свой путь, мы должны <br/>
                                познакомиться с тобой чуть лучше. 
                            </p>
                        </div>
                        <h3 className="test-home__form-heading">Какой твой уровень на работе?</h3>
                        <form className="test__form">
                            <label>
                                <div className="test-home__label">
                                    <span>👶</span>Джуниор
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>🧚</span>Миддл
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>🧙‍♂️</span>Сеньор
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>🧙‍♀️</span>HR
                                </div>
                                <input type="checkbox"></input>
                            </label>
                        </form>
                        <h3 className="test-home__form-heading">Что больше ПОДХОДИТ тебе?</h3>
                        <form className="test__form">
                            <label>
                                <div className="test-home__label">
                                    <span>💬</span>Коммуникабельность
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>😌</span>Щедрость
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>😀‍</span>Спокойствиие
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>😂</span>Спокойствиие
                                </div>
                                <input type="checkbox"></input>
                            </label>
                        </form>
                        <h3 className="test-home__form-heading">Что больше НЕ ПОДХОДИТ тебе?</h3>
                        <form className="test__form">
                            <label>
                                <div className="test-home__label">
                                    <span>📍</span>Целеустремленность
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>🚀</span>Иннициативность
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>⌚‍</span>Тайм-менеджмент
                                </div>
                                <input type="checkbox"></input>
                            </label>
                            <label>
                                <div className="test-home__label">
                                    <span>😂</span>Серьезность
                                </div>
                                <input type="checkbox"></input>
                            </label>
                        </form>
                        <NavLink to={'/tutorial'}><div className="test-home__btn"><span>Продолжить</span></div></NavLink>   
                    </div>  
                </div>
            </div>
    );
}

export default TestHome;