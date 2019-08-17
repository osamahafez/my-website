import React from 'react'
import './Experience.css';
import LaptopExp from '../../images/laptop-experience.jpg';

const Experience = (props) => {
    return (
        <div>
            <div id='experience' className="experience container-fluid px-5 py-4">
            <h1 className="text-primary text-center mb-3">Experience</h1>
                <div className="row align-items-center">
                    {/* Start Experience with laptop pic */}
                    <div className="col-md-8">
                        <h3><i className="fas fa-briefcase"></i> Laravel Developer Intern</h3>
                        <p className="lead">Provision-grp</p>
                        <p className='text-muted font-italic'>Oct 2018 - Dec 2018</p>
                        <p className='achievements'>Achievements:</p>
                        <ul className='ulAchievements'>
                            <li>Learnt about security, web services, multiple access and translation</li>
                            <li>Worked on complex applications</li>
                            <li>Developed websites for real clients</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <img src={LaptopExp} alt="laptop" className='laptop-exp' />
                    </div>
                    {/* End Experience with laptop pic */}
                </div>
            </div>
        </div>
    )
}

export default Experience;