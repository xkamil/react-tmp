import React, {Component} from 'react';
import Api from "./Api";
import {Alert, Type} from "./Alert";

import Utils from "./Utils"

console.log(Type);

class Users extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filter_id: ''
        };

        this.handleFilterById = this.handleFilterById.bind(this);
    }

    componentDidMount() {
        Api.getUsers().then((users) => {
            console.log(users);
            this.setState({users});
        }).catch((error) => {
            this.showAlert('Server error', 2, Type.DANGER);
        })
    }

    handleFilterById(e) {
        let id = e.target.value;
        this.setState({filter_id: id})
    }

    render() {
        return (
            <React.Fragment>
                <h4>List of users</h4>
                <p>List of users registered in oauth2 server. To connect user with PRPC user create user in PRPC with id matching user email.
                To login using oauth2 server use user ID and user password form table below.</p>
                <br/>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th><input type="text" placeholder="ID" onChange={this.handleFilterById}/></th>
                        <th>Password</th>
                        <th>Scopes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.filter(({id}) => id.indexOf(this.state.filter_id) !== -1).map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.password}</td>
                            <td>
                            <pre style={{margin: -15}}>
                            {JSON.stringify(user.scopes, null, 2).replace(/({)|(})|(")|(,)/g, '')}
                            </pre>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Users;


