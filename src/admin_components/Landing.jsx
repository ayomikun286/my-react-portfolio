import React from 'react'
import { useState,useEffect } from 'react';
import {
  FiBriefcase,
  FiMessageCircle,
  FiMail,
  FiEye
} from "react-icons/fi";
import { getProjects } from "../data/ProjectsRoute.js";
import { All_Testimonials } from '../data/testimonialRoute.js';

const Landing_section = () => {
  const [projects, setProjects] = useState([]);
   const [testimonials, setTestimonials] = useState([]);
           useEffect(() => {
               const fetchProjects = async () => {
                   try {
                       const data = await getProjects();
                       const test_data = await All_Testimonials();

                       
                      setTestimonials(test_data)
                       setProjects(data);
                   } catch (error) {
                       console.error(error);
                   }
               };
       
               fetchProjects();
           }, []);
  return (
    <div className=' text-white w-full h-full'>
        <div className='mb-8'>
          <h1 className='font-semibold text-xl'>Welcome back,Ayomikun!</h1>
          <small>Here's what's happen with your project today.</small>

        </div>

        <div className='flex mb-8 items-center gap-2.5 md:flex-row flex-col '>
          <div className='flex justify-between items-center p-5 min-w-full  md:min-w-[280px] border bg-[#0B1422] border-[#1E293B] rounded-md'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-xl '>Total Project</p>
              <h1 className='text-3xl font-bold'>{projects.length}</h1>
              <p><span> 2</span> this month</p>
            </div>

            <span className='bg-[#2563EB] w-15 h-15 flex justify-center items-center rounded-full  '>
             < FiBriefcase  className='text-3xl'/> 
            </span>
          </div>
          <div className='flex justify-between items-center p-5 min-w-full md:min-w-[280px] border bg-[#0B1422] border-[#1E293B] rounded-md'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-xl '>Testimonials</p>
              <h1  className='text-3xl font-bold'>{testimonials.length}</h1>
              <p><span> 2</span> this month</p>
            </div>

            <span className='bg-[#2563EB] w-15 h-15 flex justify-center items-center rounded-full  '>
             < FiMessageCircle className='text-3xl' /> 
            </span>
          </div>
           <div className='flex justify-between items-center p-5 min-w-full md:min-w-[280px] border bg-[#0B1422] border-[#1E293B] rounded-md'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-xl '>Message</p>
              <h1  className='text-3xl font-bold'>8</h1>
              <p><span> 2</span> this month</p>
            </div>

            <span className='bg-[#2563EB] w-15 h-15 flex justify-center items-center rounded-full  '>
             < FiMail className='text-3xl' /> 
            </span>
          </div>
           <div className='flex justify-between items-center p-5 min-w-full  md:min-w-[280px]  border bg-[#0B1422] border-[#1E293B] rounded-md'>
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-xl '>Profile view</p>
              <h1 className='text-3xl font-bold'>8</h1>
              <p><span> 2</span> this month</p>
            </div>

            <span className='bg-[#2563EB] w-15 h-15 flex justify-center items-center rounded-full  '>
             < FiEye className='text-3xl' /> 
            </span>
          </div>

        </div>


        <div className='flex gap-3.5 flex-wrap flex-col md:flex-row mb-8'>
          <div className='flex-1 bg-[#0B1422] min-h-80 border border-[#1E293B] rounded-lg p-3'>
              <div className='flex justify-between items-center'>
                <h3 className='text-md font-bold'>Profile Views</h3>

                <select className=' border border-'>
                  <option>This Month</option>
                </select>
              </div>
          </div>
          <div className='flex-1 bg-[#0B1422] border border-[#1E293B] rounded-lg p-3'>

          </div>
        </div>

         <div className='flex gap-3.5 flex-wrap  flex-col md:flex-row mb-8'>
          <div className='flex-2 bg-[#0B1422] min-h-80 border border-[#1E293B] rounded-lg p-3'>

          </div>
          <div className='flex-1 bg-[#0B1422] border border-[#1E293B] rounded-lg p-3'>

          </div>
        </div>
    </div>
  )
}

export default Landing_section;