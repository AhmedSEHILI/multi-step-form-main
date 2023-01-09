import React from 'react';
import Choice from './Choice';

function SideBar(props) {
    return (
        <div className="relative w-[440px] p-6  ">
            <img className="absolute w-full " src="/bg-sidebar-desktop.svg" alt="bg-side-bar"/>
            <div className="absolute flex flex-col gap-10 ml-16 mt-20">
                <Choice Step={"1"} Title={"YOUR INFO"}/>
                <Choice Step={"2"} Title={"YOUR INFO"}/>
                <Choice Step={"3"} Title={"YOUR INFO"}/>
                <Choice Step={"4"} Title={"YOUR INFO"}/>

            </div>
        </div>
    );
}

export default SideBar;