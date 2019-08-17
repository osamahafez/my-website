import React from 'react'
import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import larapreango from '../../images/larapreango.png';
import social_network from '../../images/social_network.png';
import hospital from '../../images/hospital.png';
import fanny_pack from '../../images/fanny_pack.png';
import givantk from '../../images/givantk.png';
import todolist from '../../images/todolist.png';

const Projects = (props) => {
    return (
        <div id='projects' className='projects container-fluid px-5 py-3'>
                <h1 className="text-primary text-center mb-3">Projects</h1>

                <div className="card-deck mb-4">
                    <ProjectItem image={social_network} imageName='social_network' title='Developer Network' url='https://devnetwork-2019.herokuapp.com/'>
                        A social network website for developers only. Developers can sign in, 
                        create their portofolio and connect with one another.
                    </ProjectItem> 

                    <ProjectItem image={fanny_pack} imageName='fanny_pack' title='React Utility Belt' url='https://react-fanny-pack.firebaseapp.com/'>
                        A react app that provides various tools and widgets like Weather Forecasting, global 
                        clocks, a calculator etc...
                    </ProjectItem> 

                    <ProjectItem image={larapreango} imageName='larapreango' title='Blog Website' url='https://github.com/osamahafez/Larapreango-blog-laravel5.7'>
                        A technical blog website using laravel where users can write a blog and comment 
                        and like other blogs. 
                    </ProjectItem> 
                </div>

                <div className="card-deck mb-2">
                    <ProjectItem image={givantk} imageName='givantk' title='Crowdsourcing Mobile App' url='https://play.google.com/store/apps/details?id=com.team.givantk'>
                        A crowdsourcing mobile app that allows users to provide everyday services for one 
                        other and get rewarding points for helping a service asker. 
                    </ProjectItem>
                    
                    <ProjectItem image={hospital} imageName='hospital' title='Local Hospital' url='https://github.com/osamahafez/local_hospital-php7'>
                        A local hospital website using raw php that holds records for all doctors, patients 
                        and allow users to make an appointment with a specific doctor.
                    </ProjectItem> 
                    
                    <ProjectItem image={todolist} imageName='todolist' title='To-Do List' url='https://github.com/osamahafez/to-do-list-nodejs-expressjs'>
                        A very simple to-do list where you add items, check them upon completion or delete
                        them completely.
                    </ProjectItem>
                </div>
        </div>
    )
}

export default Projects;