import React from 'react'
import { projects } from "../data/Projects.js";
import ProjectCard from "./ProjectCard.jsx";

const ProjectGallery = ({ closeAllProject, onViewDetails }) => {

  return (
    <div className='fixed top-0 left-0 w-screen h-screen p-5 flex bg-black/70 justify-center items-center'>
      <div className='fadeInCard w-full max-w-6xl bg-[#030B1E] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col max-h-[89vh] z-50'>
        <div className='flex justify-between items-center mb-4 flex-shrink-0'>
          <h1 className="text-lg md:text-3xl font-black tracking-tight text-white mb-2 border-b-4 border-sky-400 pb-1 w-fit uppercase">
            Project Gallery
          </h1>
          <button
            className='border border-white/20 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors'
            onClick={() => closeAllProject(false)}
          >
            <img src="xmark.png" alt="Close" width={14} />
          </button>
        </div>

        <div className='overflow-y-auto  scrollbar-none flex-1 p-2 md:p-3 flex gap-10 flex-wrap justify-center items-center'>
          {projects.map((project) => (
            <div className='max-w-full md:max-w-md'>
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}

export default ProjectGallery