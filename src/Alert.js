import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Type = {
    DANGER:'danger',
    SUCCESS:'success',
    WARNING: 'warning'
};

class Alert extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        type: PropTypes.string
    };

    render() {
        const style = {
            position: 'absolute',
            top: '30%',
            left: '35%',
            width: '30%',
            textAlign: 'center'
        };

        let type = this.props.type || 'success';

        return (
            <React.Fragment>
                <div className={'alert alert-' + type} style={style}>
                    {this.props.text}
                </div>
            </React.Fragment>
        )
    }

}

//export default Alert;
export {Type, Alert};


