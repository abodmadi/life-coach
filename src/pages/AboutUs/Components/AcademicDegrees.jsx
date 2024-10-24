import { academicDegreesList } from "@/constants";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function AcademicDegrees() {
  const swiperRef = useRef();
  const swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
  };
  return (
    <div className="container my-8 py-2 w-10/12 px-4 sm:px-6 lg:px-8">
      <div className="mb-14 ">
        <h2 className="text-3xl text-center font-bold text-blueVeryDark-900 mb-6">
          الدرجات العلمية والتعليم
        </h2>
        <p className="text-lg text-blueVeryDark-500 text-center">
          من خلال التزامي بالتعليم المستمر والتطور الشخصي، أحرص دائمًا على توسيع
          معرفتي ومهاراتي في مجال التدريب والتنمية الشخصية. فيما يلي بعض من أبرز
          الدرجات العلمية والشهادات التي حصلت عليها.
        </p>
      </div>
      <div>
        {/*Slider Wrapper*/}
        <Swiper
          ref={swiperRef}
          {...swiperConfig}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "fraction",
          }}
        >
          {academicDegreesList.map((item, index) => (
            <SwiperSlide className="h-auto" key={index}>
              <div className="flex flex-col p-3">
                <div className="mb-3 pb-3 border-b border-solid border-blueVeryDark-300">
                  <h6 className="text-2xl md:text-3xl text-blueVeryDark-900 font-semibold mb-1">
                    {item.title}
                  </h6>
                  <span className="text-sm md:text-lg text-blueVeryDark-500">
                    {item.platform} - {item.date}
                  </span>
                </div>
                <p className="text-blueVeryDark-500 leading-6 text-md">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-x-8 items-center justify-center">
        <button
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="p-2.5 group flex justify-center items-center text-blueVeryDark-700 size-12 transition-all duration-500 rounded-full hover:text-blueVeryDark-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M11.6158 5L16.6669 10.0511M16.6669 10.0511L11.6158 15.1022M16.6669 10.0511L1.66699 10.0511"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="swiper-pagination text-blueVeryDark-700 text-lg" />
        <button
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="p-2.5 group flex justify-center items-center text-blueVeryDark-700 size-12 transition-all duration-500 rounded-full hover:text-blueVeryDark-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.38413 15.1022L3.33301 10.0511M3.33301 10.0511L8.38413 5M3.33301 10.0511L18.3329 10.0511"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

{
  /*<div className="mx-auto mt-8 max-w-7xl px-8">
      <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 overflow-hidden mx-0 max-w-none">
        
        {academicDegreesList.map((item,index)=>(
             <div key={index} >
          <time dateTime="2021-08" className="flex items-center text-sm font-semibold leading-normal text-blueVeryDark-900">
            <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-1 ml-3 size-1  flex-none ">
              <circle r={2} cx={2} cy={2} fill="currentColor" />
            </svg>
            {item.date}
            <div
              aria-hidden="true"
              className="h-px w-1/2 scale-x-125 bg-blueVeryDark-200 static mr-3 -translate-x-7"
            />
          </time>
          <p className="mt-6 text-lg font-semibold leading-normal tracking-tight text-blueVeryDark-800">{item.title}</p>
          <p className="mt-1 text-base leading-normal text-violet-300">
            {item.description}
          </p>
        </div>
        ))}
       

         <div>
          <time dateTime="2021-12" className="mb zp axa axj axs azl">
            <svg viewBox="0 0 4 4" aria-hidden="true" className="ks no rs ve">
              <circle r={2} cx={2} cy={2} fill="currentColor" />
            </svg>
            Dec 2021
            <div
              aria-hidden="true"
              className="aa hw pu uf wa aju ccv cxw dbj dbx der dfk dfx"
            />
          </time>
          <p className="lo awy axj axu aya ayy">Secured $65m in funding</p>
          <p className="ky awv axt ayv">
            Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque
            minima impedit sapiente a architecto nihil.
          </p>
        </div>
        <div>
          <time dateTime="2022-02" className="mb zp axa axj axs azl">
            <svg viewBox="0 0 4 4" aria-hidden="true" className="ks no rs ve">
              <circle r={2} cx={2} cy={2} fill="currentColor" />
            </svg>
            Feb 2022
            <div
              aria-hidden="true"
              className="aa hw pu uf wa aju ccv cxw dbj dbx der dfk dfx"
            />
          </time>
          <p className="lo awy axj axu aya ayy">Released beta</p>
          <p className="ky awv axt ayv">
            Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur
            ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.
          </p>
        </div>
        <div>
          <time dateTime="2022-12" className="mb zp axa axj axs azl">
            <svg viewBox="0 0 4 4" aria-hidden="true" className="ks no rs ve">
              <circle r={2} cx={2} cy={2} fill="currentColor" />
            </svg>
            Dec 2022
            <div
              aria-hidden="true"
              className="aa hw pu uf wa aju ccv cxw dbj dbx der dfk dfx"
            />
          </time>
          <p className="lo awy axj axu aya ayy">Global launch of product</p>
          <p className="ky awv axt ayv">
            Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id
            architecto voluptatem hic aut pariatur velit.
          </p>
        </div> 

      </div>
    </div>*/
}
