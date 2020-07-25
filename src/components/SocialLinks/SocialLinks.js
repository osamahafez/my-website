import React from 'react'
import './SocialLinks.css';
import linkedIn from '../../images/linkedin.svg';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';
import gmail from '../../images/gmail.svg';

const SocialLinks = (props) => {

    const copyToClipboard = (e) => {
        e.preventDefault();

        const email_input = document.createElement("input");
        document.body.appendChild(email_input);
        email_input.setAttribute("value", "eng.osama.m.hafez@gmail.com");
        email_input.select();
        document.execCommand("copy");
        document.body.removeChild(email_input);
        alert('"eng.osama.m.hafez@gmail.com" Copied to Clipboard');
    }


    return (
        <div className={`${props.mb} ${props.mt} flex-center text-center social-links`}>
            <a className={props.color} href='https://www.linkedin.com/in/osama-hafez/' target='_blank' rel="noopener noreferrer">
                {/* <i className="fab fa-linkedin-in fa-lg mr-md-5 mr-3 fa-2x"> </i> */}
                <img src={linkedIn} alt="linkedIn" width="50px" />
            </a>
            
            <a className={props.color} href='https://github.com/osamahafez' target='_blank' rel="noopener noreferrer">
                {/* <i className="fab fa-github fa-lg fa-2x"> </i> */}
                <img src={github} alt="github" width="50px" />
            </a>
            
            <span className={props.color} onClick={copyToClipboard}>
                {/* <i className="fas fa-envelope-square fa-lg mr-md-5 mr-3 fa-2x" id='social-link-email'> </i> */}
                <img src={gmail} alt="gmail" width="50px" id='social-link-email' />
            </span>

            <a className={props.color} href='https://www.facebook.com/osama.mohamed.3348' target='_blank' rel="noopener noreferrer">
                {/* <i className="fab fa-facebook-f fa-lg mr-md-5 mr-3 fa-2x"></i> */}
                <img src={facebook} alt="facebook" width="50px" />
            </a>
        
        </div>
    )
}

export default SocialLinks;