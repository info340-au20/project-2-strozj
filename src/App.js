import React, { useState } from 'react' ;
import { Route, Switch } from 'react-router-dom';
import { LandingPage, NavBar } from './Landing.js';
import { CardList, Prompt } from './CardSection.js';
import { Profile } from './MyPage.js';

function App(props) {

    const [state, setState] = useState([]);

    const [clickCount, setClickCount] = useState(0);

    const handleClick = (event) => {
        if (!state.includes(event.target.id)) {
            setClickCount(clickCount + 1)
            setState(state.concat(event.target.id));
        }
    }
    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/explore"><Prompt clicks={clickCount} />
                <CardList foods={props.foods} callback={handleClick} /></Route>
                <Route path="/profile"><Profile items={state}/></Route>
            </Switch>
        </div>
    )
}

export default App;