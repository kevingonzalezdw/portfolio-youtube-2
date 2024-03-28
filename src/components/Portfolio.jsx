import React from 'react'
import Section from './common/Section.jsx'
import {FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.jpg'
import p6 from './assets/p6.jpg'


const Portfolio = () => {

  const project = [
    {
      id: 1,
      image : p1,
      title : "Best App",
      github : "https://github.com/nodesjs/node",
      demo : "https://nodejs.org/en/"
    },
    {
      id: 2,
      image : p2,
      title : "Age of Empires",
      github : "https://github.com/nodesjs/node",
      demo : "https://nodejs.org/en/"
    },
    {
      id: 3,
      image : p3,
      title : "Best App",
      github : "https://github.com/nodesjs/node",
      demo : "https://nodejs.org/en/"
    },
    {
      id: 4,
      image : p4,
      title : "Age of Empires",
      github : "https://github.com/nodesjs/node",
      demo : "https://nodejs.org/en/"
    },
    {
      id: 4,
      image : p5,
      title : "Best App",
      github : "https://github.com/nodesjs/node",
      demo : "https://nodejs.org/en/"
    },
    {
      id: 6,
      image : p6,
      title : "Age of Empires",
      github : "https://github.com/nodesjs/node",
      demo : "https://nodejs.org/en/"
    },

  ]

  return (
    <Section className='' title='Portfolio' subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore deserunt quaerat ullam itaque magnam laborum similique vitae rerum corporis alias!'> 
       <div className="grid justify-center gap-8 py-10 lg:grid-cols-2 max-w-4xl mx-auto">
        {project.map(({ id, image, title, github, demo }) => (
          <div key={id} className='max-w-lg flex shadow-lg shadow-gray-200 overflow-hidden rounded-xl'>
            <img src={image} alt={title} className='w-2/3' />
            <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
              <h2 className='text-dark dark:text-white'>{title}</h2>
              <a className='text-2xl cursor-pointer duration-150 hover:scale-110 text-dark dark:text-white' href={github} target="_blank" rel='nooper noreferrer'><FaGithub /></a>
              <a className='text-2xl cursor-pointer duration-150 hover:scale-110 text-dark dark:text-white' href={demo} target="_blank" rel='nooper noreferrer'><FaExternalLinkSquareAlt /></a>
            </div>
          </div>
        ))}
       </div>
    </Section>
  )
}

export default Portfolio