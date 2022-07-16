import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectItem = ({title, description, tech, projectUrl, type}) => {
  return (
    <div className='group text-center p-6 max-w-lg h-full rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-[#9d00ffb4]'>
    <a target="_blank" href={projectUrl}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
    </a>
    <p className="mb-3 font-normal text-purple-600 group-hover:text-white">{tech}</p>
    <p className="mb-3 font-normal">{description}</p>
    
    <button className=' group-hover:bg-white group-hover:text-purple-600' >
        <a className='inline-flex items-center'  target="_blank" href={projectUrl}>View Project
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
    </button>
</div>
  )
}

export default ProjectItem