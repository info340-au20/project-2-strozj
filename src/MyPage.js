import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export function Profile(props) {
    console.log(props.items);

    return (
        <div>
            <div className="text-light bg-dark p-3">
                <h2 className="text-center">
                    Items Checked out: 
                </h2>
            </div>
            <div class="d-flex">
                <ul class="mx-auto justify-content-center">
                    {props.items.map(item => {
                        return <li>{item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );  
}