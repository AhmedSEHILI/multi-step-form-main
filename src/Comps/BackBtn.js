import React from 'react';
import { Link } from 'react-router-dom';

function BackBtn({linkto}) {
    return (
        <Link to = {linkto} >
            <button className="">
                <div className=" font-bold text-Marineblue">
                    Go Back
                </div>
            </button>
        </Link>
    );
}

export default BackBtn;