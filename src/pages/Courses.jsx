import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import SideBar from "../components/SideBar";

export default function Courses() {

    const [courses,setCourses] = useState([])

    useEffect(()=>{
        const handelAPI = async () =>{
            const response = await fetch('/api/course/all',{
                method:'GET',
            })
            const responseBody = await response.json()
            setCourses(responseBody.courses)
        }
        handelAPI()
    },[])
    console.log(courses.courses)
    return (
        <div className="flex justify-between gap-x-1 bg-slate-100">
            <SideBar />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 p-3 h-full w-screen">
                {courses.map((course)=>(
                    <CourseCard course={course} key={course.id}/>
                ))}
            </div>
        </div>
        
    );
}