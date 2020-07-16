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
                                 <Spring from={{number:0}} to={{number: isVisible ? 85 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Nuxt.js' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 85 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Vue.js' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>
                                 <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='React.js' value={props.number.toFixed()} />
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

                                <Spring from={{number:0}} to={{number: isVisible ? 70 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Nightwatch.js' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Tailwind css' value={props.number.toFixed()} />
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

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Sass' value={props.number.toFixed()} />
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

                                <Spring from={{number:0}} to={{number: isVisible ? 95 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Css' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 95 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Html' value={props.number.toFixed()} />
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

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Nest.js' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Laravel' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 70 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Nginx' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Graphql' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
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

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Typescript' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Node.js' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 70 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Php' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 90 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Git' value={props.number.toFixed()} />
                                        </div>
                                    )}
                                </Spring>

                                <Spring from={{number:0}} to={{number: isVisible ? 80 : 0}} config={{duration:300}}>
                                    {props=> (
                                        <div style={props}>
                                            <SkillItem skill='Linux' value={props.number.toFixed()} />
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