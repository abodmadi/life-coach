import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import { SkillsList } from "@/constants";
export default function Skills() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperConfig = {
    centeredSlides: false,
    loop: true,
    spaceBetween: 32,
  };
  const swiperConfig2 = {
    loop: true,
    centeredSlides: false,
    spaceBetween: -10,
    slidesPerView: 2,
    watchSlidesProgress: true,
  };
  return (
    <section className="container my-10 py-8 w-10/12">
      <div>
        {/* Slider 1 */}
        <Swiper
          {...swiperConfig}
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {SkillsList.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="relative mb-20">
                <div className="max-w-max mx-auto lg:max-w-4xl text-center">
                  <h1 className="text-2xl md:text-4xl text-blueVeryDark-900 mb-1">
                    {skill.title}
                  </h1>
                  <p className="text-lg md:text-xl text-blueVeryDark-500 leading-8 ">
                    {skill.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Slider 2 */}
        <Swiper
          {...swiperConfig2}
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          breakpoints={{
            640: {
              slidesPerView: 3,
              
            },
            768: {
              slidesPerView: 4,
              
            },
            1024: {
              slidesPerView: 5,
              
            },
          }}
        >
          {SkillsList.map((skill, index) => (
            <SwiperSlide key={index}>
              <img
                src={skill.icon}
                alt={`skill icon ${index}`}
                className="mx-auto scale-90 transition-all duration-300 w-20 h-20 p-1.5 border rounded-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
