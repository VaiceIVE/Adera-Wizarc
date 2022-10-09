import React, {useState} from "react";
import modalexit from "./close.svg";
import '../../../css/style.css'
import Authorization from "./Authorization";
import { NavLink } from 'react-router-dom';

const AuthorizationModal = (props) =>{

    if (!props.show) {
        return null
    };
    

    return (
        <div className="modal" onClick={props.onCLose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__row">
                        <div onClick={props.onCLose} className="modal__close"><img src={modalexit}></img></div>
                        <h2 className="modal__heading">Вход</h2>
                        <Authorization/>
                    <div className="modal__footer"><NavLink to={'/test'}><span>Пропустить вход</span></NavLink></div>
                </div>
            </div>
        </div>
    )
    }
    
    export default AuthorizationModal