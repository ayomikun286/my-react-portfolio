import React, { useState } from 'react';
import "./style.css";
const SideBar = ({ setSection, active, isOpen , setIsOpen }) => {

  return (
    <div className={`sidebar relative p-2 flex justify-center items-center h-screen md:translate-x-0 ease-in duration-150 z-50 ${isOpen ? "translate-x-0" : "-translate-x-800"}`}>

      <div className='md:hidden w-10 border rounded-full border-sky-400 h-10 absolute  flex justify-center items-center bg-black/50 backdrop-blur-[10px]  z-50 left-55 top-5' onClick={()=> setIsOpen(false)}>  <img src="xmark.png" alt="Close" width={16} /> </div>

      <div className='w-50 max-h-[95%] p-2 rounded-xl shadow-sm shadow-sky-400 h-screen bg-black/50 backdrop-blur-[10px] hover:scale-101 duration-150 ease-in overflow-hidden'>
        <div className='flex justify-center rounded shadow shadow-sky-400 italic items-center  text-3xl p-2 text-sky-400 font-bold'><h1>MikunDev</h1></div>
        <div className='flex flex-col gap-5 items-center p-3  mt-5'>
          <button className={` shadow shadow-sky-400 font-semibold text-xl hover:shadow-sky-400 hover:shadow hover:bg-sky-400 hover:text-[#030B1E] rounded  w-full p-1 ${active === "analyses" ? "bg-sky-400 text-[#030B1E]":"bg-transparent text-sky-400"} `} onClick={() => setSection('analyses')}>Project Analyses</button>
          <button className={` shadow shadow-sky-400 font-semibold text-xl hover:shadow-sky-400 hover:shadow hover:bg-sky-400 hover:text-[#030B1E] rounded  w-full p-1 ${active === "project-list" ? "bg-sky-400 text-[#030B1E]":"bg-transparent text-sky-400"} `} onClick={() => setSection('project-list')}>Project list</button>
          <button className={` shadow shadow-sky-400 font-semibold text-xl hover:shadow-sky-400 hover:shadow hover:bg-sky-400 hover:text-[#030B1E] rounded  w-full p-1 ${active === "testimonial" ? "bg-sky-400 text-[#030B1E]":"bg-transparent text-sky-400"} `}  onClick={() => setSection('testimonial')}>Testimonial</button>
          <button className='text-red-400 bg-red-400/20 shadow shadow-red-400 font-semibold text-xl hover:shadow-red-400 hover:shadow hover:bg-red-400/10 rounded  w-full p-1'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar