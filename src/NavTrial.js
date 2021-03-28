import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav2() {

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
        <div className="main-menu" id="js-menu">
            <nav class="menu">
                <ul class="menu-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" to="#home">Home</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="#about">About </Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="#services">Services</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="#works">Works</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="#blog">Blog</Link>
                    </li>

                    <li class="nav-item">
                        <Link class="nav-link" to="#contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav2;