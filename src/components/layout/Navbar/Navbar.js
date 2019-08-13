import React from 'react';
import './Navbar.css';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom'; // use the above after finishing the page

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-md">
            <span className="navbar-brand text-light" style={{cursor:'default'}}>Osama Hafez</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarElements" aria-controls="navbarElements" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-bars fa-lg fa-2x text-light"></i></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarElements">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* <NavLink smooth className="nav-link" to="/education#education">Education</NavLink> */}
                            {/* use the above after finishing the page */}
                            <NavLink className="nav-link text-light" to="/education">Education</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/experience">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-light" to="/activites">Extracurricular Activities</NavLink>
                        </li>
                    </ul>
        
                </div>
            </nav>
    )
}

export default Navbar;