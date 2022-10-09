import React from "react";

import activities from '../../image/lending/activities.svg';
import nft from '../../image/lending/nft.svg';
import shop from '../../image/lending/shop.svg';

import '../../css/style.css';

function LendingFunctions(){
    return(
        <div className="lending-functions">
            <div className="lending-functions__content">
                <div className="lending-functions__row">
                    <ul className="lending-functions__list">
                        <li>
                            <img src={activities}></img>
                            <p className="lending-functions__text">
                                Ходи на тренинги, посещай <br/>
                                лекции и вебинары
                            </p>
                        </li>
                        <li>
                            <img src={nft}></img>
                            <p className="lending-functions__text">
                                Получай VTpoints и NFT- <br/>
                                сертификаты
                            </p>
                        </li>
                        <li>
                            <img src={shop}></img>
                            <p className="lending-functions__text">
                                Лови бонусы, продавай или <br/>
                                покупай услуги
                            </p>
                        </li>
                    </ul>
                </div>      
            </div>      
        </div>
    )
}

export default LendingFunctions