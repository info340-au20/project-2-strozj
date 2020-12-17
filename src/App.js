import React, { useEffect, useState } from 'react' ;
import { Button } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import { LandingPage, NavBar } from './Landing.js';
import { CardList, Prompt } from './CardSection.js';
import { Profile } from './MyPage.js';
import { ComputeDay, ComputeWeek, ComputeMonth } from './CarbonComputer.js';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    signInOptions: [
        {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true
        }
    ],
    credentialHelper: 'none',
    signInFlow: 'popup',
    callbacks: {
        signInSuccessWithAuthResult: () => false
    },
};


function App(props) {

    const [user, setUser] = useState(undefined);

    const handleSignOut = () => {
        firebase.auth().signOut();
    }

    let UserMenu;
    if (!user) {
        UserMenu = <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    } else {
        UserMenu = <Button className="addButton logbutton" size="lg" onClick={handleSignOut}>Log Out {user.displayName}</Button>
    }

    // saves the id of the image cards
    const [state, setState] = useState([]);

    // tracks number of times user clicks
    const [clickCount, setClickCount] = useState(0);

    // sets the state of user input if they want to look at day, week, or month
    const [handleDay, setHandleDay] = useState(false);
    const [handleWeek, setHandleWeek] = useState(false);
    const [handleMonth, setHandleMonth] = useState(false);

    // increments click by one, once user clicks add button of an image
    // saves the id of the food item clicked to display in the profile page
    const handleClick = (event) => {
        if (!state.includes(event.target.id)) {
            setClickCount(clickCount + 1)
            setState(state.concat(event.target.id));
            const userRef = firebase.database().ref(user.uid);
            const newStateObj = {
                state: state.concat(event.target.id),
                clickCount: clickCount + 1,
                userID: user.uid,
                userName: user.displayName
            }
            userRef.push(newStateObj);
        }
    }

    // toggles the state of the day, used for the button later
    const handleDayToggle = () => {
        if (handleDay) {
            setHandleDay(false);
        } else {
            setHandleDay(true);
        }
    }

    // toggles the state of the week, used for the button later
    const handleWeekToggle = () => {
        if (handleWeek) {
            setHandleWeek(false);
        } else {
            setHandleWeek(true);
        }
    }

    // toggles the state of the month, used for the button later
    const handleMonthToggle = () => {
        if (handleMonth) {
            setHandleMonth(false);
        } else {
            setHandleMonth(true);
        }
    }

    // auth state event listener
    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser)
            } else {
                setUser(null);
            }
        })
    })

    // Create day, week, month elements with the updated state toggled.
    // The elements will get rendered in the return
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
            <NavBar user={user}/>
            <Switch>
                {/* landing page */}
                <Route exact path="/"><LandingPage/>{UserMenu}</Route>

                {/* Explore page contains a prompt component variable and a cardlist for user to interact with */}
                <Route path="/explore"><Prompt clicks={clickCount}/><CardList foods={props.foods} callback={handleClick}/></Route>
                
                {/* render the updated component variables in the user profile page */}
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