import heroImage from "../../../assets/images/heroImage.jpg"

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faWater } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button";
// madi 
function Hero() {
  return (
    <div className="bg-blueLightGrayish-950 min-h-screen flex items-center">
      
      <div className="p-4 container w-10/12 max-h-full flex flex-col lg:flex-row  items-center justify-center gap-8">
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-7">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blueVeryDark-950 font-elMessiri font-extrabold text-center lg:text-right">
            استعد لرحلة استثنائية لتحقيق أهدافك!
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blueVeryDark-700 font-elMessiri text-center lg:text-right">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blueVeryDark-950 font-extrabold">
              دورة جزيرة الكنز
            </span>{" "}
            رحلة البحث عن "الهدف المنشود" تبدأ في <span>01-01-2025</span>{" "}
            <FontAwesomeIcon
              icon={faWater}
              className="inline-block w-4 h-4 sm:w-5 sm:h-5"
            />{" "}
            انطلق معنا في هذه المغامرة لتكتشف هدفك وتحقق ما تطمح إليه!{" "}
            <FontAwesomeIcon
              icon={faRocket}
              className="inline-block w-4 h-4 sm:w-5 sm:h-5"
            />{" "}
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blueVeryDark-950 font-extrabold">
              لأول 25 مشترك
            </span>{" "}
            ، خصم خاص بنسبة 75%! السعر بعد الخصم فقط 25 دولار (بدلاً من 100
            دولار).
          </p>
          <Button
            toPage="/"
            text="احجز مكانك الآن ولا تفوّت الفرصة!"
          />
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 aspect-square relative">
          <div className="absolute inset-0 bg-blueVeryDark-200  transform translate-x-3 translate-y-2"></div>
          <div className="absolute inset-0 bg-blueVeryDark-300 shadow-sm transform translate-x-2 translate-y-1"></div>
          <img
            src={heroImage}
            alt="hero image"
            className="absolute inset-0 w-full h-full object-cover shadow-md transform translate-x-1"
          />
        </div>

      </div>

    </div>
  );
}

export default Hero;


/* import React from "react";
import { Link } from "react-router-dom";
import homeImage from "./../../../assets/heroImage.jpg";
import Button from "../../../components/Button";

export default function Hero() {
  return (
    <>
    
      <section className="bg-blueLightGrayish-950 font-elMessiri">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="section 1 image"
                src={homeImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Invest in yourself with a life coach focused on helping you be
                the best version of yourself.
              </h2>

              <p className="mt-4 text-gray-600">
                "Join us today and begin your journey towards transformation and
                fulfillment."
              </p>
              <Link to={"/profile"}>
                <Button text={"Join Now"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 */
//import React from "react";
