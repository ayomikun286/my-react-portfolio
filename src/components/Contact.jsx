import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'
import ContactForm from "../components/ContactForm.jsx"
const Contact = () => {
    return (
        <div className='flex  flex-col md:flex-row  md:items-center md:justify-between min-h-120 w-full md:max-w-4xl'>
            <div className="flex flex-row justify-center md:justify-center md:flex-col  space-x-2 items-center md:items-start space-y-5 text-5xl md:text-7xl ">
                <a href='https://github.com/ayomikun286' target='_blank' className='flex gap-2 items-center'>
                
                <FontAwesomeIcon
                    icon={faGithub}
                    className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer'
                />
                <p className='text-2xl hidden md:block text-sky-400 font-semibold'>GitHub</p>
                </a>

                <a href='https://www.linkedin.com/in/edegbai-ayomikun-oluwaseun' className='flex gap-2 items-center' target='_blank'><FontAwesomeIcon
                    icon={faLinkedin}
                    className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer' />
                     <p className='text-2xl hidden md:block text-sky-400 font-semibold'>Linkedin</p>
                    </a>

                <a href='https://wa.me/2348116541869?text=Hello%20Ayomikun%2C%20I%20got%20your%20contact%20and%20I%27m%20interested%20in%20your%20web%20development%20services%20or%20coding%20classes.' className='flex gap-2 items-center' target='_blank'> <FontAwesomeIcon
                    icon={faWhatsapp}
                    className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer' />
                     <p className='text-2xl hidden md:block text-sky-400 font-semibold'>Whatsapp</p>
                    </a>

                <a href="mailto:EdegbaiAyomikun@gmail.com?subject=Website%20Development%20Inquiry&body=Hello%20Ayomikun,%0A%0AI%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20my%20project.%0A%0AThank%20you." className='flex gap-2 items-center' target='_blank'><FontAwesomeIcon
                    icon={faEnvelope}
                    className='text-white hover:text-sky-400 transform transition-all duration-200 hover:scale-125 cursor-pointer' />
                     <p className='text-2xl hidden md:block text-sky-400 font-semibold'>Gmail</p>
                    </a>
            </div>
            <div className=' h-auto'>
                <ContactForm />
            </div>

        </div>
    )
}

export default Contact