import React from 'react'
import { projects } from "../data/Projects.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = ({ onViewDetails,viewAllProject }) => {
  const featuredProjects = projects.filter(
    project => project.featured
  );

  return (
    <section className="flex flex-col items-center pt-8 md:pt-0 justify-center z-50 pb-3">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">

        {featuredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={onViewDetails}
          />
        ))}

      </div>
      <div>
        <button onClick={()=> viewAllProject(true)}  className="mt-6 px-5 py-3 rounded border border-white bg-[#030B1E] text-white font-semibold hover:bg-sky-400 transition">View more project</button>
      </div>
    </section>
  );
}

export default Projects