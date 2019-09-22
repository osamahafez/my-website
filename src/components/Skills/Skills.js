import React from 'react';
import './Skills.css';
import SkillItem from '../SkillItem/SkillItem';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';

const Skills = (props) => {
    return (
        <div id='skills' className='skills container-fluid px-5 py-4'>
            <h1 className="text-primary text-center mb-3">Skills</h1>
            <div className="row justify-content-around">
                <div className="col-md-5">
                
                    <VisibilitySensor partialVisibility>
                        {({isVisible}) =>
                            <div>
                                <Spring from={{number:0}} to={{number: isVisible ? 95 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='HTML' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 95 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='CSS' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Javascript' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='jQuery' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Bootstrap' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 75 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='PHP' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Laravel' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Ajax' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='SASS' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>
                            </div>
                        }
                    </VisibilitySensor>

                </div>
                <div className="col-md-5">

                    <VisibilitySensor partialVisibility>
                        {({isVisible}) =>
                            <div>
                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='MySQL' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='MongoDB' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 85 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='NodeJs' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='ReactJs' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='React-Native' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Git' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='C++' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 55 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Java' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 70 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Python' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>
                            </div>
                        }
                    </VisibilitySensor>

                </div>
            </div>
        </div>
    )
}

export default Skills;