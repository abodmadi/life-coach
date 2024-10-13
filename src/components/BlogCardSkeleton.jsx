import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function BlogCardSkeleton({count}) {
    return (
        Array(count).fill(0).map((item)=>(
            <article key={item} className="flex m-5 bg-white transition hover:shadow-md">
                <div className="hidden sm:block sm:basis-56">
                    <Skeleton className='aspect-square h-full w-full object-cover'/>
                    
                </div>

                <div className="flex flex-1 flex-col justify-between">
                    <div className="border-slate-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <time className="block max-w-16 sm:max-w-36"> {<Skeleton />} </time>
                        
                        <Skeleton className='max-w-36 sm:max-w-96' count={2}/>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-slate-700">
                            <Skeleton count={3} />
                        </p>
                    </div>

                    <div className="sm:flex sm:items-end sm:justify-end">
                        <Skeleton className='h-full w-full px-14 py-4 text-center'/>
                    </div>
                </div>
            </article>
        ))
        
    )
}
