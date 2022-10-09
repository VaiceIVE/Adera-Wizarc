import React, { useState, useRef } from "react";

export default function LendingScroll() {

    return(
        <div className="lending-scroll" >
            <div className="lending-scroll__content ">
                <div className="lending-scroll__row">
                    <ul className="lending-scroll__list" >
                        <li>
                            <h3 className="lending-scroll__heading">1</h3>
                            <p className="lending-scroll__text">
                                Зарегистрируйся на сайте, используя <br/>
                                свою рабочую почту
                            </p>
                        </li>
                        <li>
                            <h3 className="lending-scroll__heading">2</h3>
                            <p className="lending-scroll__text">
                                Пройди небольшой тест, который <br/>
                                поможет определить твоего персонажа
                            </p>
                        </li>
                        <li>
                            <h3 className="lending-scroll__heading">3</h3>
                            <p className="lending-scroll__text">
                                Посещай меропрития, находи команду, <br/>
                                соревнуйся и получай бонусы!
                            </p>
                        </li>
                    </ul>
                    <ul className="lending-scroll__list">
                        <li>
                            <h3 className="lending-scroll__heading">1</h3>
                            <p className="lending-scroll__text">
                                Зарегистрируйся на сайте, используя <br/>
                                свою рабочую почту
                            </p>
                        </li>
                        <li>
                            <h3 className="lending-scroll__heading">2</h3>
                            <p className="lending-scroll__text">
                                Пройди небольшой тест, который <br/>
                                поможет определить твоего персонажа
                            </p>
                        </li>
                        <li>
                            <h3 className="lending-scroll__heading">3</h3>
                            <p className="lending-scroll__text">
                                Посещай меропрития, находи команду, <br/>
                                соревнуйся и получай бонусы!
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


        




