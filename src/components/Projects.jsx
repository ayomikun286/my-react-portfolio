import React from 'react'
import { projects } from "../data/Projects.js";
import ProjectCard from "./ProjectCard.jsx";

const Projects = ({ onViewDetails }) => {
  const featuredProjects = projects.filter(
    project => project.featured
  );

  return (
    <section className="flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">

        {featuredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={onViewDetails}
          />
        ))}

      </div>
    </section>
  );
}

export default Projects