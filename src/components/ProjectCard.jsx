function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="bg-[#0F172A] rounded-2xl overflow-hidden border border-slate-700 hover:border-sky-500 transition-all duration-300">

      {/* Thumbnail */}
      <div className="overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-55 object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-2">

        {/* Category */}
        <span className="text-sky-400 text-sm font-medium">
          {project.role}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mt-2">
          {project.title}
        </h3>

        {/* Overview */}
        <p className="text-gray-400 mt-3 leading-7">
          {project.overview}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm bg-slate-800 text-sky-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => onViewDetails(project)}
          className="mt-6 px-5 py-3 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition"
        >
          View Case Study
        </button>

      </div>
    </article>
  );
}

export default ProjectCard;