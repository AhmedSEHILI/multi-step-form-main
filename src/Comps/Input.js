import React, { useState } from 'react';



function Input({Label, Holder, hide, bord}) {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
      console.log(event.target.value);}

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
                 <label className="font-semibold">{Label}</label>
                 <label className={`hidden ${hide}`}>This field is required</label>
            </div>
            <input type="text" placeholder={Holder} onChange={handleChange} className={`pl-6 border-[1px] h-12 rounded-lg ${bord}`}/>

        </div>
    );
}

export default Input;