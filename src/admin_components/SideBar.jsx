import React, { useState } from 'react';
import "./style.css";
const SideBar = ({ setSection, active, isOpen , setIsOpen }) => {

  return (
    <div className={`sidebar relative p-2 flex justify-center items-center h-screen border-r border-gray-500/30 md:translate-x-0 ease-in duration-150 z-50 ${isOpen ? "translate-x-0" : "-translate-x-800"}`}>

     
    </div>
  )
}

export default SideBar