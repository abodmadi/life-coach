import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const {currentUser} = useSelector((state)=>state.user)
    const fileRef = useRef()
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8 ">
            <form  className="flex flex-col  gap-4">
                <input type="file" ref={fileRef} accept='image/*' hidden />
                <img onClick={()=>fileRef.current.click()} className='cursor-pointer rounded-full w-28 h-28 object-cover self-center' src={currentUser.user.imageUrl} alt="profile" />
                <input
                    type="text"
                    id='fullName'
                    className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={currentUser.user.fullName}
                    />
                <div className="relative">
                    <input
                    type="email"
                    id='email'
                    className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={currentUser.user.email}
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

                <div className="relative">
                    <input
                    type="password"
                    id='password'
                    className="w-full rounded-lg border-slate-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Password"
                    />

                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 text-slate-400"
                            fill="none"
                            cursor={'pointer'}
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
                <button
                    className="w-full rounded bg-slate-700 px-8 py-3 text-sm font-medium text-white hover:opacity-95 disabled:opacity-80"
                    >
                    Update
                </button>

            </form>
            <div className="flex justify-between mt-5">
                <span className="text-red-700 hover:text-red-500 cursor-pointer"> Delete Account</span>
                <span className="text-red-700 hover:text-red-500 cursor-pointer"> Sign out</span>
            </div>
        </div>
    )
}
