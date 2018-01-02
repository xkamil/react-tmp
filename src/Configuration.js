import React, {Component} from 'react';
import Api from "./Api";
import {Alert, Type} from "./Alert";
import Utils from "./Utils"

class Configuration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alert: {
                display: false,
                text: ''
            },
            configuration: {
                access_token_expiration_time: 0,
                refresh_token_expiration_time: 0,
                client_id: '',
                client_secret: ''
            },
            original_configuration: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.isConfigurationAltered = this.isConfigurationAltered.bind(this);
        this.handleSaveConfiguration = this.handleSaveConfiguration.bind(this);
        this.handleResetConfiguration = this.handleResetConfiguration.bind(this);
        this.showAlert = this.showAlert.bind(this);
    }

    componentDidMount() {
        Api.getConfiguration().then((configuration) => {
            this.setState({configuration, original_configuration: Object.assign({}, configuration)});
        }).catch((error) => {
            this.showAlert('Server error', 2, Type.DANGER);
        })
    }

    handleChange(e) {
        let id = e.target.getAttribute('id');
        let value = e.target.value;

        if (id.endsWith('_time')) {
            if (isNaN(value)) {
                return;
            } else {
                value = parseInt(value);
            }
        }

        let newConfiguration = Object.assign(this.state.configuration, {[id]: value});
        this.setState({configuration: newConfiguration});
    }

    handleSaveConfiguration(e) {
        e.preventDefault();

        Api.saveConfiguration(this.state.configuration).then((configuration) => {
            this.setState({configuration, original_configuration: Object.assign({}, configuration)});
            this.showAlert('Configuration saved', 1, Type.SUCCESS);
        }).catch((error) => {
            this.showAlert('Server error', 1, Type.DANGER);
            console.log(error);
        })
    }

    handleResetConfiguration(e) {
        e.preventDefault();

        Api.resetConfiguration().then((configuration) => {
            this.setState({configuration, original_configuration: Object.assign({}, configuration)});
            this.showAlert('Configuration set to default', 1, Type.WARNING);
        }).catch((error) => {
            this.showAlert('Server error', 1, Type.DANGER);
            console.log(error);
        })
    }

    isConfigurationAltered() {
        return !Utils.areEqual(this.state.original_configuration, this.state.configuration);
    }

    showAlert(text, timeout, type) {
        this.setState({alert: {text, type, display: true}}, () => {
            setTimeout(() => {
                this.setState({alert: {display: false}});
            }, timeout * 1000);
        });
    }

    render() {
        return (
            <React.Fragment>
                <h4>Current server configuration:</h4>
                <p>Modify values and press 'Save' to change configuration. Use 'Reset to default' to bring back default server configuration.</p>
                <br/>

                <form action="/action_page.php">
                    {this.state.alert.display && <Alert text={this.state.alert.text} type={this.state.alert.type}/>}

                    <div className="form-group">
                        <label htmlFor="access_token_expiration_time">Access token expiration time (seconds):</label>
                        <input type="text"
                               className="form-control"
                               id="access_token_expiration_time"
                               value={this.state.configuration.access_token_expiration_time}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="refresh_token_expiration_time">Refresh token expiration time (
                            seconds):</label>
                        <input type="text"
                               className="form-control"
                               id="refresh_token_expiration_time"
                               value={this.state.configuration.refresh_token_expiration_time}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="client_id">Client id:</label>
                        <input type="text"
                               className="form-control"
                               id="client_id"
                               value={this.state.configuration.client_id}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="client_secret">Client secret:</label>
                        <input type="text"
                               className="form-control"
                               id="client_secret"
                               value={this.state.configuration.client_secret}
                               onChange={this.handleChange}/>
                    </div>
                    {this.isConfigurationAltered() &&
                    <button className="btn btn-success" onClick={this.handleSaveConfiguration}>Save</button>}
                    &nbsp;
                    <button className="btn btn-primary" onClick={this.handleResetConfiguration}>Reset to default
                    </button>
                </form>
            </React.Fragment>
        );
    }
}

export default Configuration;


