import React from 'react';
import { Outlet } from "react-router-dom";
import SideBar from './SideBar';


function Layout(props) {
    return (
        // <div className="relative">
        //     <div className="absolute"></div>
        //     <SideBar />
        //     <div className="absolute translate-x-[90%] top-20"><Outlet /></div>
        // </div>
        <div className="w-screen">
            <SideBar />
            <div className="ml-[500px] lg:ml-[38%] mt-10"><Outlet /></div>
        </div>
    );
}

export default Layout;