import React from 'react';

// Calculates total carbon by looping through original array of food data
// and adding it to the new array of food data from user input
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

// Same calculation except times the newly calculated
// total emission by 7 to get weekly emission
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

// Same calculation except times the newly calculated
// total emission by 30 to get monthly emission
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