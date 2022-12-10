import React from 'react';
import {motion} from 'framer-motion';
import AppWrapper from '../../Wrapper/AppWrapper';
import './Skills.scss';
import flutter from '../../assets/flutter.png';
import css from '../../assets/css.png';
import figma from '../../assets/figma.png';
import git from '../../assets/git.png';
import graphql from '../../assets/graphql.png';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import node from '../../assets/node.png';
import python from '../../assets/python.png';
import sass from '../../assets/sass.png';
import redux from '../../assets/redux.png';
import react from '../../assets/react.png';
import typescript from '../../assets/typescript.png';
import vue from '../../assets/vue.png'



export const Skills = () => {
  const skills=[
    {
      id:1,
      logo:flutter,
      title:"flutter"
    },
    {
      id:2,
      logo:javascript,
      title:"JavaScript"
    },
    {
      id:3,
      logo:css,
      title:"Css"
    },
    {
      id:4,
      logo:graphql,
      title:"GraphQL"

    },
    {
      id:5,
      logo:react,
      title:"React Js"

    },
    {
      id:6,
      logo:flutter,
      title:"MaterialUI"
    },
    {
      id:7,
      logo:html,
      title:"HTML5"
    },
    {
      id:8,
      logo:python,
      title:"Python"
    },
    {
      id:9,
      logo:typescript,
      title:"TypeScript"

    },
    {
      id:10,
      logo:redux,
      title:"Redux"

    },
    {
      id:11,
      logo:vue,
      title:"Vue"
    },
    {
      id:12,
      logo:node,
      title:"Node JS"
    },
    {
      id:13,
      logo:figma,
      title:"Figma"
    },
    {
      id:14,
      logo:git,
      title:"Git"

    },
    {
      id:15,
      logo:sass,
      title:"Sass"

    }
  ]

  const data =[{
    
    year:2020,
    exp:[
      {
        id:1,
        role:"Senior Web Developer",
        company:"Google"
      }
    ],
  },
  {
    year:2021,
    exp:[
      {
        id:2,
        role:"Senior WP Frontend Developer",
        company:"Apple"
      },
      {
        id:3,
        role:"Backend Developer",
        company:"Tesela"
      }
    ],
  },
    {
    year:2022,
    exp:[
      {
        id:4,
        role:"Mobile Developer",
        company:"LinkedIn"
      },
      {
        id:5,
        role:"UI/UX Designer",
        company:"Google"
      }
    ]
  }

  ]
  return (
    <div className='app__skills'>
      <h1>Skills & Experiences</h1>

      <div className='app__skills-container'>
        <motion.div className='app__skills-skill'>
          {
            skills.map((item, index)=>(
              <motion.div className='app__flex  app__skills-item'
              key={item.id}
              whileInView={{opacity:[0,1]}}
              transition={{duration:0.6}}
              >
                <div className='app__flex'
                style={{backgroundColor:'#acb36600'}}>
                  <img src={item.logo} alt={item.title}/>
                </div>
                <p className='p-text'>{item.title}</p>

              </motion.div>
             
            ))
          }

        </motion.div>
        <div className='app__skills-exp'>
          {
            data.map((experience, eindex)=>(
              <motion.div className='app__skills-exp-item' key={experience.year}>
                <div className='app__skills-exp-year'>
                  <p>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {
                    experience.exp.map((work,windex)=>(
                    <>
                      <div className='app__skills-work' key={work.id}>
                       <h4>{work.role}</h4>
                       <p>{work.company}</p>
                      </div>
                    </>  
                    ))
                  }

                </motion.div>

              </motion.div>
            ))
          }

        </div>

      </div>
    </div>
  )
}
export default  AppWrapper(Skills, 'skills')
