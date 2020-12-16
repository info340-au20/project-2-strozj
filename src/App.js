import React, { useState } from 'react' ;
import { Route, Switch } from 'react-router-dom';
import { LandingPage, NavBar } from './Landing.js';
import { CardList, Prompt } from './CardSection.js';
import { Profile } from './MyPage.js';
import { ComputeDay, ComputeWeek, ComputeMonth } from './CarbonComputer.js';


function App(props) {

    const [state, setState] = useState([]);
    const [clickCount, setClickCount] = useState(0);

    const [handleDay, setHandleDay] = useState(false);

    const [handleWeek, setHandleWeek] = useState(false);

    const [handleMonth, setHandleMonth] = useState(false);

    const handleClick = (event) => {
        if (!state.includes(event.target.id)) {
            setClickCount(clickCount + 1)
            setState(state.concat(event.target.id));
        }
    }

    const handleDayToggle = () => {
        if (handleDay) {
            setHandleDay(false);
        } else {
            setHandleDay(true);
        }
    }

    const handleWeekToggle = () => {
        if (handleWeek) {
            setHandleWeek(false);
        } else {
            setHandleWeek(true);
        }
    }

    const handleMonthToggle = () => {
        if (handleMonth) {
            setHandleMonth(false);
        } else {
            setHandleMonth(true);
        }
    }

    let dayComponent;
    let weekComponent;
    let monthComponent;
    if (handleDay) {
        dayComponent = <ComputeDay items={state} foods={props.foods} />
    }
    if (handleWeek) {
        weekComponent = <ComputeWeek items={state} foods={props.foods} />
    }
    if (handleMonth) {
        monthComponent = <ComputeMonth items={state} foods={props.foods} />
    }
    
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/explore"><Prompt clicks={clickCount}/><CardList foods={props.foods} callback={handleClick}/></Route>
                <Route path="/profile"><Profile items={state} foods={props.foods} callbackDay={handleDayToggle} callbackMonth={handleMonthToggle} callbackWeek={handleWeekToggle}/>
                {dayComponent}
                {weekComponent}
                {monthComponent}
                </Route>
            </Switch>
        </div>
    )
}

export default App;