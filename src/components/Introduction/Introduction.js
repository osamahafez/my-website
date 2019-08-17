import React from 'react';
import './Introduction.css';
import { HashLink as Link } from 'react-router-hash-link';
// import profileImg from '../../images/osama_pic.png';
import Navbar from '../layout/Navbar/Navbar';
import SocialLinks from '../SocialLinks/SocialLinks';

const Introduction = (props) => {
    return (
        <div id='introduction' className='intro'>
            <div className='dark-overlay'>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center mt-3 mb-5 intro-content">
                            <Navbar />
                            {/* <img src={profileImg} alt="profile_pic" className='profile-img rounded-circle mx-auto d-block' /> */}
                            <h1 className="display-2 text-light" style={{paddingTop:'30px'}}>Hello, I'm Osama.</h1>
                            <h1 className="display-4 text-light">A full stack developer</h1>
                            <SocialLinks color='text-info' mb='mb-5' mt='mt-5' />
                            <Link smooth className="btn btn-primary btn-lg work-btn" to="/projects#projects">My Work <i className="fas fa-arrow-alt-circle-down"></i></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )     
}

export default Introduction;