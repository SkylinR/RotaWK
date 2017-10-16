import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/components/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                    <ul className="nav justify-content-center">
                        <li id="nav-home" className="nav-item"><Link to="/"><a className="nav-link">Home</a></Link></li>
                        <li id="nav-first" className="nav-item"><Link to="/First"><a className="nav-link">First</a></Link></li>
                        <li id="nav-second" className="nav-item"><Link to="/Second"><a className="nav-link">Second</a></Link></li>
                        <li id="nav-third" className="nav-item"><Link to="/Third"><a className="nav-link">Third</a></Link></li>
                    </ul>
            </div>
        );
    }
}

export default Navbar;