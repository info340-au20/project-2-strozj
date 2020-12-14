import { Button } from 'reactstrap';
import React from 'react';

function Card(props) {
    return (
        <div className="card" id={props.food.name} onClick={props.callback} >
            <img className="card-image" src={props.food.img} alt={props.food.name} id={props.food.name}/>
            <Button style={{ color: "#769E90"}} size="lg" block>Add</Button>
        </div>
    )
}

function Prompt() {
    return (
        <h2 className="prompt">Click on a product to add it to your profile, select any product which you consume or use in a given day!</h2>
    )
}

function CardList(props) {
    return (
        <div className="card-container">
            {props.foods.map((food) => {
                return <Card key={food.name} food={food} callback={props.callback}/>
            })}

            
        </div>
    )
}

export { CardList, Prompt };
