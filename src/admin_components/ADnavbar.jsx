import React from 'react'
import {
   FaBell,
    FaSearch,
    FaSun,
    FaMoon,
    FaGreaterThan,
    FaAngleDown
} from "react-icons/fa";

const ADnavbar = () => {
    return (
        <div className='p-2.5 px-8 flex items-center justify-between  w-full border-b text-white  border-gray-500/30' >
            <div className=' rounded border-gray-500/50 gap-1 p-1.5 flex flex-col justify-center items-center'>
                <span className='w-6.5 h-0.5 bg-[#1E293B]'></span>
                <span className='w-6.5 h-0.5 bg-[#1E293B]'></span>
                <span className='w-6.5 h-0.5 bg-[#1E293B]'></span>
            </div>

                <div className='hidden min-w-100 bg-[#0B1422] md:flex items-center gap-3 p-2 rounded-lg border border-[#1E293B] overflow-hidden'>
                    <FaSearch className='font-light text-gray-500/50' />
                    <input type='text' placeholder='Search anything...' className='text-[15px] p-1 w-full h-full focus:outline-none' />
                </div>

                <div className='flex items-center gap-10'>

                    <FaSun />
                    <div>
                        <FaBell />
                    </div>

                    <div className='flex items-center gap-3'>
                        <span className='block bg-amber-50 w-8 h-8 rounded-full'>

                        </span>
                        <div className='flex flex-col'>
                            <strong  className='text-md'>
                                ayomikun e
                            </strong>
                            <small className='text-sm'>Admin</small>
                        </div>
                        <FaAngleDown className='text-xl ' />

                    </div>

                </div>
        
        </div>
    )
}

export default ADnavbar