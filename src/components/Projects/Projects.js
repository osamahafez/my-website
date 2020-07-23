import React from 'react'
import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import larapreango from '../../images/larapreango.png';
import social_network from '../../images/social_network.png';
import hospital from '../../images/hospital.png';
import smartLink from '../../images/smart-link.png';
import givantk from '../../images/givantk.png';
import School from '../../images/school-admin-panel.png';

const Projects = (props) => {
    return (
        <div id='projects' className='projects container-fluid px-5 py-3'>
                <h1 className="text-primary text-center mb-3">Personal Projects</h1>

                <div className="card-deck mb-4">
                    <ProjectItem image={social_network} imageName='social_network' title='Developer Network' url='https://devnetwork-2019.herokuapp.com/'>
                        A social network website for developers only. Developers can sign in, 
                        create their portofolio and connect with one another.
                    </ProjectItem> 

                    <ProjectItem image={smartLink} imageName='smart-link' title='SmartLink Website' url='https://smart-link-281fb.firebaseapp.com/'>
                        A react single page app for a software company and 
                        designed with pure html and css and the mobile view is still in progress.
                    </ProjectItem> 

                    <ProjectItem image={givantk} imageName='givantk' title='Crowdsourcing Mobile App' url='https://play.google.com/store/apps/details?id=com.team.givantk'>
                        A crowdsourcing mobile app that allows users to provide everyday services for one 
                        other and get rewarding points for helping a service asker. 
                    </ProjectItem>
                </div>

                <div className="card-deck mb-2">
                    <ProjectItem image={larapreango} imageName='larapreango' title='Blog Website' url='https://larapreango.000webhostapp.com'>
                        A technical blog website using laravel where users can write a blog and comment 
                        and like other blogs. 
                    </ProjectItem>
                    
                    <ProjectItem image={School} imageName='school-admin-panel' title='School Admin Panel' url='https://school-admin-panel.herokuapp.com/'>
                        An admin panel where you add, update, view and delete students. 
                        Also with a search feature and an informative charts.
                    </ProjectItem>

                    <ProjectItem image={hospital} imageName='hospital' title='Local Hospital' url='https://github.com/osamahafez/local_hospital-php7'>
                        A local hospital website using raw php that holds records for all doctors, patients 
                        and allow users to make an appointment with a specific doctor.
                    </ProjectItem> 
                </div>
        </div>
    )
}

export default Projects;