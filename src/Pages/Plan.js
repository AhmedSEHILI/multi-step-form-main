import React from 'react';
import BackBtn from '../Comps/BackBtn';
import CardPlan from '../Comps/CardPlan';
import NextBtn from '../Comps/NextBtn';
import PlanToggle from '../Comps/PlanToggle';


function Plan(props) {

    const Plans = [
        {Icon:"./icon-arcade.svg", Title: "Arcade", Price: "9"},
        {Icon:"./icon-advanced.svg", Title: "Advanced", Price: "12"},
        {Icon:"./icon-pro.svg", Title: "Pro", Price: "15"},

    ];

    return (
        <div className="flex flex-col gap-20 w-[800px]">
            <div className="">
                <h2 className="">Select your plan</h2>
                <p className="text-black text-opacity-40 font-semibold">You have the option of monthly or yearly billing</p>
            </div>
            <div className="flex flex-row gap-14">
                {Plans.map((Plan) =>
                    <CardPlan Icon = {Plan.Icon} Title = {Plan.Title} Price = {Plan.Price}/>
                )}
            </div>
            <div className="flex flex-row items-center justify-center gap-8 py-2 rounded-lg bg-Marineblue bg-opacity-5">
                <h2 className="text-lg">Monthly</h2>
                <PlanToggle />
                <h2 className="text-lg">Yearly</h2>
            </div>
            <div className="flex flex-row justify-between pt-20">
                <BackBtn />
                <NextBtn />
            </div>
        </div>
    );
}

export default Plan;