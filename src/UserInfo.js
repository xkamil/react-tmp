import React, {Component} from 'react';
import './App.css';


class UserInfo extends Component {


    render() {
        return (
            <table style={{border: "solid 1px #000", width: 400, margin: 5}}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.props.user.id}</td>
                    <td>{this.props.user.name}</td>
                    <td>{this.props.user.email}</td>
                </tr>
                </tbody>
            </table>
        );
    }

}

export default UserInfo;


