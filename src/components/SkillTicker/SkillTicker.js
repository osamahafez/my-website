import React from 'react'
import Ticker from 'react-ticker'
import './SkillTicker.css'
import laravel from '../../images/skills-svg/laravel.svg'; 
import nestjs from '../../images/skills-svg/nestjs.svg'; 
import aws from '../../images/skills-svg/aws.svg'; 
import bootstrap from '../../images/skills-svg/bootstrap.svg'; 
import git from '../../images/skills-svg/git.svg'; 
import graphql from '../../images/skills-svg/graphql.svg'; 
import html5 from '../../images/skills-svg/html5.svg'; 
import javascript from '../../images/skills-svg/javascript.svg'; 
import mongodb from '../../images/skills-svg/mongodb.svg'; 
import mysql from '../../images/skills-svg/mysql.svg'; 
import nginx from '../../images/skills-svg/nginx.svg'; 
import nodejs from '../../images/skills-svg/node-dot-js.svg'; 
import php from '../../images/skills-svg/php.svg'; 
import react from '../../images/skills-svg/react.svg'; 
import sass from '../../images/skills-svg/sass.svg'; 
import nuxtjs from '../../images/skills-svg/nuxtjs.svg'; 
import tailwindcss from '../../images/skills-svg/tailwindcss.svg'; 
import vuejs from '../../images/skills-svg/vue-dot-js.svg'; 
import typescript from '../../images/skills-svg/typescript.svg'; 
import ubuntu from '../../images/skills-svg/ubuntu.svg'; 
import css3 from '../../images/skills-svg/css3.svg'; 


const SkillTicker = () => (
    <Ticker
            direction="toRight"
            speed={5}
            >
          {(index) => (
              <div className="skill-ticker-container">
                <img src={laravel} alt="laravel" />
                <img src={nestjs} alt="nestjs" />
                <img src={aws} alt="aws" />
                <img src={git} alt="git" />
                <img src={mongodb} alt="mongodb" />
                <img src={graphql} alt="graphql" />
                <img src={nginx} alt="nginx" />
                <img src={nuxtjs} alt="nuxtjs" />
                <img src={react} alt="react" />
                <img src={vuejs} alt="vuejs" />
                <img src={mysql} alt="mysql" />
                <img src={nodejs} alt="nodejs" />
                <img src={php} alt="php" />
                <img src={bootstrap} alt="bootstrap" />
                <img src={tailwindcss} alt="tailwindcss" />
                <img src={sass} alt="sass" />
                <img src={typescript} alt="typescript" />
                <img src={javascript} alt="javascript" />
                <img src={css3} alt="css3" />
                <img src={html5} alt="html5" />
                <img src={ubuntu} alt="ubuntu" />
              </div>
              )}
    </Ticker>
)
 
export default SkillTicker