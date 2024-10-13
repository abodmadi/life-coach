import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function SignUp() {
    const [dataForm,setDataForm] = useState({})
    const [error,setError] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange=(e)=>{
        setDataForm({
            ...dataForm,
            [e.target.id]: e.target.value,
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setIsLoading(true)
            const response = await fetch('/api/auth/sign-up',{
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(dataForm),
            })
            const responseBody = await response.json();
            if (responseBody.success===false) {
                setError(responseBody.message)
                setIsLoading(false)
                return;
            }
            setIsLoading(false)
            setError(null)
            console.log(responseBody)
            navigate('/sign-in')
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
        
    }
    console.log(dataForm)
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl text-slate-800 font-bold sm:text-3xl">Welcome to Rehla 🚀</h1>

                    <p className="mt-4 text-slate-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, veniam.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="text" className="sr-only">Full Name</label>

                        <div className="relative">
                            <input
                            type="text"
                            id="fullName"
                            className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter Full Name"
                            onChange={handleChange}
                            />

                        </div>
                    </div>

                    <div>
                        <label htmlFor="text" className="sr-only">User Name</label>

                        <div className="relative">
                            <input
                            type="text"
                            id="userName"
                            className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter User Name"
                            onChange={handleChange}
                            />

                            
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            <input
                            type="email"
                            id="email"
                            className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                            onChange={handleChange}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-slate-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>

                        <div className="relative">
                            <input
                            type="password"
                            id="password"
                            className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                            onChange={handleChange}
                            />

                            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 text-slate-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-500">
                            Have an account?
                            <Link to={'/sign-in'}>
                                <a className="underline font-bold"> Sign In</a>
                            </Link>
                        </p>

                        <button
                        disabled={isLoading}
                        className="inline-block rounded bg-slate-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-slate-500"
                        >
                        {isLoading?"Loading...":"Sign up"}
                        </button>
                    </div>
                </form>
                {error&& <p className='text-red-500 '>{error}</p>}
            </div>
        </>
    )
}
