import React from 'react';
import './Experience.css';
import Aux from '../../hoc/_Aux';
import ExperienceItem from '../ExperienceItem/ExperienceItem';

const Experience = () => {
   
    return (
        <div>
            <div id='experience' className='experience container-fluid px-5 py-4'>
                <h1 className='text-primary text-center mb-3'>Experience</h1>
                <div className='row align-items-center'>
                    
                    <ExperienceItem
                        jobTitle='Full Stack Developer'
                        company='Saudi Arabia (Remotely)'
                        date='Oct 2019 - Present'
                        achievements={
                            <Aux>
                                <li>Developed features, fixed bugs and refactored parts of the code for both frontend and backend.</li>
                                <li>Used Laravel for backend and Nuxt.js for frontend.</li>
                                <li>Migrated the app from Laravel to Nest.js.</li>
                                <li>Implemented graphql into the app.</li>
                                <li>Acted as server administrator and used AWS tools like EC2, S3, RDS, SES, SNS, Route53, Cloudfront and Lightsail.</li>
                                <li>Applied e2e testing to frontend app using Nightwatch.js.</li>
                                <li>Interacted with analytical and marketing tools like Google analytics and Hotjar.</li>
                            </Aux>
                        }
                    />

                    <ExperienceItem
                        jobTitle='Laravel Developer Intern'
                        company='Provision-grp'
                        date='Oct 2018 - Dec 2018'
                        achievements={
                            <Aux>
                                <li>Learnt about security, web services, multiple access and translation.</li>
                                <li>Worked on complex applications.</li>
                                <li>Developed websites for real clients.</li>
                            </Aux>
                        }
                    />

                </div>
            </div>
        </div>
    );
};

export default Experience;
