import './App.css';
import './css/style.css';

import React from 'react';
import Lending from './components/Lending';
import { Routes, Route} from 'react-router-dom';

import Test from './components/Test/Test';
import Tutorial1 from './components/Tutorial/Tutorial1';
import Tutorial2 from './components/Tutorial/Tutorial2';
import Tutorial3 from './components/Tutorial/Tutorial3';
import Tutorial4 from './components/Tutorial/Tutorial4';
import Tutorial5 from './components/Tutorial/Tutorial5';
import Main from './components/Main';
import Home from './pages/Home';
import Events from './pages/Events';
import Market from './pages/Market';
import Chats from './pages/Chats';
import Account from './components/Modal/Account/Account';


function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Lending/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/tutorial' element={<Tutorial1/>}/>
        <Route path='/tutorial/1' element={<Tutorial2/>}/>
        <Route path='/tutorial/2' element={<Tutorial3/>}/>
        <Route path='/tutorial/3' element={<Tutorial4/>}/>
        <Route path='/tutorial/4' element={<Tutorial5/>}/>
        <Route path='/app/main' element={<Main/>}>
            <Route path="home" element={<Home />}/>
            <Route path="events" element={<Events />}/>
            <Route path="market" element={<Market/>}/>
            <Route path="chats" element={<Chats/>}/>
            <Route path="account" element={<Account/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
