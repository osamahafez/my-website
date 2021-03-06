import React from 'react';
import './Introduction.css';
import Navbar from '../layout/Navbar/Navbar';
import SocialLinks from '../SocialLinks/SocialLinks';
import SkillTicker from '../SkillTicker/SkillTicker';

const Introduction = (props) => {
    return (
        <div id='introduction' className='intro'>
            <div className='dark-overlay'>

                <div className="container-fluid">
                    <div className="row">
                        <div id="intro-content" className="col-md-12 text-center mt-3 mb-5">
                            <Navbar />
                            <h1 className="display-5 text-light my-name">Hello, I'm Osama.</h1>
                            <h1 className="display-3 text-light my-job">A full stack developer</h1>
                            <div className="skill-ticker mt-4"><SkillTicker /></div>
                            <SocialLinks color='text-light' mb='mb-5' mt='mt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )     
}

export default Introduction;