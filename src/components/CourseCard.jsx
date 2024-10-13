import React from 'react'
import {Link} from 'react-router-dom'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Icons from './Icons';

export default function CourseCard({course}) {
    return (
        <Link to={`/course-details/${course.id}`}>
            <div className='group hover:border-slate-700 transition overflow-hidden border rounded-lg p-3 h-full'>
                <div className="w-full aspect-video rounded-md overflow-hidden">
                    <img className='object-fill h-full w-full' src={course.image} alt="course image" />
                </div>
                <div className="flex flex-col pt-2">
                    <p className="text-xs md:text-sm lg:text-xs text-slate-500">
                        {course.type.name}
                    </p>
                    <div className="text-lg md:text-base lg:text-lg text-slate-800 group-hover:opacity-80 transition line-clamp-2">
                        {course.title}
                    </div>
                    <p className="text-xs/relaxed md:text-sm/relaxed lg:text-xs/relaxed text-slate-500 line-clamp-2">
                        {course.description}
                    </p>
                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs lg:text-sm">
                        <div className="flex items-center gap-x-1 text-slate-600">
                            <Icons icon={faBookOpen}/>
                        </div>
                        <span className='text-slate-500'>
                            {course.chapters.length} {course.chapters.length !== 1 ? "Chapters" : "Chapter"}
                        </span>
                    </div>
                    <p className="text-md md:text-sm lg:text-md text-slate-800">
                        ${course.price}
                    </p>
                </div>
            </div>
        </Link>
    )
}
