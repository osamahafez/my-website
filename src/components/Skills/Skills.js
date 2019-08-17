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
                                            <SkillItem skill='html' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='css' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='javascrip' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='jquery' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='bootstrap' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 75 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='php' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='laravel' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='ajax' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 60 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='flexbox' value={props.number.toFixed()} />
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
                                            <SkillItem skill='mysql' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='mongodb' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 85 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='nodejs' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='react' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='react-native' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 70 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='git' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='c++' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 55 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='java' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 70 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='python' value={props.number.toFixed()} />
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