import React from 'react'
import { useState,useEffect } from 'react'
import "./style.css"
import { API_URL } from '../config';
import TestimonialCard from './TestimonialCard.jsx';
import { allTestimonials } from '../data/testimonialRoute.js';
import WaitingCard from "./waiting-card.jsx"
import Mobile_testimonial_form from './Mobile_testimonial_form.jsx'
import Waiting from './Waiting.jsx';
import AlertCard from './Alert-card.jsx';
const Testimonial = ({ setTestimonial, setAboutModule }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');
    const [loader, setLoader] = useState(false);
    const [showMobileForm, setShowMobileForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [testimonials, setTestimonials] = useState([]);

    const [error, setError] = useState(false); 
    const [success, setSuccess] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
            useEffect(() => {
                const fetchTestimonials = async () => {
                    try {
                        const data = await allTestimonials();
                       setLoading(false)
                        setTestimonials(data);
                    } catch (error) {
                        setLoading(false)
                        console.error(error);
                    }
                };
        
                fetchTestimonials();
            }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !role.trim() || !rating.trim() || !message.trim()) {
            setError(true);
            setAlertMessage('Please fill in all required fields.');
            setTimeout(() =>{
                 setError(false);
            setAlertMessage('');
            },1500)
            return;
        }

        try {
            setLoader(true);

            const response = await fetch(`${API_URL}/create-testimonial`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    role,
                    company,
                    rating,
                    message
                })
            });


            const data = await response.json();


            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');

            }

            alert('Testimonial submitted successfully!');
            setSuccess(true);
            setAlertMessage('Testimonial submitted successfully!');
            setTimeout(() => {
                setSuccess(false);
                setAlertMessage('');
                setName('');
                setEmail('');
                setRole('');
                setCompany('');
                setRating('');
                setMessage('');

            }, 1500)

           
        } catch (err) {
            console.log(err)

        } finally {
            setLoader(false);
        }




    }
    return (
        <div className='fadeInCard w-full max-w-6xl bg-[#030B1E] border border-white/10 p-5 md:p-8 rounded-2xl shadow-2xl flex flex-col max-h-[80vh] md:max-h-[89vh] z-50'>

            {/* Header */}
            <div className='flex justify-between items-center mb-6 flex-shrink-0'>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white border-b-4 border-sky-400 pb-1 w-fit uppercase">
                    Testimonial
                </h1>

                <button
                    className='border border-white/20 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors'
                    onClick={() => {
                        setTestimonial(false);
                        setAboutModule(true);
                    }}
                >
                    <img src="xmark.png" alt="Close" width={14} />
                </button>
            </div>


            {/* Content */}
            <div className='flex flex-col md:flex-row gap-8 flex-1 min-h-0 overflow-hidden'>

                {/* Testimonials */}
                <div className='flex-1 relative md:pr-8 md:border-r border-white/10 overflow-y-auto scrollbar-none p-1'>

                    <div className='mb-6'>
                        <p className="text-sm text-sky-400 font-semibold mb-2">
                            WHAT PEOPLE SAY
                        </p>

                        <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                            Your experience matters.
                        </h2>

                        <p className='text-gray-400 text-sm md:text-base leading-relaxed'>
                            Your feedback helps me improve and gives others an idea of what it is like to work with me or learn from me.
                        </p>
                    </div>
                   

                    {/* Testimonial Card */}

                    {loading ? (
                         <WaitingCard />
                    ): testimonials.length === 0 ? (
                        <p className='text-gray-400 text-sm md:text-base leading-relaxed bg-[#030B1E] border border-gray-700 rounded-lg p-5 mb-4'>No testimonials yet. Be the first to share your experience!</p>
                    ) : (
                        testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))
                    ) }

                   
    
                   
                </div>

                <div className='block md:hidden'>
                    <button onClick={() => setShowMobileForm(true)} className='bg-sky-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-500'>
                        LEAVE A TESTIMONIAL
                    </button>
                </div>



                {/* mobile form */}
                {showMobileForm && (
                    <Mobile_testimonial_form
                        setShowMobileForm={setShowMobileForm} loader={loader} setLoader={setLoader}
                        setError={setError} setSuccess={setSuccess} setAlertMessage={setAlertMessage}
                    />
                )}

                {/*  */}



                {/* Form */}
                <div className='hidden relative md:block flex-1 md:min-h-0 p-1 md:pl-2 overflow-y-auto scrollbar-none'>

                    <div className='mb-5'>
                        <p className='text-sm text-sky-400 font-semibold'>
                            LEAVE A TESTIMONIAL
                        </p>

                        <p className='text-gray-400 text-sm mt-1'>
                            Tell me about your experience working or learning with me.
                        </p>
                    </div>


                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

                        {/* Name */}
                        <label
                            htmlFor="name"
                            className='flex flex-col text-sm font-semibold text-gray-300 gap-1.5'
                        >
                            Name

                            <input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='bg-[#030B1E] text-white placeholder:text-gray-600 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 p-3 rounded-lg transition'
                            />
                        </label>


                        {/* Email */}
                        <label
                            htmlFor="email"
                            className='flex flex-col text-sm font-semibold text-gray-300 gap-1.5'
                        >
                            Email

                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className='bg-[#030B1E] text-white placeholder:text-gray-600 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 p-3 rounded-lg transition'
                            />
                        </label>


                        {/* Role */}
                        <label
                            htmlFor="role"
                            className='flex flex-col text-sm font-semibold text-gray-300 gap-1.5'
                        >
                            Role

                            <input
                                type="text"
                                name="role"
                                placeholder="e.g. Former Student, Client"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className='bg-[#030B1E] text-white placeholder:text-gray-600 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 p-3 rounded-lg transition'
                            />
                        </label>


                        {/* Company */}
                        <label
                            htmlFor="company"
                            className='flex flex-col text-sm font-semibold text-gray-300 gap-1.5'
                        >
                            Company
                            <span className='text-xs text-gray-500 font-normal'>
                                Optional
                            </span>

                            <input
                                type="text"
                                name="company"
                                placeholder="Company or organization"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                className='bg-[#030B1E] text-white placeholder:text-gray-600 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 p-3 rounded-lg transition'
                            />
                        </label>


                        {/* Rating */}
                        <label
                            htmlFor="rating"
                            className='flex flex-col text-sm font-semibold text-gray-300 gap-1.5'
                        >
                            Rating

                            <select
                                name="rating"
                                className='bg-[#030B1E] text-white border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 p-3 rounded-lg transition'
                                defaultValue=""
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select a rating
                                </option>

                                <option value="5">★★★★★ — 5 Stars</option>
                                <option value="4">★★★★☆ — 4 Stars</option>
                                <option value="3">★★★☆☆ — 3 Stars</option>
                                <option value="2">★★☆☆☆ — 2 Stars</option>
                                <option value="1">★☆☆☆☆ — 1 Star</option>
                            </select>
                        </label>


                        {/* Message */}
                        <label
                            htmlFor="message"
                            className='flex flex-col text-sm font-semibold text-gray-300 gap-1.5'
                        >
                            Testimonial

                            <textarea
                                name="message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell me about your experience..."
                                className='bg-[#030B1E] text-white placeholder:text-gray-600 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 p-3 rounded-lg resize-none transition'
                            />
                        </label>


                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loader}
                            className='w-full px-5 py-3 bg-sky-400 text-white font-bold rounded-lg hover:bg-sky-500 active:scale-[0.98] transition-all'
                        >

                            {loader ? "Submitting..." : "Submit Testimonial"}
                        </button>

                        
                    </form>

                </div>

            </div>

           {loader && ( <Waiting />)}
            <AlertCard errorMessage={alertMessage} showError={error} showSuccess={success} />
                 
        </div>
    )
}

export default Testimonial