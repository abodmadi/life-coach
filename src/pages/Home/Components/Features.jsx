import React from "react";
import { FeaturesList } from "../../../constants";
export default function Features() {
  return (
    <section className="bg-violetLightGrayish-400 text-blueVeryDark-700 font-elMessiri">
      <div className="container px-5 py-24 mx-auto">
        {/* Features Title */}
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-blueVeryDark-700 mb-4">
            لماذا <span className=" text-blueVeryDark-950">نحن</span>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-blueVeryDark-700">
            نساعدك على اكتشاف مسارك نحو القمة
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-blueVeryDark-950 inline-flex" />
          </div>
        </div>
        {/* Features Card */}
        <div className="flex flex-wrap md:justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {FeaturesList.map((item, index) => (
            <div
              key={index}
              className="p-4 sm:w-1/2 md:w-1/3 flex flex-col shadow-sm text-center items-center"
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-violetLightGrayish-800 text-blueVeryDark-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className={`${item.name=="24h"?"size-32":"size-20"} text-center`}
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  
                  viewBox="-5.0 -10.0 110.0 135.0"
                >
                  <g>
                    {item.icon.map((d, index) => (
                      <path key={index} d={d} />
                    ))}
                  </g>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-blueVeryDark-950 text-lg title-font font-medium mb-3">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
