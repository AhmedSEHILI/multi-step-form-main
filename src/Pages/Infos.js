import React, { useEffect, useState } from 'react';
import NextBtn from '../Comps/NextBtn';
import Input from '../Comps/Input';
import { Link } from 'react-router-dom';

function Infos(props) {

    function containsOnlySpaces(str) {
        return str.trim().length > 0;
    }      
      
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

    const [isEmpty, setEmpty] = useState(true);


    const handleClick = () => {
        const tab = [value1, value2, value3];
        if (containsOnlySpaces(value1) && containsOnlySpaces(value2) && containsOnlySpaces(value3)) {setEmpty(false)}
        // setEmpty(!tab.every(containsOnlySpaces));

        console.log(isEmpty);

        // tab.every(containsOnlySpaces);
            // containsOnlySpaces(value) ? setEmpty(true) : setEmpty(false)
    }

    return (
        <div className="flex flex-col gap-20 w-[60%]">
                <div className="">
                    <h2 className="">Personal info</h2>
                    <p className="text-black text-opacity-40 font-semibold">Please provide your name, email adress, and phone number.</p>
                </div>
                <div className="flex flex-col gap-14">
                <Input setValue ={setValue1} Label={"Name"} Holder={"Name"} ID={1}/>
                <Input setValue ={setValue2} Label={"Email Address"} Holder={"Example@email.com"} ID={2}/>
                <Input setValue ={setValue3} Label={"Phone Number"} Holder={"eg : +213 0696212314"} ID={3}/>
                </div>
                <div className=" w-full flex flex-row-reverse pt-[130px]">
                    <Link onClick={handleClick} to = "">
                        <NextBtn />
                    </Link>
                </div>
        </div>
    );
}

export default Infos;