import React from 'react';

function CardPlan({Icon, Title, Price}) {
    return (
        <div className="w-[220px] h-[260px] border-[2px] border-[#d8d8d8] hover:border-Purplishblue rounded-xl flex flex-col justify-around pl-8">
            <img src={Icon} alt="" className="w-16" />
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl">{Title}</h2>
                <p className="text-lg text-Marineblue text-opacity-40 font-bold">${Price}/mo</p>
            </div>
        </div>
    );
}

export default CardPlan;