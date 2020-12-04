import React, { Component } from 'react' ;

class App extends Component {
    render() {
        return (
            <div>
                <section>
                        <header>
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
                        <img src="./images/earth.jpg" width="520" alt="An image of green movement" />
                    </div>
                </section>
            </div>
        )
    }
}

export default App;