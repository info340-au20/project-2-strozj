import React from 'react';
import { NavBar } from "./NavBar";

function LandingPage() {
    return (
        <div>
            <section id="main">
                <div className="main-text">
                    You want to <span>reduce</span> the carbon footprint of your food? <br />
                    Focus on what you eat.
                </div>
                <div>
                    <img className="image" src="./images/earth.jpg" width="520" alt="green movement" />
                </div>
            </section>
        </div>
    );  
}

export { LandingPage, NavBar };