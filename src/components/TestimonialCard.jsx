import React from 'react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='bg-[#030B1E] border border-gray-700 rounded-lg p-5 mb-4'>
      <p className='text-base md:text-lg text-gray-300 leading-relaxed'>
        {testimonial.message}
      </p>

      <div className='mt-5 flex justify-between items-end'>
        <div>
          <p className='text-sm font-semibold text-sky-400'>
            {testimonial.name}
          </p>

          <p className='text-xs text-gray-500 mt-1'>{testimonial.role}</p>

          <p className='text-xs text-gray-500 mt-1'>{testimonial.company}</p>
        </div>

        <div className='text-yellow-400 text-sm'>
          {'★'.repeat(testimonial.rating)}
          <span className='text-gray-600'>
            {'★'.repeat(5 - testimonial.rating)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
