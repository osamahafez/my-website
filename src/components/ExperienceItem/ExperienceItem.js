import React from 'react';
import './ExperieceItem.css';
import Aux from '../../hoc/_Aux';

const ExperienceItem = (props) => {
    return (
        <Aux>
            <div className='col-md-8 mb-4'>
                <h3><i className='fas fa-briefcase'></i> { props.jobTitle }</h3>
                <p className='lead'>{ props.company }</p>
                <p className='text-muted font-italic'>{ props.date }</p>
                <p className='achievements'>Achievements:</p>
                <ul className='ulAchievements'>{ props.achievements }</ul>
            </div>
        </Aux>
    );
};

export default ExperienceItem;
