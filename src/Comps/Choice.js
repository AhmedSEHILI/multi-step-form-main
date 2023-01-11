import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Choice({Step, Title, link}) {
    return (
        <NavLink to = {link} className="Cmp flex flex-row gap-6 justify-center items-center">
            <div className="CmpChild w-[45px] h-[45px] border-2 text-center leading-[40px] rounded-full font-bold text-lg border-white text-white">{Step}</div>
            <div className="flex flex-col">
                <div className="font-light text-white">STEP {Step}</div>
                <h3 className="font-bold text-lg text-white">{Title}</h3>
            </div>
        </NavLink>
    );
}

export default Choice;