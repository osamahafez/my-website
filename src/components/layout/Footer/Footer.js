import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-5">
                        <div className="mb-5 flex-center text-center">
                            <a className="text-light" href='https://www.facebook.com/osama.mohamed.3348' target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-facebook-f fa-lg mr-md-5 mr-3 fa-2x"></i>
                            </a>
                        
                            <a className="text-light" href='https://www.linkedin.com/in/osama-hafez/' target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in fa-lg mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="text-light" href="mailto:eng.osama.m.hafez@gmail.com" target='https://www.google.com'>
                                <i className="fas fa-envelope-square fa-lg mr-md-5 mr-3 fa-2x"> </i>
                            </a>

                            <a className="text-light" href='https://github.com/osamahafez' target='_blank' rel="noopener noreferrer">
                                <i className="fab fa-github fa-lg fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-light text-center pb-3">&copy; Copyright {new Date().getFullYear()}: 
                <a className='text-info' href="https://osamahafez.com"> osamahafez.com</a>
            </div>

        </footer>
    )
}

export default Footer;