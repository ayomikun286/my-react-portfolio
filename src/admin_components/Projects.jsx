import React, { useState,useEffect } from 'react'
import { getProjects } from "../data/ProjectsRoute.js";
const Projects = ({setSection}) => {

   const [projects, setProjects] = useState([]);
           useEffect(() => {
               const fetchProjects = async () => {
                   try {
                       const data = await getProjects();
       
                       setProjects(data);
                   } catch (error) {
                       console.error(error);
                   }
               };
       
               fetchProjects();
           }, []);
    return (
        <div className=' text-white w-full h-full'>

            <div className='flex justify-between mb-8'>
                <div className=''>
                    <h2 className='font-semibold text-xl'>All Projects</h2>
                    <small>Manage all your portfolio projects</small>
                </div>

                <button 
                onClick={()=> setSection("addProject")}
                className='bg-[#3B82F6] px-3 py-2 rounded'>
                    <p className='font-semibold '>Add Project</p>
                </button>
            </div>

            <div className='flex justify-between p-4'>
                <div className='flex gap-2'>
                    <button className='p-3 text-sm md:text-md font-semibold bg-[#3B82F6] rounded border border-[#1E293B]'>All <span>(12)</span></button>
                    <button className='p-3 font-semibold text-sm md:text-md  rounded border border-[#1E293B]'>Published <span>(12)</span></button>
                    <button className='p-3 font-semibold text-sm md:text-md  rounded border border-[#1E293B]'>Draft <span>(12)</span></button>
                </div>
                <div>
                    <select className='border p-3 border-[#1E293B] rounded text-[#F8FAFC]'>
                        <option>ALL Categories</option>
                    </select>
                </div>
            </div>

            <div className=' border border-[#1E293B] p-2 rounded-lg bg-[#0B1422] overflow-x-auto scrollbar-none '>
                <table className="w-full">
                    <thead className="border-b border-[#1E293B]">
                        <tr className="text-left text-sm text-gray-400">
                            <th className="p-4">Project</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Views</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-10 h-10 rounded object-cover"
                                        />

                                        <div>
                                            <p>{project.title}</p>
                                            <span>{project.type}</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <span>{project.role}</span>
                                </td>

                                <td>
                                    <span>{project.status}</span>
                                </td>

                                <td>
                                    {project.views}
                                </td>

                                <td>
                                    {/* edit / view / delete */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





        </div>
    )
}

export default Projects