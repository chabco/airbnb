import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <div className="container-fluid nav">
            <div className="row">
                <nav className="transparent">
                    <div className="nav-wrapper transparent">
                        <Link to="/" className="left">
                            <ul>
                                <li>
                                    <Link to ="/">airbnb</Link>
                                </li>
                            </ul>

                            </Link>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <Link to="/host/homes">Homes</Link>
                            </li>
                            <li>
                                <Link to="/host/experience">Experience</Link>
                            </li>
                            <li>
                                <Link to="/help">Help</Link>
                            </li>
                            <li>
                                <Link to="/sign-up">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/log-in">Log In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        );
    }
}
 
export default NavBar;