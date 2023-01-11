import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


function Layout(props) {
    return (
        <div className="relative">
            <div className="absolute"></div>
            <SideBar />
            <div className="absolute translate-x-[90%] top-20"><Outlet /></div>
        </div>
    );
}

export default Layout;