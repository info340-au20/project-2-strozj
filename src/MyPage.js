import React from 'react';
import { Button } from 'reactstrap';
import { ComputeDay, ComputeWeek, ComputeMonth } from './CarbonComputer.js';
import 'bootstrap/dist/css/bootstrap.css';

export function Profile(props) {
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
            <div id="profileButton">
                <Button className="addButton" style={{ color: "#769E90"}} size="lg" onClick={props.callbackDay}> Daily </Button>  &nbsp;&nbsp;&nbsp;
                <Button className="addButton" style={{ color: "#769E90"}} size="lg" onClick={props.callbackWeek}> Weekly </Button>  &nbsp;&nbsp;&nbsp;
                <Button className="addButton" style={{ color: "#769E90"}} size="lg" onClick={props.callbackMonth}> Monthly </Button> &nbsp;&nbsp;&nbsp;
            </div>
        </div>
    );  
}