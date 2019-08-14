import React from 'react'
import './Experience.css';

const Experience = () => {
    return (
        <div>
            <div className="experience container-fluid bg-light px-5 py-4">
            <h1 className="text-primary text-center mb-3">Experience</h1>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Laravel Developer Intern</h3>
                        <p className="lead">Provision-grp</p>
                        <p className='text-muted font-italic'>Oct 2018 - Dec 2018</p>
                        <p>Achievements</p>
                        <ul>
                            <li>Learnt about security, web services, multiple access and translation</li>
                            <li>Worked on complex applications</li>
                            <li>Developed websites for real clients</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;