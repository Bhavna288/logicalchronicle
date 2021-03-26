import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [navOpen, setNavOpen] = useState(false);

    function handleClick() {
        var x = document.getElementById("topNav");
        if (x.className === "nav-links") {
            x.className += " responsive";
            setNavOpen(true);
        } else {
            x.className = "nav-links";
            setNavOpen(false);
        }
    }

    let listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 600) {
                if (scrollState !== "no-top") {
                    setScrollState("no-top")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState]);

    return (
        <nav className={ scrollState }>
            <Link to="/" className="logoTxt">
                <p>B</p>
            </Link>
            <button className="icon" onClick={ handleClick } id="barsBtn">
                <FontAwesomeIcon icon={ navOpen ? faTimes : faBars } />
            </button>
            <ul className="nav-links" id="topNav">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/resume"><li>Resume</li></Link>
                <Link to="/works"><li>Works</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav >
    );
}

export default Nav;
