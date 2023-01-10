import { Switch } from '@mui/material';
import React from 'react';

function Plan(props) {

    const Plans = [
        {Icon:"./icon-arcade.svg", Title: "Arcade", Price: "9"},
        {Icon:"./icon-advanced.svg", Title: "Advanced", Price: "12"},
        {Icon:"./icon-pro.svg", Title: "Pro", Price: "15"},

    ];

    return (
        <div className="">
           {/* {Plans.map((Plan) =>
                <CardPlan Icon = {Plan.Icon} Title = {Plan.Title} Price = {Plan.Price}/>
            )} */}
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">kkll; me</span> 
                <input type="checkbox" className="toggle" />
            </label>
        </div>
        </div>
    );
}

export default Plan;