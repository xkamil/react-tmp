import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Oauth2</a>
                <div className="navbar-nav">
                    <Link to="/users" className="nav-item nav-link" >Users</Link>
                    <Link to="/configuration" className="nav-item nav-link" >Configuration</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;


