import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/certificates"><li>Skills</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;
