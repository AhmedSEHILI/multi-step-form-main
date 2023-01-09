import React from 'react';

function Choice({Step, Title}) {
    return (
        <div className="Cmp flex flex-row gap-6 justify-center items-center">
            <div className="CmpChild w-[45px] h-[45px] border-2 text-center leading-[40px] rounded-full font-bold text-lg border-white text-white">{Step}</div>
            <div className="flex flex-col">
                <div className="font-light text-white">STEP {Step}</div>
                <h3 className="font-bold text-lg text-white">{Title}</h3>
            </div>
        </div>
    );
}

export default Choice;