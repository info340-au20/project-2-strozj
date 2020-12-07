import React from 'react';
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
                        return <li className="item">{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );  
}