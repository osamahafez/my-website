import React from 'react'

const SocialLinks = (props) => {
    return (
        <div className={`${props.mb} ${props.mt} flex-center text-center`}>
            <a className={props.color} href='https://www.facebook.com/osama.mohamed.3348' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-lg mr-md-5 mr-3 fa-2x"></i>
            </a>
        
            <a className={props.color} href='https://www.linkedin.com/in/osama-hafez/' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-lg mr-md-5 mr-3 fa-2x"> </i>
            </a>

            <a className={props.color} href="mailto:eng.osama.m.hafez@gmail.com" target='https://www.google.com'>
                <i className="fas fa-envelope-square fa-lg mr-md-5 mr-3 fa-2x"> </i>
            </a>

            <a className={props.color} href='https://github.com/osamahafez' target='_blank' rel="noopener noreferrer">
                <i className="fab fa-github fa-lg fa-2x"> </i>
            </a>
        </div>
    )
}

export default SocialLinks;