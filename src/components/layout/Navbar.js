import React from 'react';
// import { NavHashLink as NavLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom'; // use the above after finishing the page

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <span className="navbar-brand" style={{cursor:'default'}}>Osama Hafez</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarElements" aria-controls="navbarElements" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarElements">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* <NavLink smooth className="nav-link" to="/education#education">Education</NavLink> */}
                            {/* use the above after finishing the page */}
                            <NavLink className="nav-link" to="/education">Education</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/experience">Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/activites">Extracurricular Activities</NavLink>
                        </li>
                    </ul>
        
                </div>
            </nav>
    )
}

export default Navbar;