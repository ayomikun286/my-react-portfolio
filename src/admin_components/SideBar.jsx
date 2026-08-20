import React, { useState } from 'react';
import "./style.css";
import {
  FaBell,
  FaSearch,
  FaSun,
  FaMoon,
  FaGreaterThan,
  FaAngleDown,
  FaHome,
  FaTools,
  FaComment,
  FaEnvelope,
  FaUser,



} from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {
  FiBriefcase,
  FiMessageCircle,
  FiMail,
  FiEye
} from "react-icons/fi";
const SideBar = ({ setSection, Section, isOpen, setIsOpen }) => {

  const handleNavigation = (section) => {
    setSection(section);
    setIsOpen(false);
  };

  return (
    <div className={`sidebar text-[#F8FAFC] bg-[#050B14] relative flex flex-col justify-start  h-screen border-r border-gray-500/30 ease-in transition duration-150 z-50`}>
      <div className='p-5'>
        <img src="" alt="logo" />
      </div>

      <button
    type="button"
    onClick={() => setIsOpen(false)}
    className="w-8 h-8 bg-sky-400 rounded-full absolute right-3 top-3 flex md:hidden justify-center items-center text-black"
>
    <FaTimes />
</button>

      <div className='flex flex-col gap-4 p-2'>

        <small className='font-bold text-[0.7rem] mb-3'>MAIN</small>
        <button
          onClick={() => handleNavigation("dashboard")}
          className={`flex items-center gap-3 hover:bg-[#3B82F6] transition ease-in duration-75 p-2 rounded ${Section === "dashboard"
              ? "bg-[#3B82F6]"
              : "bg-transparent"
            }`}
        >
          <FaHome />
          <p className="font-semibold text-sm">Dashboard</p>
        </button>

       <button
    onClick={() => handleNavigation("project")}
    className={`flex items-center gap-3 hover:bg-[#3B82F6] transition ease-in duration-75 p-2 rounded ${
        Section === "project"
            ? "bg-[#3B82F6]"
            : "bg-transparent"
    }`}
>
    <FiBriefcase />
    <p className="font-semibold text-sm">Projects</p>
</button>
        <button
    onClick={() => handleNavigation("testimonial")}
    className={`flex items-center gap-3 hover:bg-[#3B82F6] transition ease-in duration-75 p-2 rounded ${
        Section === "testimonial"
            ? "bg-[#3B82F6]"
            : "bg-transparent"
    }`}
>
    <FiMessageCircle />
    <p className="font-semibold text-sm">Testimonials</p>
</button>
      </div>

      <div className='flex flex-col gap-2 p-2' >
        <small className='font-bold text-[0.7rem] mb-3'>MANAGEMENT</small>

       <button
    onClick={() => handleNavigation("message")}
    className={`flex items-center gap-3 hover:bg-[#3B82F6] transition ease-in duration-75 p-2 rounded ${
        Section === "message"
            ? "bg-[#3B82F6]"
            : "bg-transparent"
    }`}
>
    <FaEnvelope />
    <p className="font-semibold text-sm">Message</p>
</button>
<button
    onClick={() => handleNavigation("user")}
    className={`flex items-center gap-3 hover:bg-[#3B82F6] transition ease-in duration-75 p-2 rounded ${
        Section === "user"
            ? "bg-[#3B82F6]"
            : "bg-transparent"
    }`}
>
    <FaUser />
    <p className="font-semibold text-sm">User</p>
</button>
      </div>



      <div className='p-2 mt-10 flex justify-center items-center'>
        <div className='flex items-center p-2 w-full justify-center rounded gap-3 border border-gray-500/30 '>
          <span className='block bg-amber-50 w-6 h-6 rounded-full'>

          </span>
          <div className='flex flex-col'>
            <strong className='text-[0.7rem]'>
              ayomikun e
            </strong>
            <small className='text-[0.6rem]'>Admin</small>
          </div>
          <FaAngleDown className='text-xl ' />

        </div>
      </div>




    </div>
  )
}

export default SideBar