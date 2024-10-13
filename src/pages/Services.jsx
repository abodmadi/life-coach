import React from 'react'
import ServiceCard from '../components/ServiceCard';
import { Outlet,useLocation } from 'react-router-dom';
import { servicesList } from '../constants/index.js';

export default function Services() {
    const location = useLocation().pathname.split("/").slice(1) 
    const services = servicesList;
    return (
        <div>
            {location == "services" && <div className='flex justify-center items-center p-10 bg-slate-100'>
                    <div className="grid grid-rows-1 sm:grid-cols-2 gap-2 sm:max-w-3xl">
                        {
                            services.map((service)=>(
                                <ServiceCard key={service.id} service={service}/>
                            )) 
                        }
                    </div>
                </div>
            }
            <Outlet></Outlet>
        </div>
    );
}