import React from 'react';
import { Link } from 'react-router-dom';


function NextBtn({linkto}) {
    return (
        <Link to = {linkto} >
            <div className="cursor-pointer w-fit rounded-md bg-Marineblue hover:bg-Purplishblue font-semibold text-white px-8 py-3">
                Next Step
            </div>
        </Link>
    );
}

export default NextBtn;