import React from "react";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: 'home',
        icon: <BiIcons.BiHomeCircle/>,
        cName: 'navbar__text'
    },
    {
        title: 'Events',
        path: 'events',
        icon: <BiIcons.BiListUl/>,
        cName: 'navbar__text'
    },
    {
        title: 'Market',
        path: 'market',
        icon: <BiIcons.BiStoreAlt/>,
        cName: 'navbar__text'
    },
    {
        title: 'Chats',
        path: 'chats',
        icon: <BsIcons.BsChat/>,
        cName: 'navbar__text'
    }
]