import { React, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Service extends Component {
    render() {
        return (
            <div className="singleService">
                <FontAwesomeIcon icon={ this.props.icon } className="service-icon" />
                <p className="service-title">{ this.props.title }</p>
                <p className="service-description">{ this.props.description }</p>
            </div>
        );
    }
}

export default Service;
