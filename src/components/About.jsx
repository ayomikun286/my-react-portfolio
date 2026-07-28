import React from 'react'
import ReadMore from "./ReadMore.jsx"

import { useState } from 'react'

const About = ({onOpenProject}) => {

    const [readMore, setReadMore] = useState(false)
    return (
        <div className="flex items-start flex-col justify-start mt-10 min-h-[70vh]  max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2 border-b-4 border-sky-400 pb-1">About me </h1>

            <p className="text-gray-400 text-lg mt-8 md:text-xl leading-relaxed max-w-2xl mb-8">
                I'm a <strong className="text-white ">Full-Stack JavaScript Developer</strong> from Nigeria who enjoys building modern web applications that solve real-world problems.
                From business websites to full-stack platforms, I focus on creating digital experiences that are clean, fast, and reliable.
                Beyond development, I also enjoy teaching and helping others grow in tech.
            </p>

            <strong className='text-sky-400 text-2xl'>There's more to my journey than just writing code...</strong>


            <div className='flex space-x-1.5 mt-10 items-center'>
                <button
                    onClick={() => setReadMore(true)}
                    className="px-8 py-3  bg-white text-[#030B1E] font-black tracking-wide uppercase transition-all duration-300 hover:bg-sky-400 hover:text-white"
                >
                    Read more
                </button>

               
            </div>
            {readMore && <ReadMore setReadMore={setReadMore} onOpenProject={onOpenProject}/>}
        </div>
    )
}

export default About