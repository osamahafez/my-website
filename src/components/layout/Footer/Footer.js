import React from 'react'
import './Footer.css';
import SocialLinks from '../../SocialLinks/SocialLinks';

const Footer = (props) => {
    return (
        <footer className='footer bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-5">
                        <SocialLinks color='text-light' mb='mb-5' />
                    </div>
                </div>

            </div>

            <div className="text-light text-center pb-3">&copy; Copyright {new Date().getFullYear()}: 
                <a className='text-light' href="https://osamahafez.com"> osamahafez.com</a>
            </div>

        </footer>
    )
}

export default Footer;