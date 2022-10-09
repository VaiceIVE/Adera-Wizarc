import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../css/style.css';
import logo from '../image/logo.svg';

function Navbar() {
    let activeLink = 'navbar__text-active';
    return (
        <div className='navbar'>
            <img src={logo}/>
            <nav className='navbar__menu'>
                <ul className='navbar__menu-items'>
                    {SidebarData.map((item, index) => {
                        return (
                            <NavLink to={item.path} className={({ isActive }) =>
                            isActive ? activeLink : item.cName} end>
                                <li key={index}>
                                    <span>
                                        {item.icon}
                                    </span>
                                </li>
                            </NavLink>
                        )
                    })}
                </ul>
            </nav>              
        </div>
        
    )
}

export default Navbar