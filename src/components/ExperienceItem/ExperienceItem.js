import React from 'react';
import './ExperieceItem.css';
import LaptopExp from '../../images/laptop-experience.jpg';
import Aux from '../../hoc/_Aux';

const ExperienceItem = (props) => {
    return (
        <Aux>
            <div className='col-md-8'>
                <h3><i className='fas fa-briefcase'></i> { props.jobTitle }</h3>
                <p className='lead'>{ props.company }</p>
                <p className='text-muted font-italic'>{ props.date }</p>
                <p className='achievements'>Achievements:</p>
                <ul className='ulAchievements'>{ props.achievements }</ul>
            </div>
            {/* <div className='col-md-4'>
                <img src={LaptopExp} alt='laptop' className='laptop-exp' />
            </div> */}
        </Aux>
    );
};

export default ExperienceItem;
