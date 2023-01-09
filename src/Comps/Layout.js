import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


function Layout(props) {
    return (
        <div className="flex flex-row gap-20 w-screen">
            <SideBar />
            <Outlet />
        </div>
    );
}

export default Layout;