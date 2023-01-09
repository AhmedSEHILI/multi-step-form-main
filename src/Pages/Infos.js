import React from 'react';
import NextBtn from '../Comps/NextBtn';
import Input from '../Comps/Input';

function Infos(props) {
    return (
        <div className="flex flex-col gap-20 pt-20 pl-56">
                <div className="">
                    <h2 className="">Personal info</h2>
                    <p className="">Please provide your name, email adress, and phone number.</p>
                </div>
                <div className="flex flex-col gap-14">
                <Input Label={"Name"} Holder={"Name"}/>
                <Input Label={"Email Address"} Holder={"Example@email.com"}/>
                <Input Label={"Phone Number"} Holder={"eg : +213 0696212314"}/>
                </div>
                <button className="w-full flex flex-row-reverse mt-28">
                    <NextBtn />
                </button>
        </div>
    );
}

export default Infos;