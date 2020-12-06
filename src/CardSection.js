import React from 'react';

function RenderCards() {
    return (
        <div className="card-container">
                <div className="card meat" id = "Beef_beef_herd">
                    <img className="card-image meat" src="./images/Beef_beef_herd.jpg" alt="raw beef steaks"/>
                </div>
                <div className="card others" id = "Cheese">
                    <img className="card-image others" src="./images/Cheese.jpg" alt="cheese wheels"/>
                </div>
                <div className="card others" id = "Dark_Chocolate">
                    <img className="card-image others" src="./images/Dark_Chocolate.jpg" alt="choclate bars"/>
                </div>
                <div className="card others" id = "Coffee">
                    <img className="card-image others" src="./images/Coffee.jpg" alt="coffee beans"/>
                </div>
                <div className="card meat" id = "Pig_Meat">
                    <img className="card-image meat" src="./images/Pig_Meat.jpg" alt="bacon on a grill"/>
                </div>
                <div className="card seafood" id = "Shrimps_farmed">
                    <img className="card-image seafood" src="./images/Shrimps_farmed.jpg" alt="raw prawns"/>
                </div>
                <div className="card meat" id = "Poultry_Meat">
                    <img className="card-image meat" src="./images/Poultry_Meat.jpg" alt="raw chicken breasts"/>
                </div>
                <div className="card meat" id = "Lamb__Mutton">
                    <img className="card-image meat" src="./images/Lamb__Mutton.jpg" alt="raw lamb chops"/>
                </div>

                <div className="card others" id = "Palm_Oil">
                    <img className="card-image others" src="./images/Palm_Oil.jpg" alt="palm oil and seeds"/>
                </div>
                <div className="card others" id = "Eggs">
                    <img className="card-image others" src="./images/Eggs.jpg" alt="eggs in a carton"/>
                </div>
        </div>
    )
}

export {RenderCards};
