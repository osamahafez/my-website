import React from 'react';
import './Skills.css';
import SkillItem from '../SkillItem/SkillItem';

const Skills = () => {
    return (
        <div id='skills' className='skills container-fluid px-5 py-4'>
            <h1 className="text-info text-center mb-3">Skills</h1>
            <div className="row justify-content-around">
                <div className="col-md-5">
                    <SkillItem skill='html' value='95' />
                    <SkillItem skill='css' value='90' />
                    <SkillItem skill='javascript' value='90' />
                    <SkillItem skill='jquery' value='80' />
                    <SkillItem skill='bootstrap' value='90' />
                    <SkillItem skill='php' value='75' />
                    <SkillItem skill='laravel' value='80' />
                    <SkillItem skill='ajax' value='80' />
                    <SkillItem skill='flexbox' value='60' />
                </div>
                <div className="col-md-5">
                    <SkillItem skill='mysql' value='80' />
                    <SkillItem skill='mongodb' value='80' />
                    <SkillItem skill='nodejs' value='85' />
                    <SkillItem skill='react' value='90' />
                    <SkillItem skill='react-native' value='80' />
                    <SkillItem skill='git' value='70' />
                    <SkillItem skill='c++' value='80' />
                    <SkillItem skill='java' value='55' />
                    <SkillItem skill='python' value='70' />
                </div>
            </div>
        </div>
    )
}

export default Skills;