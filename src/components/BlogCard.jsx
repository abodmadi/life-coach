import React from 'react'

export default function BlogCard({date,image,title,description,link}) {
    return (
        <>  
            <article className="flex bg-white transition hover:shadow-md">

                <div className="hidden sm:block sm:basis-56">
                    <img
                    alt="blog image"
                    src={image}
                    className="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-s border-slate-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <time className="block text-xs text-slate-500"> {date} </time>
                        <a href={link}>
                            <h3 className="font-bold uppercase text-slate-900">
                                {title}
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-slate-700">
                            {description}
                        </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                        <a
                            href={link}
                            className="block bg-slate-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-slate-400"
                        >
                            See Video
                        </a>
                    </div>

                </div>
            </article>
        </>
    )
}
