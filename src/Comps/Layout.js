import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


function Layout(props) {
    return (
        <div className="flex flex-row gap-20 w-screen">
            <SideBar />
            <div className="pl-56 pt-20"><Outlet /></div>
        </div>
    );
}

export default Layout;