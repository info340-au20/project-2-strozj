import React, { useState} from 'react' ;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'; 
import {LandingPage, NavBar} from './Landing.js';
import { CardList } from './CardSection.js';
//import { AddCardForm } from './CardForms.js';
import { CheckoutPage } from './CartCheckout.js';

function App(props) {

    const [state, setState] = useState([]);

    const handleClick = (event) => {
        console.log(event.target.id);
        setState(state.concat(event.target.id));
    }

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/explore"><CardList foods={props.foods} callback={handleClick}/></Route>
                <Route path="/cart"><CheckoutPage/></Route>
            </Switch>
        </div>
    )
}

export default App;