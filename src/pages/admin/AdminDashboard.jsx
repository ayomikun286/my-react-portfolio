import React, { useState } from 'react'
import ProjectAnalyses from "../../admin_components/ProjectAnalyses.jsx";
import SideBar  from "../../admin_components/SideBar.jsx"
import "./style.css";
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
const AdminDashboard = () => {
  const [Section, setSection] = useState ('analyses');
   const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='hero flex px-2 overflow-auto h-screen w-screen '>
      {isOpen === false && <div className='md:hidden w-10 border rounded-full border-sky-400 h-10 fixed  flex justify-center items-center bg-black/50 backdrop-blur-[10px]  z-50 top-3 l-5' onClick={()=> setIsOpen(true)}> <FaArrowRight className='text-sky-400 text-xl ' /></div>}
      <SideBar setSection={setSection} active={Section} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='w-screen h-screen '>
        {Section === "analyses" && <ProjectAnalyses />}
      </div>
    </div>
  )
}

export default AdminDashboard; 