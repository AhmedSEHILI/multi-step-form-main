import React, { useState } from 'react';



function Input({setValue, Label, Holder, hide, bord, ID}) {



    const handleChange = (event) => {
        setValue(event.target.value);
    //   setEmpty(containsOnlySpaces(event.target.value));
    //   console.log(isEmpty);
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
                 <label className="font-semibold">{Label}</label>
                 <label className={`hidden ${hide}`}>This field is required</label>
            </div>
            <input type="text" id={ID} placeholder={Holder} onChange={handleChange} className={`pl-6 border-[1px] h-12 rounded-lg ${bord}`} required/>
        </div>
    );
}

export default Input;