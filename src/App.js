import React, {Component} from 'react';
import Configuration from "./Configuration";
import Users from "./Users";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Navbar from "./Navbar";


class App extends Component {

    render() {
        return (
            <Router>
                <div className="container" style={{position: 'relative'}}>
                    <Navbar/>
                    <br/>
                    <Route exact path="/configuration" component={Configuration}/>
                    <Route exact path="/users" component={Users}/>
                </div>
            </Router>
        );
    }
}

export default App;


