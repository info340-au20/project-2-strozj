import React, { useState } from 'react' ;
import { Route, Switch } from 'react-router-dom'; 
import { LandingPage, NavBar } from './Landing.js';
import { CardList, Prompt } from './CardSection.js';
import { Profile } from './MyPage.js';

function App(props) {

    const [state, setState] = useState([]);

    const [foods, setFoods] = useState(props.foods);

    // toggles 'selected' property of food with given id
    const toggleFoodSelected = (foodId) => {
        let updatedFoodArray = foods.map((eachFood) => {
            let foodCopy = {...eachFood} // use spread to copy
            if(foodCopy.id === foodId) {
                foodCopy.selected = !foodCopy.selected
            }
            return foodCopy;
        })
        console.log("updated array", updatedFoodArray);
        setFoods(updatedFoodArray) // set the new state var and re render
    }

    // let incompleteArray = props.foods.filter((food) => !food.selected);
    // console.log("Number of items selected", incompleteArray);


    const handleClick = (event) => {
        if (!state.includes(event.target.id)) {
            setState(state.concat(event.target.id));
            break;
        }
        
    }
    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/explore"><Prompt/><CardList foods={props.foods} callback={handleClick} whatToDoWhenClicked={toggleFoodSelected} /></Route>
                <Route path="/profile"><Profile items={state}/></Route>
            </Switch>
        </div>
    )
}

export default App;