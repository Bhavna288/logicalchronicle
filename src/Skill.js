import { React, Component } from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Skill extends Component {
    style = {
        "font-size": "14px"
    }

    render() {
        return (
            <div>
                <p className="skill-name">{ this.props.name }</p>
                <Progress percent={ this.props.percent } />
            </div>
        );
    }
}

export default Skill;
