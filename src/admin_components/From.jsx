import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../index.css"
import {API_URL} from "../config.js";

const From = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            setLoader(false)
            setTimeout(() => {
                setError("");
            }, 2000);
            return;
        }

        try {
            setLoader(true);
          

            const respond = await fetch(`${API_URL}/Login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await respond.json();

            if (!respond.ok) {
                setError(data.message);
                setLoader(false);
                return;
            }

            if (respond.ok) {
                
                // localStorage.setItem(data.token);
                setLoader(false)
                setTimeout(()=>{
                    setSuccess(data.message);
                     navigate('/admin')
                },1500)
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
        <form className='flex  shadow-sky-400 flex-col space-y-4 text-sky-400 bg-[#030B1E] p-8 rounded-lg shadow-md w-[90%] md:max-w-lg ' onSubmit={handleSubmit} >
            <div className='flex justify-center shadow shadow-sky-400 items-center font-bold text-3xl p-2'><h1>MikunDev</h1></div>
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
            <label htmlFor="username" className='flex flex-col font-bold gap-1.5'>
                Email
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className='bg-[#030B1E] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-sky-400 p-3 rounded-lg' />
            </label>

            <label htmlFor="password" className='flex flex-col font-bold gap-1.5'>
                Password
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} className='bg-[#030B1E] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-sky-400 p-3 rounded-lg' />
            </label>
            <button type="submit" disabled={loader} className='bg-sky-400 text-[#030B1E] font-bold py-2 px-4 rounded-lg hover:bg-sky-500'>
                {loader ? "Loading..." : "Login"}
            </button>
        </form>
    )
}

export default From