import React from 'react'
import { useState, useEffect } from 'react';
import { getProjects } from "../data/ProjectsRoute.js";
import ProjectCard from "./ProjectCard.jsx";
import Waiting from './Waiting.jsx';
import WaitingCard from "./waiting-card.jsx"
const Projects = ({ onViewDetails, viewAllProject }) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();

        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProjects = projects.filter(
    project => project.featured
  );


  return (
    <section className="flex flex-col items-center pt-8 md:pt-0 justify-center z-50 pb-3">

      {loading ? (
       <div className='relative min-h-100 flex justify-center items-center '>
         <WaitingCard />
       </div>
      ) : (<div className='w-full animate-slide-in-left  '>
       {projects.length > 0 ? (
  <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
    {featuredProjects.map(project => (
      <ProjectCard
        key={project.id}
        project={project}
        onViewDetails={onViewDetails}
      />
    ))}
  </div>
) : (
  <div className="w-full max-w-full flex justify-center py-16">
    <div className="w-full max-w-md text-center border border-white/10 bg-[#030B1E] rounded-2xl p-10 shadow-xl">
      
      {/* Icon */}
      <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-sky-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 7h5l2 2h11v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
          />
        </svg>
      </div>

      {/* Heading */}
      <h3 className="text-xl font-bold text-white mb-2">
        No Projects Yet
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        There are currently no projects available to display.
        Check back later for new work.
      </p>

    </div>
  </div>
)}

      <div className='flex justify-center'>
        <button disabled={projects.length === 0} onClick={() => viewAllProject(true)} className="mt-6 px-5 py-3 rounded border border-white bg-[#030B1E] text-white font-semibold hover:bg-sky-400 transition">View more project</button>
      </div>
      </div>)
      
      
      }

     

 

    </section>
  );
}

export default Projects