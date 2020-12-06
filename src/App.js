import React from 'react' ;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'; 
import {LandingPage, NavBar} from './Landing.js';
import { RenderCards } from './CardSection.js';



function App() {

    const eventHandle = (event) =>  {
         
    }
    

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/explore"><RenderCards props={eventHandle}/></Route>
            </Switch>
        </div>
    )
}

export default App;