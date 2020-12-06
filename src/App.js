import React from 'react' ;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'; 
import {LandingPage, NavBar} from './Landing.js';
import { RenderCards } from './CardSection.js';
//import { AddCardForm } from './CardForms.js';
import { CheckoutPage } from './CartCheckout.js';

/*
array state variable of an list that allows 
Have the ids

callback function in app, pass as a prop 
*/

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/explore"><RenderCards/></Route>
                <Route path="/cart"><CheckoutPage/></Route>
            </Switch>
            
        </div>
    )
}
// <RenderCards cards={props.cards} />

export default App;