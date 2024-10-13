import React from 'react'
import {Link} from 'react-router-dom'

export default function ServiceCard({service}) {
    return (
        <Link to={service.to} >
            <div key={service.id}  className="group relative block bg-black">
                <img
                    alt="service image"
                    src= {service.imageUrl}
                    className="absolute text-white inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">

                    <p className="text-xl font-bold text-slate-200 sm:text-2xl">{service.title}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-slate-200">
                            {service.description? service.description :" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
