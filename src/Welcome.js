import React, {Component} from 'react';
import './App.css';


class Welcome extends Component {


    render() {
        return (
            <h1>Welcome {this.props.name} component!</h1>
        );
    }

}

export default Welcome;


