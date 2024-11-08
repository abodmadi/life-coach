import React from 'react'
import style from "@/styles/loader.module.css"
export default function Loader() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <span className={`${style.loader} `}></span>
    </div>
  )
}
