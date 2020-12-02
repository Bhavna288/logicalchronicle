import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {

    render() {
        return (
            <div className="project">
                <div className="prImg">
                    <img className="project-img" src={ this.props.img } alt={ this.props.title } />
                    <div className="overly">
                        <Link to="/" className="view-work">View Work</Link>
                    </div>
                </div>
                <div className="project-title">{ this.props.title }</div>
                <div className="project-des">{ this.props.description }</div>
            </div>
        )
    }
}

export default Project;