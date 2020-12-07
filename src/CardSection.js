import React from 'react';
import { useState } from 'react';

function Card(props) {
    return (
        <div className="card" id={props.food.name}>
            <img className="card-image" src={props.food.img} alt={props.food.name}/>
        </div>
    )
}

function CardList(props) {
    return (
        <div className="card-container">
            {props.foods.map((food) => {
                return <Card key={food.name} food={food}/>
            })}
        </div>
    )
}

function FoodCard(props) {
    const theFood = props.foods // local variable

    // store whether selected or not in an array
    // state variable , updater function allows to change the state
    const [isSelected, setSelected] = useState(theFood.selected)
    console.log(isSelected);

    //setSelected(false) -> sets selectedStateVariable to be false
    /*
     const hookArray = useState(theFood.selected) // array returns 2 elements
     const selectedStateVariable = hookArray[0]
     const setStateFunction = hookArray[1] // function when called let's me modify the state var
    */

    let className = '';
    if(theFood.selected) {
        className = 'font-strike';
    }

    const handleClick = (event) => {
        console.log("you clicked me", theFood.name);
    }

    return (
        <li className={className} onClick={handleClick}>
            {theFood.name}
        </li>
    )

}

export {CardList, FoodCard};
