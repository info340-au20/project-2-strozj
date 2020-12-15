import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export function Profile(props) {
    console.log(props.items);

    return (
        <div>
            <div className="checkout">
                <h2 className="checkout">
                    Items Checked out: 
                </h2>
            </div>
            <div>
                <ul className="checkoutList">
                    {props.items.map(item => {
                        return <li key={item} className="item">{item}</li>;
                    })}
                </ul>
            </div>
            <Button className="addButton" style={{ color: "#769E90"}} size="lg" > Daily </Button>  &nbsp;&nbsp;&nbsp;
            <Button className="addButton" style={{ color: "#769E90"}} size="lg" > Monthly </Button>  &nbsp;&nbsp;&nbsp;
            <Button className="addButton" style={{ color: "#769E90"}} size="lg" > Annually </Button> &nbsp;&nbsp;&nbsp;
            
        </div>
    );  
}