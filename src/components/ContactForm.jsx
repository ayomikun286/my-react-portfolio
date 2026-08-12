import React, { useState } from 'react'
import {API_URL} from "../config.js";
const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message , setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loader, setLoader] = useState('');

     const handleSubmit = async (e) => {
            e.preventDefault();
            if (!email || !name || !message) {
                setError("Please fill in all fields");
                setLoader(false)
                setTimeout(() => {
                    setError("");
                }, 2000);
                return;
            }
    
            try {
                setLoader(true);
              
    
                const respond = await fetch(`${API_URL}/contact`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, name, message }),
                });
    
                const data = await respond.json();
    
                if (!respond.ok) {
                    setError(data.message);
                    setLoader(false);
                    return;
                }
    
                if (respond.ok) {
                    setSuccess(data.message);
                    setLoader(false)
                    
                }
    
    
    
            } catch (err) {
                console.log(err);
                setLoader(false)
                setError(err.message);
                setTimeout(() => {
                    setError("");
                }, 2000);
            }
        }
  return (

    <form  onSubmit={handleSubmit} className=' bg-black/50 backdrop-blur-[10px] p-5 md:min-w-lg rounded flex flex-col gap-2'>
       {error && (
                <div className=' animate-fadeIn bg-red-500/10 p-2 rounded-md'>
                    <p className='text-red-500 font-semibold'>{error}</p>
                </div>
            )}
            {success && (
                <div className=' animate-fadeIn bg-green-500/10 p-2 rounded-md'>
                    <p className='text-green-500 font-semibold'>{success}</p>
                </div>
            )}
        <label className='flex flex-col gap-2'>
            <p className='font-semibold text-sky-400'>Name</p>
            <input 
            type='text'
            name="name"
             onChange={(e) => setName(e.target.value)}
              className='border h-12 rounded border-sky-400  focus:outline-none p-2 '
            />
        </label>
         <label className='flex flex-col gap-2'>
            <p className='font-semibold text-sky-400'>Email</p>
            <input 
            type='email'
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
              className='border h-12 rounded border-sky-400  focus:outline-none p-2 '
            />
        </label>
         <label className='flex flex-col gap-2'>
            <p className='font-semibold text-sky-400'>Message</p>
            <textarea 
            name="message" 
            onChange={(e) => setMessage(e.target.value)}
              className='border h-30 rounded border-sky-400  focus:outline-none p-2 '
            ></textarea>
        </label>

<div className='flex items-center justify-center p-5'>
    <button type="submit" disabled={loader} className='bg-sky-400 w-full h-15 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-500'>
                {loader ? "Loading..." : "Submit"}
            </button>
</div>

        
    </form>
  )
}

export default ContactForm