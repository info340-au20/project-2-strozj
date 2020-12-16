import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav id="navbar">
            <h1> <img className="logo" src="./images/logo.jpg" alt="float leaf" /> Food Print </h1>
            <div>
                <NavLink className="link" exact to="/" activeClassName="activeLink">Home</NavLink>
                <NavLink className="link" exact to="/explore" activeClassName="activeLink">Explore</NavLink>
                <NavLink className="link" exact to="/profile" activeClassName="activeLink">Profile</NavLink>
            </div>
        </nav>  
    );
}

export { NavBar };