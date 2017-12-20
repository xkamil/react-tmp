import React, {Component} from 'react';
import './App.css';


class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: null,
            interval: props.interval || 1000
        };

        console.log('dupa');
        console.log(this.lol());
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), this.state.interval);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return (
            <div onClick={this.showMessage}>
                {this.state.time}
            </div>
        );
    }

    tick() {
        this.setState({time: Date.now()})
    }

    showMessage(e) {
        e.preventDefault();
        alert('hej')
    }

    lol() {
        return this;
    }

}

export default Clock;


