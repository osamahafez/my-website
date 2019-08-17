import React from 'react';
import './Activites.css';
import IDT from '../../images/IDT.jpg'
import ACES from '../../images/ACES.jpg'
import ACM from '../../images/ACM.jpg'

const Activites = () => {
    return (
        <div id='activites' className='activites container-fluid px-5 py-4'>
            <h1 className="text-primary text-center mb-3">Extracurricular Activities</h1>
            <div id="activitesCarousel" className="carousel slide m-auto activity-slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={IDT} alt="IDT" />
                        <div className="carousel-caption">
                            <div className="cap-background">
                                <h5>IDT 2015</h5>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ACES} alt="ACES" />
                        <div className="carousel-caption">
                            <div className="cap-background">
                                <h5>ACES 2016</h5>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={ACM} alt="ACM" />
                        <div className="carousel-caption">
                            <div className="cap-background">
                                <h5>ACM 2017</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#activitesCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#activitesCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className='activity-desc'>
                <h5 className='text-primary'>IDT 2015</h5>
                <p>
                    My first year in collage I joined IDT(Industrial Development Team) which is a student 
                    activity that aims to make Egypt a great industrial country. I joined as a marketing member
                    with a team of 5 and learnt how to brainstrom and generate ideas for the marketing 
                    campaigns. 
                </p>           
                <hr/>
                <h5 className='text-primary'>ACES 2016</h5>
                <p>
                    The second year I joined another student activity which is ACES(Annual Conference for Engineering Students). 
                    It provides courses and internships for students. I was a human resourses member with a team
                    of 15, my job description was to interview and evaluate ACES's participants and coordinate trainings with
                    companies for senior students.
                </p>
                <hr/>
                <h5 className='text-primary'>ACM 2017</h5>
                <p>
                    After taking computer engineering as a minor I decided to look for more programming related
                    opportunities so I participated in the ACM(Association for Computing Machinery) which is a 
                    programming problem solving contest. As a result my coding skills became much better and 
                    learnt how to be patient if I faced any problem during coding and make the effort to solve it.
                </p>


            </div>
        </div>
    )
}

export default Activites;