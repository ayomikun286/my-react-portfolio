import React from 'react'
import {useState} from 'react'
import "./style.css"
import Mobile_testimonial_form from './Mobile_testimonial_form'
const Testimonial = ({ setTestimonial, setAboutModule }) => {

    const [showMobileForm, setShowMobileForm] = useState(false);    
    return (
        <div className='fadeInCard w-full max-w-6xl bg-[#030B1E] border border-white/10 p-5 md:p-8 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] md:max-h-[89vh] z-50'>

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
                <div className='flex-1 md:pr-8 md:border-r border-white/10 overflow-y-auto scrollbar-none p-1'>

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
                    <div className='bg-white/[0.03] border border-white/10 rounded-xl p-5 mb-4'>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            "This is a great platform for showcasing my work and connecting with potential clients."
                        </p>

                        <div className='mt-4'>
                            <p className="text-sm font-semibold text-sky-400">
                                John Doe
                            </p>

                            <p className='text-xs text-gray-500 mt-1'>
                                Former Student
                            </p>
                        </div>

                    </div>


                    <div className='bg-white/[0.03] border border-white/10 rounded-xl p-5'>

                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            "Working with him was a great experience. Professional, patient and very knowledgeable."
                        </p>

                        <div className='mt-4'>
                            <p className="text-sm font-semibold text-sky-400">
                                Jane Doe
                            </p>

                            <p className='text-xs text-gray-500 mt-1'>
                                Client
                            </p>
                        </div>

                    </div>

                </div>

                <div className='block md:hidden'>
                    <button onClick={()=> setShowMobileForm(true)} className='bg-sky-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-500'>
                        LEAVE A TESTIMONIAL
                    </button>
                </div>



                {/* mobile form */}
                    {showMobileForm && (
                        <Mobile_testimonial_form
                            setShowMobileForm={setShowMobileForm}
                        />
                    )}

                {/*  */}



                {/* Form */}
                <div className='hidden md:block flex-1 md:min-h-0 p-1 md:pl-2 overflow-y-auto scrollbar-none'>

                    <div className='mb-5'>
                        <p className='text-sm text-sky-400 font-semibold'>
                            LEAVE A TESTIMONIAL
                        </p>

                        <p className='text-gray-400 text-sm mt-1'>
                            Tell me about your experience working or learning with me.
                        </p>
                    </div>


                    <form className='flex flex-col gap-4'>

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
                                placeholder="Tell me about your experience..."
                                className='bg-[#030B1E] text-white placeholder:text-gray-600 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 p-3 rounded-lg resize-none transition'
                            />
                        </label>


                        {/* Submit */}
                        <button
                            type="submit"
                            className='w-full px-5 py-3 bg-sky-400 text-white font-bold rounded-lg hover:bg-sky-500 active:scale-[0.98] transition-all'
                        >
                            Submit Testimonial
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Testimonial