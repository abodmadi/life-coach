import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
];

export default function CourseVideosSwiper() {
  const [progress, setProgress] = useState(50);
  const videoRefs = useRef([]);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        onSlideChange={(swiper) => {
          setProgress(((swiper.activeIndex + 1) / videos.length) * 100);
          videoRefs.current.forEach((video, index) => {
            if (index === swiper.activeIndex) {
              video?.play();
            } else {
              video?.pause();
            }
          });
        }}
        className="relative"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="h-2 bg-gray-300  mt-4 w-full translate-y-2">
              <div
                className="h-full bg-blue-500  transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              className="w-full h-64 sm:h-96 object-cover rounded-lg"
              controls
              muted
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function CourseVideosSwiper({ CourseVideos }) {
  const [swiperProgress, setSwiperProgress] = useState(50);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper bg-blue-400 p-4 h-full"
        onSlideChange={(swiper) => {
          const progress =
            ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
          console.log(progress);
          setSwiperProgress(progress);
        }}
      >
        {CourseVideos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className=" bg-orange-300 mx-2 w-full h-full p-2">
              <iframe
                title="Video 1"
                width="100%"
                height="100%"
                src={video.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
             
              <div className="w-full h-1 bg-gray-500 ">
                <div
                  className="h-full bg-green-600 transition-all duration-300"
                  style={{ width: `${swiperProgress}%` }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
 */
