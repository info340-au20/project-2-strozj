import React, { Component } from 'react' ;
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Landing } from './Landing.js';

import RenderCards from './CardSection';

/*
// old code
class App extends Component {
    render() {
        return (
            <p>Hi</p>
        )
    }
}
*/

function App(props) {
    return (
    <RenderCards cards={props.cards} />
    )
}

export default App;