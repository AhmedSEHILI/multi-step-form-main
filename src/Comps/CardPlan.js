import React from 'react';

function CardPlan({Icon, Title, Price, Idd, len}) {
    // console.log(len);

    const handleClick = () => {
        for (let i = 1; i<=len; i++)
        {  
            if (i != Idd) {
                document.getElementById(i).style.backgroundColor = "";
                document.getElementById(i).style.borderColor = "";
        }
        }
        document.getElementById(Idd).style.backgroundColor = "rgba(2, 41, 90, 0.05)";
        document.getElementById(Idd).style.borderColor = "hsl(243, 100%, 62%)";
    }

    return (
        <div onClick={handleClick} id={Idd} className=" cursor-pointer w-[220px] h-[260px] border-[2px] border-[#d8d8d8] hover:border-Purplishblue rounded-xl flex flex-col justify-around pl-8">
            <img src={Icon} alt="" className="w-16" />
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl">{Title}</h2>
                <p className="text-lg text-Marineblue text-opacity-40 font-bold">${Price}</p>
            </div>
        </div>
    );
}

export default CardPlan;