import React from 'react';
import './Introduction.css';
import profileImg from '../../images/osama_pic.png';
import Navbar from '../layout/Navbar/Navbar';
import SocialLinks from '../SocialLinks/SocialLinks';

const Introduction = (props) => {
    return (
        <div className='intro'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center mt-3 mb-5">
                        <Navbar />
                        <img src={profileImg} alt="profile_pic" className='profile-img rounded-circle mx-auto d-block' />
                        <h1 className="display-2 text-light">Hello, I'm Osama</h1>
                        <h1 className="display-4 text-light">I'm a full stack developer</h1>
                        <SocialLinks color='text-info' mb='mb-5' mt='mt-5' />
                        <button className='btn btn-primary btn-lg'>View Projects</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Introduction;