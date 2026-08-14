import React from 'react'
import { useState } from 'react'
import { API_URL } from '../config';
import WaitingCard from './waiting-card';
import AlertCard from "./Alert-card.jsx"
const Mobile_testimonial_form = ({ setShowMobileForm, loader, setLoader, setAlertMessage, setSuccess, setError }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');
    const [rating, setRating] = useState('');
    const [message, setMessage] = useState('');
    // const [loader, setLoader] = useState(false);


    // const [error, setError] = useState(false); 
    //     const [success, setSuccess] = useState(false);
    //     const [alertMessage, setAlertMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !role.trim() || !rating.trim() || !message.trim()) {
            setError(true);
            setAlertMessage('Please fill in all required fields.');
            setTimeout(() => {
                setError(false);
                setAlertMessage('');
            }, 1500)
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
        <div className='fixed top-0 left-0 w-full h-full bg-black/70  flex items-center justify-center pt-0  md:p-8'>
            <div className='relative w-full max-w-2xl max-h-[80vh] bg-[#030B1E] p-8 rounded-2xl overflow-y-auto scrollbar-none'>

                <div className='sticky -top-8 w-ful z-10 bg-[#030B1E] p-2 pb-5 mb-5'>
                    <p className='text-sm text-sky-400 font-semibold'>
                        LEAVE A TESTIMONIAL
                    </p>

                    <p className='text-gray-400 text-sm mt-1'>
                        Tell me about your experience working or learning with me.
                    </p>
                    <button
                    className='absolute top-1 right-1 border border-white/20 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-white/10 transition-colors'
                    onClick={() => {
                        setShowMobileForm(false);
                    }}
                >
                    <img src="xmark.png" alt="Close" width={14} />
                </button>
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

                {/* {loader && (
                 <WaitingCard />
               )} */}

            </div>
            {/* <AlertCard errorMessage={alertMessage} showError={error} showSuccess={success} /> */}
        </div>
    )
}

export default Mobile_testimonial_form