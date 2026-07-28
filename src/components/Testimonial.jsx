import React from 'react'

const Testimonial = ({setTestimonial,setAboutModule}) => {
  return (
    <div className='fadeInCard w-full max-w-6xl bg-[#030B1E] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col max-h-[89vh] z-50'>
                    <div className='flex justify-between items-center mb-4 flex-shrink-0'>
                        <h1 className="text-3xl font-black tracking-tight text-white mb-2 border-b-4 border-sky-400 pb-1 w-fit uppercase">
                            Testimonial
                        </h1>
                        <button
                            className='border border-white/20 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors'
                            onClick={() => { setTestimonial(false); setAboutModule(true); }}
                        >
                            <img src="xmark.png" alt="Close" width={14} />
                        </button>
                    </div>
                   
                </div>
  )
}

export default Testimonial