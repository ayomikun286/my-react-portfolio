import React from 'react'
import { useState, useEffect } from 'react';
import { getProjects } from "../data/ProjectsRoute.js";
import ProjectCard from "./ProjectCard.jsx";
import Waiting from './Waiting.jsx';
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
      {/* {projects.length > 0 ? (
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
  <div className='w-full h-90 bg-black/50 backdrop-blur-[10px] mt-15 rounded-xl  p-3 border border-sky-400 flex flex-col justify-center items-center'>
          <h1 className='text-xl font-bold text-sky-400 '>No project found</h1>
        </div>
)}

      
      <div>
        <button  disabled={projects.length === 0} onClick={()=> viewAllProject(true)}  className="mt-6 px-5 py-3 rounded border border-white bg-[#030B1E] text-white font-semibold hover:bg-sky-400 transition">View more project</button>
      </div>

      {loading && (
        <Waiting />
      )} */}

      {loading ? (
        <Waiting />
      ) : (<div className='w-full '>
       { projects.length > 0 ? (
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
        <div>No projects found</div>
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