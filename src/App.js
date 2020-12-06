import React from 'react' ;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'; 
import {LandingPage, NavBar} from './Landing.js';
import { RenderCards } from './CardSection.js';
//import { AddCardForm } from './CardForms.js';
import { CheckoutPage } from './CartCheckout.js';



function App() {

    const eventHandle = (event) =>  {
         
    }
    

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
<<<<<<< HEAD
                <Route path="/explore"><RenderCards props={eventHandle}/></Route>
=======
                <Route path="/explore"><RenderCards/></Route>
                <Route path="/cart"><CheckoutPage/></Route>
>>>>>>> 9645c04e6122b66d5830e49721cc4ff991c2f661
            </Switch>
            
        </div>
    )
}
// <RenderCards cards={props.cards} />

export default App;