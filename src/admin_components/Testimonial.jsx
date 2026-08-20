import React, { useState, useEffect } from 'react'
import { All_Testimonials } from '../data/testimonialRoute.js';
const Testimonial = ({ setSection }) => {

    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const data = await All_Testimonials();
                // setLoading(false)
                setTestimonials(data);
                console.log(data)
            } catch (error) {
                // setLoading(false)
                console.error(error);
            }
        };

        fetchTestimonials();
    }, []);

    const publishedCount = testimonials.filter(
    testimonial => testimonial.approved
).length;

const hiddenCount = testimonials.filter(
    testimonial => !testimonial.approved
).length;

    return (
        <div className=' text-white w-full h-full'>

            <div className='flex justify-between mb-8'>
                <div className=''>
                    <h2 className='font-semibold text-xl'>Testimonials</h2>
                    <small>Manage what people say about you.</small>
                </div>

                <button
                    onClick={() => setSection("addTestimonial")}
                    className='bg-[#3B82F6] px-3 py-2 rounded'>
                    <p className='font-semibold '>Add Testimonial</p>
                </button>
            </div>

            <div className='flex justify-between p-4'>
                <div className='flex gap-2'>
                    <button className='p-3 font-semibold bg-[#3B82F6] rounded border border-[#1E293B]'>All <span>({testimonials.length})</span></button>
                    <button className='p-3 font-semibold  rounded border border-[#1E293B]'>Published <span>({publishedCount})</span></button>
                    <button className='p-3 font-semibold  rounded border border-[#1E293B]'>Hidden <span>({hiddenCount})</span></button>
                </div>
                {/* <div>
                    <select className='border p-3 border-[#1E293B] rounded text-[#F8FAFC]'>
                        <option>ALL Categories</option>
                    </select>
                </div> */}
            </div>

            <div className=' border border-[#1E293B] p-2 rounded-lg bg-[#0B1422] overflow-x-auto scrollbar-none '>
                <table className="w-full">
                    <thead className="border-b border-[#1E293B]">
                        <tr className="text-left text-sm text-gray-400">
                            <th className="p-4">Client</th>
                            <th className="p-4">Position/Company</th>
                            <th className="p-4">Rating</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {testimonials.map((testimonial) => (
                            <tr
                                key={testimonial._id || testimonial.id}
                                className="border-b border-[#1E293B] last:border-0"
                            >
                                <td className="p-4 font-medium">
                                    {testimonial.name}
                                </td>

                                <td className="p-4 text-gray-400">
                                    {testimonial.role}
                                </td>

                                <td className="p-4">
                                    <div className="text-yellow-400 text-sm">
                                        {'★'.repeat(testimonial.rating)}
                                        <span className="text-gray-600">
                                            {'★'.repeat(5 - testimonial.rating)}
                                        </span>
                                    </div>
                                </td>

                                <td className="p-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs ${testimonial.approved
                                                ? 'text-green-400 bg-green-400/10'
                                                : 'text-yellow-400 bg-yellow-400/10'
                                            }`}
                                    >
                                        {testimonial.approved ? 'Published' : 'Hidden'}
                                    </span>
                                </td>

                                <td className="p-4">
                                    {/* actions */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>





        </div>
    )
}

export default Testimonial