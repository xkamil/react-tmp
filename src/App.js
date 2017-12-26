import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log();
            })
    }

    render() {
        return (
            <div className="container">

                <h1>Aplikacja</h1>
            </div>
        );
    }
}

export default App;


