import React from 'react'
import {useParams } from 'react-router-dom'


export default function CourseDetails() {
    const {id} = useParams()
    return (
        <div>
            <div className='h-screen flex justify-center items-center'>
                <p> Course ID: {id}</p>
            </div>
        </div>
    )
}
