import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function CourseVideosSwiper({ CourseVideos }) {
  return (
    <Swiper
      scrollbar={{
        hide: false,
        draggable: true,
      }}
      modules={[Scrollbar]}
      className="mySwiper bg-blue-400 p-4 max-w-screen-xl h-full"
    >
      {CourseVideos.map((video, index) => (
        <SwiperSlide key={index}>
          <div className=" bg-orange-300 mx-2 h-full p-2">
            <iframe
              title="Video 1"
              width="100%"
              height="100%"
              src={video.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
