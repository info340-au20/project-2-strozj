import React, { Component } from 'react' ;
import CardSection from './CardSection';


class App extends Component {
    render() {
        return (
            <div>
                <section>
                        <header className="splashHeader">
                            Food Print
                            <div>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                    </ul>
                            </div>
                        </header> 
                </section>

                <section id="main">
                    <div className="main-text">
                        You want to <span>reduce</span> the carbon footprint of your food? <br />
                        Focus on what you eat.
                    </div>
                    <div>
                        <img className="image" src="./images/earth.jpg" width="520" alt="An image of green movement" />
                    </div>
                </section>
            </div>

        )
    }
}

export default App;