import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'
export default function HeroSection({ onOpenProject }) {
  return (
    <div className="flex items-start justify-center min-h-[70vh] max-w-3xl ">

      <div className='animate-slide-in-left flex flex-col space-y-5 mt-6'>
        {/* 1. Subtle, stylish subtitle hook */}
        <span className="text-sky-400 font-mono tracking-widest text-sm uppercase mb-3">
        // Hello World, I am
        </span>

        {/* 2. Your Full Legal Name */}
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-5">
          Edegbai Ayomikun <br className="hidden md:block" /> Oluwaseun.
        </h1>

        {/* 3. Catchy Nickname & Core Role Subheading */}
        <h2 className="text-xl md:text-4xl font-extrabold text-gray-400 mb-6">
          Known online as <span className="text-white border-b-4 border-sky-400 pb-1">mikunDev</span>.
        </h2>

        {/* 4. Strong Value Statement explaining your full-stack capability */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
          I help businesses and startups build modern web application with React, Node.js, Express and MongoDB - from responsive frontends to scalable backends APIs
        </p>

        {/* social */}
        <div className="flex items-center space-x-2  text-4xl">
          <a href='https://github.com/ayomikun286' target='_blank'><FontAwesomeIcon
            icon={faGithub}
            className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer'
          /></a>

          <a href='https://www.linkedin.com/in/edegbai-ayomikun-oluwaseun' target='_blank'><FontAwesomeIcon
            icon={faLinkedin}
            className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer' /></a>

          <a href='https://wa.me/2348116541869?text=Hello%20Ayomikun%2C%20I%20got%20your%20contact%20and%20I%27m%20interested%20in%20your%20web%20development%20services%20or%20coding%20classes.' target='_blank'> <FontAwesomeIcon
            icon={faWhatsapp}
            className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer' /></a>

          <a href="mailto:EdegbaiAyomikun@gmail.com?subject=Website%20Development%20Inquiry&body=Hello%20Ayomikun,%0A%0AI%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20my%20project.%0A%0AThank%20you." target='_blank'><FontAwesomeIcon
            icon={faEnvelope}
            className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer' /></a>
        </div>

        {/* 5. Clear Call to Action buttons matching your single-page modal layout */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={()=> onOpenProject('Projects')}
            className="px-8 py-3 bg-white text-[#030B1E] font-black tracking-wide uppercase transition-all duration-300 hover:bg-sky-400 hover:text-white"
          >
            View Featured Project
          </button>

          <a
             onClick={()=> onOpenProject('Contact')}
            className="px-8 py-3 md:bg-transparent bg-[#030B1E] border-2 border-white/20 text-white font-bold tracking-wide uppercase transition-all duration-300 hover:bg-[#030B1E] md:hover:border-white"
          >
            Let's Talk
          </a>
        </div>
      </div>

    </div>
  );
}
