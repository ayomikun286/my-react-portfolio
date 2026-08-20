import React, { useState } from 'react'
import ProjectAnalyses from "../../admin_components/ProjectAnalyses.jsx";
import SideBar from "../../admin_components/SideBar.jsx"
import "./style.css";
import ADnavbar from "../../admin_components/ADnavbar.jsx";
import Landing_section from "../../admin_components/Landing.jsx";
import Add_Project from "../../admin_components/Add_Project.jsx";
import Projects from "../../admin_components/Projects.jsx"
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaLeaf,
  FaPlug,
  FaWind,
  FaArrowRight
} from "react-icons/fa";
import Add_testimonial from "../../admin_components/Add_testimonial.jsx";
import Testimonial from "../../admin_components/Testimonial.jsx"
const AdminDashboard = () => {
  const [Section, setSection] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex  overflow-hidden h-screen w-screen bg-[#050B14] '>
      <div className='side flex-0  md:flex-1'>
        <SideBar Section={Section} setSection={setSection} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className='main flex-1 md:flex-6 w-full  flex flex-col'>
        <ADnavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        {Section === "dashboard" && (
          <div className='p-3 mb-1 overflow-y-auto scrollbar-none'>
            <Landing_section />
          </div>
        )}

        {Section === "project" && (
          <div className=' p-3 mb-1 w-full h-full overflow-y-auto scrollbar-none'>
            <Projects setSection={setSection} />
          </div>
        )}

        {Section === "testimonial" && (
          <div className='p-3 mb-1 w-full h-full overflow-y-auto scrollbar-none'>
            <Testimonial setSection={setSection} />
          </div>
        )}

        {Section === "user" && (
          <div className='bg-sky-400 p-3 mb-1 w-full h-full overflow-y-auto scrollbar-none'>
            <h1>User</h1>
          </div>
        )}


        {Section === "message" && (
          <div className='bg-yellow-400 w-full h-full overflow-y-auto scrollbar-none'>
            <h1>Message</h1>
          </div>
        )}

        {Section === "addProject" && (
          <div className='bg-pink-400 w-full h-full overflow-y-auto scrollbar-none'>
            <Add_Project setSection={setSection} />
          </div>
        )}
        {Section === "addTestimonial" && (
          <div className='bg-pink-400 w-full h-full overflow-y-auto scrollbar-none'>
            <Add_testimonial setSection={setSection} />
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard; 