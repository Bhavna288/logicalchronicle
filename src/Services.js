import { React, Component } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

class Service extends Component {
    render() {
        return (
            <div className="singleService">
                <i className="fas fa-bars"></i>
                <p className="service-title">{ this.props.title }</p>
                <p className="service-description">{ this.props.description }</p>
            </div>
        );
    }
}

export default Service;
