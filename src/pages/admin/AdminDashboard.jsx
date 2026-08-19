import React, { useState } from 'react'
import ProjectAnalyses from "../../admin_components/ProjectAnalyses.jsx";
import SideBar  from "../../admin_components/SideBar.jsx"
import "./style.css";
import ADnavbar from "../../admin_components/ADnavbar.jsx"
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
    <div className='flex  overflow-auto h-screen w-screen bg-[#050B14] '>
     <div className='side flex-0  md:flex-1'>
      <SideBar />
     </div>
     <div className='main flex-1 md:flex-6 w-full  flex flex-col'>
      <ADnavbar />
     </div>
    </div>
  )
}

export default AdminDashboard; 