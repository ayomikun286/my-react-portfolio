import React from 'react'

const ProjectDetails = ({ project, onClose }) => {
  return (
    <div className='fixed flex justify-center items-center bg-black/50 inset-0 w-screen h-screen top-0 left-0 p-4 z-50'>
      <div className="w-full max-w-5xl h-[90vh] bg-[#0F172A] rounded-3xl border border-white/10 shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
          <div>
            <h2 className="text-md md:text-3xl font-bold text-white">
             {project.title}
            </h2>
            <p className="text-slate-400 mt-1">
              {project.role}
            </p>
          </div>

          <button className="text-slate-400 hover:text-white text-2xl" onClick={()=> onClose()}>
            ✕
          </button>
        </div>

        {/* Content */}
        <div className=" h-[calc(90vh-88px)] p-8 space-y-10 overflow-y-auto  scrollbar-none">

          {/* Hero */}
          <img
             src={project.thumbnail}
            alt={project.title}
            loading='lazy'
            className="w-full h-72 object-cover rounded-2xl"
          />

          {/* Stack */}
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech)=>(
              <span  key={tech} className="px-4 py-2 rounded-full bg-sky-500/20 text-sky-300">
              {tech}
            </span>

            ))}


          </div>

          {/* Overview */}
          <section>

            <h3 className="text-xl font-semibold text-white mb-3">
              Overview
            </h3>

            <p className="text-slate-300 leading-8">
              {project.overview}
            </p>

          </section>

          {/* Features */}
          <section>

            <h3 className="text-xl font-semibold text-white mb-4">
              Key Features
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {project.features.map((feature)=>(
                <div key={feature} className="bg-slate-800 flex items-center gap-2 rounded-xl p-4">
                <span className='bg-sky-400 w-4 h-4 rounded-full block'></span> {feature}
              </div>
              ))}

            </div>

          </section>

          {/* Challenge */}
          <section>

            <h3 className="text-xl font-semibold text-white mb-3">
              Challenge
            </h3>

            <div className="bg-slate-800 rounded-2xl p-6">

              {project.challenges.map((challenge)=>(
                 <p className="text-slate-300">
                {challenge}
              </p>
              ))}

             

            </div>

          </section>

          {/* Lesson */}
          <section>

            <h3 className="text-xl font-semibold text-white mb-3">
              What I Learned
            </h3>

            <div className="bg-slate-800 rounded-2xl p-6">
              {project.learned.map((learn)=>(
                  <p className="text-slate-300">
                {learn}
              </p>
              ))}
              

            </div>

          </section>

          {/* Gallery */}
          <section>

            <h3 className="text-xl font-semibold text-white mb-4">
              Gallery
            </h3>

            <div className="grid grid-cols-4 gap-4">
              {project.images.map((image,index)=>(
                 <img
                key={index}
                alt={project.title + index}
                src={image}
                loading='lazy'
                className="rounded-xl cursor-pointer hover:scale-105 transition"
              />
              ))}

            </div>

          </section>

          {/* Buttons */}
          <div className="flex gap-4 pt-4 pb-10">

            <a
              href={project.live}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition"
            >
              Live Demo
            </a>

            <a
              href={project.github}
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProjectDetails