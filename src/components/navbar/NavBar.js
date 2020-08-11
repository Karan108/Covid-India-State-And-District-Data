import React from 'react'
import "./NavBar.css";
import { Link } from "react-scroll";
function NavBar() {
    return (
        <div className="nav">
            <header>
                <div className="branding">
                    <h1><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Covid-19 INDIA</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="symptoms" spy={true} smooth={true} offset={50} duration={500}>
                                Symptoms
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="precautions" spy={true} smooth={true} offset={50} duration={500}>
                                Precautions
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default NavBar
