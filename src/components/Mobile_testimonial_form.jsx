import React from 'react'

const Mobile_testimonial_form = ({ setShowMobileForm }) => {
  return (
   <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex items-center justify-center p-4 md:p-8'>
         <div className='relative w-full max-w-2xl max-h-[80vh] bg-[#030B1E] p-8 rounded-2xl overflow-y-auto scrollbar-none'>

                    <div className='mb-5'>
                        <p className='text-sm text-sky-400 font-semibold'>
                            LEAVE A TESTIMONIAL
                        </p>

                        <p className='text-gray-400 text-sm mt-1'>
                            Tell me about your experience working or learning with me.
                        </p>
                    </div>

                    <button
                    className='absolute top-4 right-4 border border-white/20 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors'
                    onClick={() => {
                        setShowMobileForm(false);
                    }}
                >
                    <img src="xmark.png" alt="Close" width={14} />
                </button>


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
  )
}

export default Mobile_testimonial_form