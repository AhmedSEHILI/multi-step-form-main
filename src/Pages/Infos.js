import React from 'react';
import NextBtn from '../Comps/NextBtn';
import Input from '../Comps/Input';
import { Link } from 'react-router-dom';

function Infos(props) {
    return (
        <div className="flex flex-col gap-20 w-[800px]">
                <div className="">
                    <h2 className="">Personal info</h2>
                    <p className="text-black text-opacity-40 font-semibold">Please provide your name, email adress, and phone number.</p>
                </div>
                <div className="flex flex-col gap-14">
                <Input Label={"Name"} Holder={"Name"}/>
                <Input Label={"Email Address"} Holder={"Example@email.com"}/>
                <Input Label={"Phone Number"} Holder={"eg : +213 0696212314"}/>
                </div>
                <Link to = "plan">
                <button className="w-full flex flex-row-reverse pt-[130px]">
                    <NextBtn />
                </button>
                </Link>
        </div>
    );
}

export default Infos;