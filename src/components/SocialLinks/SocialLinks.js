import React, { Component } from 'react'
import './SocialLinks.css';

class SocialLinks extends Component {

    copyToClipboard = (e) => {
        e.preventDefault();

        const email_input = document.createElement("input");
        document.body.appendChild(email_input);
        email_input.setAttribute("value", "eng.osama.m.hafez@gmail.com");
        email_input.select();
        document.execCommand("copy");
        document.body.removeChild(email_input);
        alert('"eng.osama.m.hafez@gmail.com" Copied to Clipboard');
    }

    render() {

        return (
            <div className={`${this.props.mb} ${this.props.mt} flex-center text-center`}>
                <a className={this.props.color} href='https://www.facebook.com/osama.mohamed.3348' target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-facebook-f fa-lg mr-md-5 mr-3 fa-2x"></i>
                </a>
            
                <a className={this.props.color} href='https://www.linkedin.com/in/osama-hafez/' target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in fa-lg mr-md-5 mr-3 fa-2x"> </i>
                </a>

                <span className={this.props.color} onClick={this.copyToClipboard}>
                    <i className="fas fa-envelope-square fa-lg mr-md-5 mr-3 fa-2x" id='social-link-email'> </i>
                </span>

                <a className={this.props.color} href='https://github.com/osamahafez' target='_blank' rel="noopener noreferrer">
                    <i className="fab fa-github fa-lg fa-2x"> </i>
                </a>
            </div>
        )
    }
}

export default SocialLinks;