import { React, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ResumeItem extends Component {
    style = {
        "font-size": "14px"
    }

    render() {
        return (
            <div className="tContent">
                <h3>{ this.props.title }</h3>
                <p style={ this.style }>{ this.props.duration }</p>
                <p>
                    { this.props.description }
                </p>
            </div>
        );
    }
}

export default ResumeItem;
