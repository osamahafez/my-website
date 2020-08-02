import React, { useEffect } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const isScrolled = window.scrollY > 80;
            const nav = document.getElementById('nav');
            const intro = document.getElementById('intro-content');
            if(isScrolled) {
                nav.classList.add('scrolled');
                intro.classList.add('keep');
            }
            else {
                nav.classList.remove('scrolled');
                intro.classList.remove('keep');
            }
        });
        return () => {
            window.removeEventListener('scroll', () => {});
        }
    }, [])

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -58; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

        return (
            <nav id="nav" className="navbar navbar-expand-md">
                
                <NavLink smooth to="#introduction" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <span className="navbar-brand text-light brand-name">
                        <span className='initials'>O</span>sama <span className='initials'>H</span>afez
                    </span>            
                </NavLink>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarElements" aria-controls="navbarElements" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fas fa-bars fa-lg fa-2x text-light"></i></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarElements">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink smooth scroll={scrollWidthOffset} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link text-light" to="#experience">Experience</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink smooth scroll={scrollWidthOffset} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link text-light" to="#skills">Skills</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink smooth scroll={scrollWidthOffset} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link text-light" to="#projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink smooth scroll={scrollWidthOffset} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link text-light" to="#education">Education</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink smooth scroll={scrollWidthOffset} data-toggle="collapse" data-target=".navbar-collapse.show" className="nav-link text-light" to="#activites">Activities</NavLink>
                            </li>
                        </ul>
            
                    </div>
                </nav>
        )
}

export default Navbar;