import React, { useState, useContext } from 'react';
import BackBtn from '../Comps/BackBtn';
import CardPlan from '../Comps/CardPlan';
import NextBtn from '../Comps/NextBtn';
import PlanToggle from '../Comps/PlanToggle';
import { MyContext } from '../App.js';


function Plan(props) {

    const Plans = [
        {Icon:"./icon-arcade.svg", Title: "Arcade", PriceMo: "9", PriceYe: "80", key: 1},
        {Icon:"./icon-advanced.svg", Title: "Advanced", PriceMo: "12", PriceYe: "90", key: 2},
        {Icon:"./icon-pro.svg", Title: "Pro", PriceMo: "15", PriceYe: "100", key: 3},

    ];

    const [Toggle, setToggle] = useState(false);
    const { value, setValue } = useContext(MyContext);

    const handlemince = () => {
        setValue(()=>{return value-1});
    }



    return (
        <div className="flex flex-col gap-20 w-[800px]">
            <div className="">
                <h2 className="">Select your plan</h2>
                <p className="text-black text-opacity-40 font-semibold">You have the option of monthly or yearly billing</p>
            </div>
            <div className="flex flex-row gap-20">
                {Plans.map((Plan) =>
                    Toggle 
                    ? <CardPlan Icon = {Plan.Icon} Title = {Plan.Title} Price = {Plan.PriceYe + "/Ye"} Idd = {Plan.key} len = {Plans.length}/>
                    : <CardPlan Icon = {Plan.Icon} Title = {Plan.Title} Price = {Plan.PriceMo + "/Mo"} Idd = {Plan.key} len = {Plans.length}/>
                    
                    
                )}
            </div>
            <div className="flex flex-row items-center justify-center gap-8 py-2 rounded-lg bg-Marineblue bg-opacity-5">
                <h2 className="text-lg">Monthly</h2>
                <PlanToggle Toggle={Toggle} Toggling={setToggle}/>
                <h2 className="text-lg">Yearly</h2>
            </div>
            <div className="flex flex-row justify-between pt-20">
                <div onClick={handlemince}>
                  <BackBtn linkto={"/"} />
                </div>
                
                <NextBtn linkto={"/addons"}/>
            </div>
        </div>
    );
}

export default Plan;