import {React, useState} from 'react' ;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'; 
import {LandingPage, NavBar} from './Landing.js';
import { CardList } from './CardSection.js';
//import { AddCardForm } from './CardForms.js';
import { CheckoutPage } from './CartCheckout.js';
import { useState } from 'react';

function App(props) {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/explore"><CardList foods={props.foods}/></Route>
                <Route path="/cart"><CheckoutPage/></Route>
            </Switch>
        </div>
    )
}

export default App;