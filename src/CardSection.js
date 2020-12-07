import React from 'react';

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
                return <Card food={food}/>
            })}
        </div>
    )
}

export {CardList};
