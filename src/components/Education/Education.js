import React from 'react';
import School from '../../images/school.jpg';
import Collage from '../../images/collage.jpg';

const Education = () => {
    return (
        <div className="container-fluid bg-light px-5 py-4">
            <h2 className="text-info text-center mb-3">Education</h2>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5">
                    <img src={School} alt="school" className='rounded' style={{width: '100%', height: '280px', border:'2px solid purple'}} />
                </div>
                <div className="col-md-5">
                    <p className="lead">
                        Started school in september 2000. I studied alot of useful 
                        subjects like arabic, english, french, pure mathematics, applied mathematics, physics, 
                        chemistry, biology, history, geography and philosophy. In august 2013 I started the general 
                        secondary year and finished in june 2014 with a score of 97.2% and joined the faculty of 
                        engineering in Ain Shams university.
                    </p>
                </div>

                <div className="col-md-5 mt-5">
                    <p className="lead">
                        In september 2014 I joined faculty of engineering Ain Shams univeristy chose electrical 
                        engineering as a major and computer engineering as a minor when I discoverd that programming 
                        is my passion. In 2016 I started to notice web programming and I fell in love with it and 
                        decided that this will be my career. In 2019 I graduated with a grade of good and excellecnt 
                        for the graduation project which was a web based project.
                    </p>
                </div>
                <div className="col-md-5 mt-5">
                    <img src={Collage} alt="collage" className='rounded' style={{width: '100%', height: '280px', border:'2px solid purple'}} />
                </div>
            </div>
        </div>
    );
}

export default Education;