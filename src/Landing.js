
import React from 'react';
import { NavLink } from 'react-router-dom';

function LandingPage() {
    return (
        <div>
            <section id="main">
                <div className="main-text">
                    You want to <span>reduce</span> the carbon footprint of your food? <br />
                    Focus on what you eat.
                </div>
                <div>
                    <img className="image" src="./images/earth.jpg" width="520" alt="An image of green movement" />
                </div>
            </section>
        </div>
    );  
}

function NavBar() {
    return (
        <nav id="navbar">
            <h1> <img className="logo" src="./images/logo.jpg"/> Food Print </h1>
            <div>
                <NavLink className="link" exact to="/" activeClassName="activeLink">Home</NavLink>
                <NavLink className="link" exact to="/explore" activeClassName="activeLink">Explore</NavLink>
                <NavLink className="link" exact to="/profile" activeClassName="activeLink">Profile</NavLink>
            </div>
        </nav>  
    );
}

export {LandingPage, NavBar};