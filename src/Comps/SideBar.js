import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Choice from './Choice';
import { MyContext } from '../App.js';


function SideBar(props) {

    const { value, setValue } = useContext(MyContext);
    console.log(value);

    return (
        <div className="relative w-[440px] p-6 ">
            <img className="absolute w-full " src="/bg-sidebar-desktop.svg" alt="bg-side-bar"/>
            <div className="absolute flex flex-col gap-10 ml-16 mt-20">

                {(value === 1 && <Choice Step={"1"} Title={"YOUR INFO"} link={"/"} style={"bg-Lightblue border-Lightblue text-black"}/>)}
                {(value !== 1 && <Choice Step={"1"} Title={"YOUR INFO"} link={"/"}/>)}

                {(value === 2 && <Choice Step={"2"} Title={"YOUR INFO"} link={"plan"} style={"bg-Lightblue border-Lightblue text-black"}/>)}
                {(value !== 2 && <Choice Step={"2"} Title={"YOUR INFO"} link={"plan"}/>)}

                <Choice Step={"3"} Title={"YOUR INFO"}/>
                <Choice Step={"4"} Title={"YOUR INFO"}/>

            </div>
        </div>
    );
}

export default SideBar;