import React, { useState, useEffect } from 'react'
import {
    FaEye,
    FaEdit,
    FaTrash
} from "react-icons/fa";
import { API_URL } from '../config.js';
import { getProjects } from "../data/ProjectsRoute.js";
const Projects = ({ setSection }) => {

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



    const handleDelete = async (projectId) => {
        alert('working')
        try {
            const res = await fetch(`${API_URL}/projects/${projectId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!res.ok) {
                throw new Error("Failed to delete project");
            }

            // Remove deleted project from UI
            alert('deleted')
            setProjects((prevProjects) =>
                prevProjects.filter((project) => project._id !== projectId)
            );

        } catch (err) {
            console.error("Delete error:", err);
        }
    };
    return (
        <div className=' text-white w-full h-full'>

            <div className='flex justify-between mb-8'>
                <div className=''>
                    <h2 className='font-semibold text-xl'>All Projects</h2>
                    <small>Manage all your portfolio projects</small>
                </div>

                <button
                    onClick={() => setSection("addProject")}
                    className='bg-[#3B82F6] text-sm md:text-lg  p-2 md:px-3 md:py-2 rounded'>
                    <p className='font-semibold '>Add Project</p>
                </button>
            </div>

            <div className='flex justify-between p-4'>
                <div className='flex gap-2 '>
                    <button className='p-3 text-sm md:text-md font-semibold bg-[#3B82F6] rounded border border-[#1E293B]'>All <span>(12)</span></button>
                    <button className='p-3 font-semibold text-sm md:text-md  rounded border border-[#1E293B]'>Published <span>(12)</span></button>
                    <button className='p-3 font-semibold text-sm md:text-md  rounded border border-[#1E293B]'>Draft <span>(12)</span></button>
                </div>
                <div className='hidden md:block'>
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
                            <th className="p-4">Role</th>
                            <th className="p-4">Featured</th>
                            <th className="p-4">Completed</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map((project) => (
                            <tr
                                key={project._id}
                                className="border-b border-[#1E293B]/60 hover:bg-[#0B1422] transition"
                            >

                                {/* PROJECT */}
                                <td className="p-4">
                                    <div className="flex items-center gap-3">

                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-12 h-12 hidden md:block rounded-lg object-cover"
                                        />

                                        <div>
                                            <p className="text-white font-medium">
                                                {project.title}
                                            </p>

                                            <span className="text-xs text-gray-500">
                                                {project.stack?.slice(0, 2).join(" • ")}
                                            </span>
                                        </div>

                                    </div>
                                </td>

                                {/* ROLE */}
                                <td className="p-4">
                                    <span className="text-sm text-gray-300">
                                        {project.role}
                                    </span>
                                </td>

                                {/* FEATURED */}
                                <td className="p-4">
                                    <span
                                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${project.featured
                                            ? "bg-blue-500/10 text-blue-400"
                                            : "bg-gray-500/10 text-gray-400"
                                            }`}
                                    >
                                        {project.featured ? "Featured" : "Regular"}
                                    </span>
                                </td>

                                {/* COMPLETED */}
                                <td className="p-4">
                                    <span className="text-sm text-gray-300">
                                        {project.completed || "—"}
                                    </span>
                                </td>

                                {/* ACTIONS */}
                                <td className="p-4">
                                    <div className="flex items-center gap-2">

                                        {/* View */}
                                        <button
                                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition"
                                            title="View project"
                                        >
                                            <FaEye />
                                        </button>

                                        {/* Edit */}
                                        <button
                                            className="p-2 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 transition"
                                            title="Edit project"
                                        >
                                            <FaEdit />
                                        </button>

                                        {/* Delete */}
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            className="p-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition"
                                            title="Delete project"
                                        >
                                            <FaTrash />
                                        </button>

                                    </div>
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