import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import UserInfo from './UserInfo'
import Register from "./Register";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: Date.now(),
            time: 3,
            users: []
        };

        setInterval(() => {
            this.setState(Object.assign(this.state, {date: Date.now()}))
        }, 10)
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users", {headers: {'apikey': localStorage.getItem('apikey')}})
            .then(res => {
                this.state.users = res.data;
                if (!localStorage.getItem('apikey')) {
                    localStorage.setItem('apikey', 'stupdkey')
                }
            })
    }

    render() {
        return (
            <div className="container">

                <Register/>
            </div>
        );
    }

    tick() {
        this.render();
    }

    list(elements) {
        let list = [];

        elements.forEach((element => {
            list.push(<UserInfo user={element}/>)
        }));

        return (
            <div className="ListOfUsers">
                {list}
            </div>
        )
    }
}

export default App;


