import React from 'react'

const WaitingCard = () => {
  return (
    <div className='absolute z-50 inset-0 top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='bg-gray-950 min-w-20 gap-3 p-3 min-h-20 rounded border border-gray-400 flex flex-col justify-center items-center'>
            <span className='spin w-8 h-8  rounded-full border-2 border-gray-50 border-t-gray-950 '> </span>
        <small className='font-bold tracking-wider'>Loading...</small>
        </div>
    </div>
  )
}

export default WaitingCard