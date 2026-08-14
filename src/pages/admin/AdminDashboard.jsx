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
      <SideBar setSection={setSection} active={Section} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='w-screen h-screen '>
        {Section === "analyses" && <ProjectAnalyses />}
      </div>
    </div>
  )
}

export default AdminDashboard; 