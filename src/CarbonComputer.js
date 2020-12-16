import React from 'react';

function ComputeDay(props) {
    let totEmissions = 0;
    props.items.forEach(item =>
        props.foods.forEach(food => {
            if (food.name === item) {
                totEmissions += food.totCarbon;
            }
        }
        )
    )
    totEmissions = Math.round(totEmissions);
    return (
        <div id="computeDay">
            <p>Over the course of a day, your carbon emissions total to about <span> { totEmissions }  </span>kg of CO2 per kg of product!</p>
        </div>
    )
}

function ComputeWeek(props) {
    let totEmissions = 0;
    props.items.forEach(item =>
        props.foods.forEach(food => {
            if (food.name === item) {
                totEmissions += food.totCarbon;
            }
        }
        )
    )
    totEmissions = Math.round(totEmissions * 7);
    return (
        <div id="computeWeek">
            <p>Over the course of a week, your carbon emissions total to about <span> { totEmissions } </span> kg of CO2 per kg of product!</p>
        </div>
    )
}

function ComputeMonth(props) {
    let totEmissions = 0;
    props.items.forEach(item =>
        props.foods.forEach(food => {
            if (food.name === item) {
                totEmissions += food.totCarbon;
            }
        }
        )
    )
    totEmissions = Math.round(totEmissions * 30);
    return (
        <div id="computeMonth">
            <p>Over the course of a month, your carbon emissions total to about <span> { totEmissions }  </span> kg of CO2 per kg of product!</p>
        </div>
    )
}

export { ComputeDay, ComputeWeek, ComputeMonth }