import { Button } from 'reactstrap';
import React from 'react';

function Card(props) {
    return (
        <div className="card" id={props.food.name}>
            <img className="card-image" src={props.food.img} alt={props.food.name} id={props.food.name}/>
            <Button className="addButton" style={{ color: "#769E90"}} id={props.food.name} size="lg" block onClick={props.callback}>Add</Button>
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
                return <Card key={food.name} food={food} callback={props.callback} howToHandleClick={props.whatToDoWhenClicked} />
            })}

            
        </div>
    )
}

export { CardList, Prompt };
