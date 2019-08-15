import React from 'react';
import './SkillItem.css';

const SkillItem = (props) => {
    return (
        <div className='container-fluid'>
            <div className="row align-items-center">
                <div className="col-md-3">
                    <h6>{props.skill}</h6>
                </div>
                <div className="col-md-9">
                    <div className='progress'>
                        <div
                            className='progress-bar progress-bar-striped bg-primary'
                            role='progressbar'
                            style={{width: props.value+'%'}}
                            aria-valuenow={props.value}
                            aria-valuemin='0'
                            aria-valuemax='100'
                            >
                            {props.value}%
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SkillItem;
