import React, { useState } from 'react';
import Skills from "./Skills.jsx"
import Testimonial from "../components/Testimonial.jsx";

const ReadMore = ({ setReadMore, onOpenProject }) => {
    const [certificate, setCertificate] = useState(false);
    const [aboutModule, setAboutModule] = useState(true);
    const [testimonial, setTestimonial] = useState(false)

    const [selectedCertificate, setSelectedCertificate] = useState(null)

    return (
        // 1. Structural overlay container setup
        <div className='fixed inset-0 w-screen h-screen flex justify-center items-center bg-black/50 backdrop-blur-[10px] z-80 p-4 md:p-10 animate-fadeIn '>

            {aboutModule && (
                <div className='fadeInCard w-full max-w-4xl bg-[#030B1E] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col max-h-[89vh] z-50'>

                    {/* 3. Header Action Wrapper - Stays static at the top so Close Button is ALWAYS visible */}
                    <div className='flex justify-between items-center mb-4 flex-shrink-0'>
                        <h1 className="text-3xl font-black tracking-tight text-white mb-2 border-b-4 border-sky-400 pb-1 w-fit uppercase">
                            About Me
                        </h1>
                        <button
                            className='border border-white/20 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors'
                            onClick={() => setReadMore(false)}
                        >
                            <img src="xmark.png" alt="Close" width={14} />
                        </button>
                    </div>

                    {/* 4. Independent Scroll Area - Only the paragraphs scroll, hiding the track flawlessly via scrollbar-none */}
                    <div className='overflow-y-auto scrollbar-none flex-1 pr-1'>


                        <p className="text-gray-400 text-lg mt-6 md:text-xl leading-relaxed max-w-4xl mb-6">
                            Hi, I'm <strong className="text-white">Ayomikun Edegbai</strong>, though many people know me online as <strong className="text-white">mikunDev</strong>.
                        </p>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mb-6">
                            I'm a <strong className="text-white">Full-Stack JavaScript Developer</strong> based in Nigeria with a passion for building modern, reliable, and user-focused web applications. My journey into software development started with curiosity, but over time it became a career built on continuous learning, solving problems, and creating meaningful digital experiences.
                        </p>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mb-6">
                            I enjoy working across the entire development process—from crafting responsive user interfaces with <strong className='text-white'>React</strong>  to designing scalable backend systems with <strong className='text-white'>Node.js, Express, and MongoDB</strong>. Whether it's a business website, a management dashboard, or a custom web application, I focus on writing clean, maintainable code that delivers real value.
                        </p>

                        <h1 className='text-2xl border-b-2 w-fit border-sky-400 pb-1 mb-5'>Teaching Experience</h1>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl mb-6">
                            Alongside development, I've had the privilege of teaching frontend development, helping aspiring developers build a strong foundation in HTML, CSS, JavaScript, React, and modern web development practices. Guiding students through real-world projects has strengthened my ability to communicate technical concepts clearly while reminding me that learning is a continuous journey.
                        </p>

                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-4xl">
                            What drives me most isn't simply writing code—it's seeing an idea evolve into something people can use every day. I believe good software should be intuitive, efficient, and built with purpose.
                        </p>
                        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-4xl">
                            Outside of coding, I'm constantly exploring new technologies, refining my skills, and challenging myself with projects that push me to become a better developer.
                        </p>
                        <br />
                        <strong className='text-white pb-1 text-2xl w-fit border-b-2  border-sky-400 '>My goal is simple:</strong>
                        <p className="text-sky-400 text-lg md:text-xl leading-relaxed  max-w-4xl mt-5 mb-10 font-semibold">Build software that solves problems, create experiences people enjoy, and keep growing with every project I take on.</p>
                        <br />
                        <strong className='text-white pb-1 w-fit border-b-2 text-2xl border-sky-400  '>Core Technologies</strong>
                        <br />
                        <Skills />

                        <div className='mt-10'>
                            <h1 className='text-2xl border-b-2 w-fit border-sky-400 pb-1 mb-5'>What i build</h1>
                            <div className='flex flex-col space-y-2 pl-4'>
                                <p className='text-xl'><span className='text-sky-400'>✔</span> Business Websites</p>
                                <p className='text-xl'><span className='text-sky-400'>✔</span> Full-Stack Web Applications</p>
                                <p className='text-xl'><span className='text-sky-400'>✔</span> Admin Dashboards</p>
                                <p className='text-xl'><span className='text-sky-400'>✔</span> REST APIs</p>
                                <p className='text-xl'><span className='text-sky-400'>✔</span> Portfolio Websites</p>
                                <p className='text-xl'><span className='text-sky-400'>✔</span> Landing Pages</p>
                            </div>
                        </div>

                        <strong className='text-white block mt-10 pb-1 text-2xl w-fit border-b-2  border-sky-400 '> Ready to know more ?</strong>
                        <div className='flex items-center flex-wrap gap-5 mt-10'>
                            <button
                                onClick={() => onOpenProject('Projects')}
                                className="px-8 py-3  md:bg-transparent bg-[#030B1E]  text-white border  font-black tracking-wide uppercase transition-all duration-300 hover:bg-[#030B1E] hover:text-white"
                            >
                                Project
                            </button>

                            <button
                                onClick={() => { setCertificate(true); setAboutModule(false); }}
                                className="px-8 py-3   bg-white  text-[#030B1E] border  font-black tracking-wide uppercase transition-all duration-300 hover:bg-[#030B1E] hover:text-white"
                            >
                                Certificates
                            </button>

                            <button
                                onClick={() => { setTestimonial(true); setAboutModule(false); }}
                                className="px-8 py-3   bg-white  text-[#030B1E] border  font-black tracking-wide uppercase transition-all duration-300 hover:bg-[#030B1E] hover:text-white"
                            >
                                Testimonials
                            </button>

                        </div>
                    </div>



                </div>

            )}

            {testimonial && (
                <Testimonial setTestimonial={setTestimonial} setAboutModule={setAboutModule}/>
            )}

            {certificate && (
                <div className='fadeInCard w-full max-w-4xl bg-[#030B1E] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col max-h-[89vh] z-50'>
                    <div className='flex justify-between items-center mb-4 flex-shrink-0'>
                        <h1 className="text-3xl font-black tracking-tight text-white mb-2 border-b-4 border-sky-400 pb-1 w-fit uppercase">
                            Certificates
                        </h1>
                        <button
                            className='border border-white/20 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors'
                            onClick={() => { setCertificate(false); setAboutModule(true); }}
                        >
                            <img src="xmark.png" alt="Close" width={14} />
                        </button>
                    </div>
                    <div className='overflow-y-auto scrollbar-none flex-1 pr-1'>
                        <p className="text-gray-400 text-lg md:text-lg leading-relaxed max-w-4xl">
                            I believe great developers never stop learning. These certifications represent milestones in my journey—from mastering the fundamentals of frontend development to building modern websites with WordPress. More importantly, they reflect my commitment to continuous growth, practical experience, and delivering high-quality solutions.
                        </p>
                        <div className='flex mt-20 space-x-4 flex-wrap' >
                            <div className='  overflow-hidden flex flex-col space-y-3  '>
                                <h1 className='text-white font-bold space-y-2 pb-1 text-2xl w-fit border-b-2  border-sky-400 '>
                                    Frontend Development
                                </h1>


                                <div className='flex justify-center  mt-8 '>
                                    <img src="./frontend-certificate.jpeg" alt="" onClick={()=> setSelectedCertificate('./frontend-certificate.jpeg')} className='w-80 shadow shadow-amber-50 rounded-lg cursor-zoom-in hover:scale-105 transition'  />
                                </div>

                                <p>
                                    Awarded after completing comprehensive training in <strong>HTML, CSS, JavaScript, React, Git, GitHub, Bootstrap, and deployment</strong>. This certification reflects both theoretical knowledge and hands-on experience in building responsive, modern web applications.
                                </p>
                                <h4 class="font-semibold mt-4 mb-2">Skills Covered</h4>
                                <ul class="list-disc list-inside space-y-1 text-gray-300">
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>Bootstrap</li>
                                    <li>React</li>
                                    <li>Git & GitHub</li>
                                    <li>Responsive Web Design</li>
                                    <li>Website Deployment</li>

                                </ul>

                                <div class="mt-6 space-y-3">
                                    <div>
                                        <h4 class="font-semibold text-white">Issued</h4>
                                        <p class="text-gray-400">May 29, 2025</p>
                                    </div>

                                    <div>
                                        <h4 class="font-semibold text-white">Credential</h4>
                                        <p class="text-gray-400">KDA Links Tech Academy</p>
                                    </div>
                                </div>
                            </div>
                            <div className='  overflow-hidden flex flex-col space-y-3 mt-20 '>
                                <h1 className='text-white font-bold space-y-2 pb-1 text-2xl w-fit border-b-2  border-sky-400 '>
                                    Web Design (WordPress)
                                </h1>


                                <div className='flex justify-center mt-8 '>
                                    <img  src="./wordpress-certificate.jpeg" alt="" onClick={()=> setSelectedCertificate('./wordpress-certificate.jpeg')} className='w-80 shadow shadow-amber-50 rounded-lg cursor-zoom-in hover:scale-105 transition' />
                                </div>

                                <p>
                                    Successfully completed professional training in <strong>WordPress and Content Management Systems (CMS)</strong>, gaining practical experience in building responsive, user-friendly business websites. The program covered website creation, content management, deployment, and industry best practices for modern web development.
                                </p>
                                <h4 class="font-semibold mt-4 mb-2">Skills Covered</h4>
                                <ul class="list-disc list-inside space-y-1 text-gray-300">
                                    <li>WordPress Website Development</li>
                                    <li>Elementor Page Builder</li>
                                    <li>Spexo Theme & Addons</li>
                                    <li>Astra Theme</li>
                                    <li>Theme Customization</li>
                                    <li>Responsive Design</li>
                                    <li>Website Deployment</li>
                                </ul>
                                <div class="mt-6 space-y-3">
                                    <div>
                                        <h4 class="font-semibold text-white">Issued</h4>
                                        <p class="text-gray-400">February 27, 2026</p>
                                    </div>

                                    <div>
                                        <h4 class="font-semibold text-white">Credential</h4>
                                        <p class="text-gray-400">KDA Links Tech Academy</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p className="text-gray-400 mt-20 text-lg md:text-lg leading-relaxed max-w-4xl">
                            These certifications mark important milestones in my journey as a developer. While they validate my technical foundation, I believe my greatest learning has come from building real-world projects, teaching aspiring developers, and constantly challenging myself with new technologies. Every project I complete adds another layer to my experience and pushes me to become a better engineer.
                        </p>
                    </div>
                </div>
            )}


            {selectedCertificate && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <img
                        src={selectedCertificate}
                        alt="Certificate"
                        className="max-w-[95%] max-h-[95%] rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="absolute top-5 right-5 text-white text-4xl"
                        onClick={() => setSelectedCertificate(null)}
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    )
}

export default ReadMore 
