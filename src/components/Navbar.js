import React, { Component } from 'react';
import { Link } from 'react-router';

import '../styles/components/navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                    <ul className="nav justify-content-center">
                        <li id="nav-home" className="nav-item"><Link to="/"><span className="nav-link">Home</span></Link></li>
                        <li id="nav-first" className="nav-item"><Link to="/First"><span className="nav-link">First</span></Link></li>
                        <li id="nav-second" className="nav-item"><Link to="/Second"><span className="nav-link">Second</span></Link></li>
                        <li id="nav-third" className="nav-item"><Link to="/Third"><span className="nav-link">Third</span></Link></li>
                    </ul>
            </div>
        );
    }
}

export default Navbar;