import React from "react";
import '../../css/style.css';


function LendingTags(){
    const words = [
        '#VTB',
        '#VTB_СЕРВИС',
        '#ИГРА',
        '#ПРИСОЕДИНЯЙСЯ',
        '#ИГРАЙ_С_ВТБ',
        '#ИГРАЙ_С_ДРУЗЬЯМИ',
        '#УЛУЧШАЙСЯ',
        '#ПОСЕЩАЙ',
        '#ПОКУПАЙ',
        '#ПРОДАВАЙ',
    ];
    

    return(

        <div className="lending-tags">
            <div className="lending-tags__content">
                <div className="lending-tags__row">
                    <ul className="lending-tags__list">
                        {words.map((word) => 
                            <li>{word}</li>
                        )}
                    </ul>
                    <ul className="lending-tags__list">
                        {words.map((word) => 
                            <li>{word}</li>
                        )}
                    </ul>
                </div>
            </div>    
        </div>
    )
}

export default LendingTags