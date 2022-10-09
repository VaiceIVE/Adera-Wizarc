import React,{useState} from "react";
import bgimg from '../../image/lending/home-bg.png';
import Sticker from './Sticker';
import RegisterModal from "../Modal/Register/RegisterModal";

function LendingHome(){
    const [show, setShow] = useState(false);
    return(
        <div className="lending-home" id="home">
            <div className="lending-home__content _container">
                <div className="lending-home__row">
                    <h1 className="lending-home__heading">ПОЛУЧАЙ БОНУСЫ 
                    <Sticker text={'+100 DR'} color={'#FFD84D'} rot={'rotate(9.41deg)'} top={'-20px'} right={'-30px'}/>
                    <Sticker text={'+10 DR'} rot={'rotate(-13.6deg)'} color={'#D15E57'} top={'50px'} right={'-30px'}/>
                    <br/> И РАСТИ  
                    </h1>
                    <p className="lending-home__text">
                        Присоединяйся к техномагической гонке за прогрессом, <br/>
                        получай бонусы за активность, продвигай свою команду и <br/>
                        становись лучшим магом
                    </p>
                    <div className="lending-home__btn" onClick={() => setShow(true)}><span>Присоединиться к гонке</span></div>
                    <RegisterModal onCLose = {() => setShow(false)} show={show} test={false}>
                    </RegisterModal>
                </div>
            </div>
            <div className="lending-home__bg-img">
                <img src={bgimg}></img>
            </div>      
        </div>
    )
}

export default LendingHome