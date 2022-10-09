import Navbar from '../components/Navbar';
import MainPage from '../components/MainPage';
import { Routes, Route } from 'react-router-dom';
import '../css/style.css';
import Home from '../pages/Home';

export default function Main(){
    return(
        <>
            <Navbar/>
            <div className="App__content _container-app">
                <MainPage/>
            </div>
        </>
    )
}