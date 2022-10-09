import React, {useState} from "react";
import modalexit from "./close.svg";
import '../../../css/style.css'
import Register from "./Register";
import AuthorizationModal from "../Authorization/AuthorizationModal";

const RegisterModal = (props) =>{
    const [show, setShow] = useState(false);

    if (!props.show) {
        return null
    };
    
    return (
        <div className="modal" onClick={props.onCLose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="modal__row">
                        <div onClick={props.onCLose} className="modal__close"><img src={modalexit}></img></div>
                        <h2 className="modal__heading">Регистрация</h2>
                        <Register/>
                    <div className="modal__footer">Уже есть аккаунт? &nbsp; <span onClick={() => { setShow(true);
                    }}>Войти</span></div>
                    <AuthorizationModal onCLose = {() => setShow(false)} show={show}>
                    </AuthorizationModal>
                </div>
            </div>
        </div>
    )
    }
    
    export default RegisterModal