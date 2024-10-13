import React from "react";
import TestimonialCard from "../../../components/TestimonialCard";
//import styles from "../../../styles/Testimonial.module.css"; // Import the CSS module

export default function Testimonial() {
  const testimonialList = [1,2,3,3,3,3,3,3,3,3,3,3,3];

  return (
    <section className="bg-blueLightGrayish-200">
      {/* Container */}
      <div className="bg-green-500 container mx-auto px-5 py-16 md:px-10 md:py-20">
        {/* Heading Container */}
        <div className="container mx-auto flex flex-col text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            What our clients are saying
          </h2>
          <p className="text-sm sm:text-base">
            ElevateAI's AI-centric solutions have enabled businesses to scale
            greater heights. Here's what they have to say...
          </p>
        </div>

        <div className="overflow-hidden flex">
          <ul className="flex gap-10 animate-infinite-scroll">
            {[...testimonialList, ...testimonialList].map((item, index) => (
              <li className="flex gap-2" key={index}>
                <TestimonialCard />
              </li>
            ))}
          </ul>
        </div>

        {/* Contents 
                <div className="relative mb-5 md:mb-6 lg:mb-8">
                    
                    {/* Row 1 - Infinite Slider 
                    <div className="relative mt-12 overflow-hidden">
                        <div className={`animate-infinite-scroll flex`}>
                            {/* Duplicate the testimonial list for an infinite loop effect 
                            {[...testimonialList, ...testimonialList].map((item, index) => (
                                <div className="flex-none" key={index}>
                                    <TestimonialCard />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Infinite Slider (Reversed Direction) 
                    <div className="relative mt-12 overflow-hidden">
                        <div className={`flex animate-infinite-scroll-revise`}>
                            {/* Duplicate the testimonial list 
                            {[...testimonialList, ...testimonialList].map((item, index) => (
                                <div className="flex-none" key={index}>
                                    <TestimonialCard  id={index}/>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>*/}

        {/* Button */}
        <div className="flex flex-col ">
          <a href="#" className="mx-auto font-bold text-black">
            Check all reviews
          </a>
        </div>
      </div>
    </section>
  );
}
