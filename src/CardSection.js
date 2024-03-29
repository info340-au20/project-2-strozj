import { Button } from 'reactstrap';
import React from 'react';

// create card component which will contain an image of the food item and add button
function Card(props) {
    return (
        <div className="card" id={props.food.name}>
            <img className="card-image" src={props.food.img} alt={props.food.name} id={props.food.name}/>
            <Button className="addButton" style={{ color: "#769E90"}} id={props.food.name} size="lg" block onClick={props.callback}>Add</Button>
        </div>
    )
}

// prompt component that will showcase how many food items user added
function Prompt(props) {
    return (
        <h2 className="prompt">
            Number of items added: { props.clicks }
        </h2>
    )
}

// Card list component that renders all the cards
function CardList(props) {
    return (
        <div className="card-container">
            {props.foods.map((food) => {
                return <Card key={food.name} food={food} callback={props.callback} />
            })}

            
        </div>
    )
}

export { CardList, Prompt };
