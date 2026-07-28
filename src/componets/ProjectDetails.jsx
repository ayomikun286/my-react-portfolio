import React from 'react'

const ProjectDetails = ({project, onClose}) => {
  return (
    <div className='fixed bg-black/50 w-screen h-screen top-0 left-0 p-4'>
            <p>{project.title}</p>
    </div>
  )
}

export default ProjectDetails