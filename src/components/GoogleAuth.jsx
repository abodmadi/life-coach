import React from 'react'
import {GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase'
import { useDispatch } from 'react-redux'
import { signInStart,signInSuccess,signInFailure } from '../redux/state_slices/user/user_slice'
import { useNavigate } from 'react-router-dom'

export default function GoogleAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleClick = async ()=>{
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const response = await signInWithPopup(auth,provider)

            const dataForm = {
                fullName:response.user.displayName,
                email:response.user.email,
                imageUrl:response.user.photoURL,
            }
            
            const googleResponse = await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(dataForm)
            })

            const responseBody = await googleResponse.json()

            dispatch(signInSuccess(responseBody))
            console.log(responseBody)
            navigate('/')
        } catch (error) {
            console.log(`Couldn't sign in using google account: ${error}`)
        }
    }
    return (
        <button onClick={handleClick} type='button' className='w-full inline-block rounded bg-slate-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-105 focus:outline-none focus:ring active:bg-slate-500'>
            Continue With Google
        </button>
    )
}
