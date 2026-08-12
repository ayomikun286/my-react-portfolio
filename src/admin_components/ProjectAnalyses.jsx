import React from 'react'

const ProjectAnalyses = () => {
  return (
    <div className='animate-fadeIn md:gap-0 gap-8 flex justify-evenly items-center w-full md:h-100 text-white border border-sky-400 p-8 rounded-xl mt-8  bg-black/50 backdrop-blur-[10px] flex-wrap '>
       <div className='w-60 h-80 flex justify-center gap-2 items-center flex-col'>
        <div className='border-2 relative flex justify-center overflow-hidden items-center border-sky-400 w-full h-full rounded-t-full'>
              <h1 className='text-4xl font-bold z-50'>80%</h1>
              <div className='absolute w-full h-full bg-sky-400 top-20'></div>
        </div>
        <p className='font-semibold text-lg text-sky-400'>All Projects</p>
      </div>
      <div className='w-60 h-80 flex justify-center gap-2 items-center flex-col'>
        <div className='border-2 relative flex justify-center overflow-hidden items-center border-sky-400 w-full h-full rounded-t-full'>
              <h1 className='text-4xl font-bold z-50'>30%</h1>
              <div className='absolute w-full h-full bg-sky-400 top-50'></div>
        </div>
        <p className='font-semibold text-lg text-sky-400'>Completed</p>
      </div>
      <div className='w-60 h-80 flex justify-center gap-2 items-center flex-col'>
        <div className='border-2 relative flex justify-center overflow-hidden items-center border-sky-400 w-full h-full rounded-t-full'>
              <h1 className='text-4xl font-bold z-50'>50%</h1>
              <div className='absolute w-full h-full bg-sky-400 top-38'></div>
        </div>
        <p className='font-semibold text-lg text-sky-400'> Pending</p>
      </div>
     
      

    </div>
  )
}

export default ProjectAnalyses