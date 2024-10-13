import React, { useState } from 'react'
import { sideBarItems } from '../constants/index.js'

export default function SideBar() {
  const [currentIndex,setCurrentIndex] = useState(0)
  const [isOpen,setIsOpen]= useState(false)

  const toggleButton=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='w-16 sm:w-64'>
      {/* Button */}
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        onClick={toggleButton}
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-slate-500 rounded-lg sm:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      {/* SideBar */}
      <aside
        id="sidebar-multi-level-sidebar"
        className={` w-64 h-screen transition-transform ${!isOpen?'-translate-x-full':'-translate-x-0'} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <ul className="space-y-2 font-medium">
          {isOpen ? 
            <li>
              <div className="flex justify-end items-center">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleButton}  className="rounded-md text-gray-500 hover:bg-gray-100 cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </li>
          : <></>}
            {sideBarItems.map((item)=>(
                <li key={item.title}>
                <a
                  onClick={()=>setCurrentIndex(1)}
                  className="flex cursor-pointer items-center p-2 text-slate-200 rounded-lg  hover:bg-slate-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-slate-500 transition duration-75  group-hover:text-slate-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    {item.svgPaths.map((d)=>(
                      <path key={d} d={d} />
                    ))}
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  )
}
