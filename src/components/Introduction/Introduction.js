import React from 'react';
import './Introduction.css';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../layout/Navbar/Navbar';
import SocialLinks from '../SocialLinks/SocialLinks';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';


const Introduction = (props) => {
    return (
        <div id='introduction' className='intro'>
            <div className='dark-overlay'>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 text-center mt-3 mb-5 intro-content">
                            <Navbar />
                            <h1 className="display-2 text-light" style={{paddingTop:'30px'}}>Hello, I'm Osama.</h1>
                            <h1 className="display-4 text-light">A full stack developer</h1>
                            <SocialLinks color='text-light' mb='mb-5' mt='mt-5' />

                                <VisibilitySensor partialVisibility>
                                    {({isVisible}) => 
                                        
                                        <Spring  
                                            to={{
                                                opacity: isVisible ? 1 : 0, 
                                                transform: isVisible ? "translateY(0px)" : "translateY(-200px)"
                                            }} 
                                            delay={700}
                                        >
                                            {props => (
                                                <div style={props}>
                                                    {/* <Link smooth className="btn btn-danger btn-lg work-btn" to="/projects#projects">View My Work <i className="fas fa-arrow-alt-circle-down"></i></Link> */}
                                                    <Link smooth className="button_2" to="/projects#projects">View My Work</Link>
                                                </div>
                                            )}
                                        </Spring>

                                    }
                                </VisibilitySensor>

                               
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
        )     
}

export default Introduction;