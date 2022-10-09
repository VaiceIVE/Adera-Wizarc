import React from "react";
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Events from '../pages/Events';
import Market from '../pages/Market';
import Chats from '../pages/Chats';
import Account from "./Modal/Account/Account";

function MainPage() {
    const location = useLocation();
    console.log(location.pathname);
    if (location.pathname === '/app/main/chats') {
        return <Chats/>
    }else if (location.pathname === '/app/main/events'){
        return <Events/>
    }else if (location.pathname === '/app/main/market') {
        return <Market/>
    }else if (location.pathname === '/app/main/account') {
        return <Account/>
    }else {
        return <Home/>
    }

}   

export default MainPage