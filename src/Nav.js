import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
    return (
        <nav>
            <Link to="/" className="logoTxt">
                <p>B</p>
            </Link>
            <ul className="nav-links">
                <Link to="/">
                    <li>Bars</li>
                    {/* <FontAwesomeIcon icon={ ["fas", "bars"] } /> */ }
                </Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/works"><li>Works</li></Link>
                <Link to="/certificates"><li>Skills</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;
