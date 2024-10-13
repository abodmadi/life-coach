import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import Button from "../../../components/Button";

export default function BlogsSwiper() {
  const swiperRef = useRef();
  const slideList = [1, 2, 3, 4, 5, 6];

  var swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 28,
    centeredSlides: false,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      568: {
        slidesPerView: 2,
        spaceBetween: 28,
        centeredSlides: false,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 28,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 28,
      },
    },
  };

  return (
    <section className="bg-violetLightGrayish-400 py-24 font-elMessiri">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
          {/* Right Side */}
          <div className="w-full flex justify-between flex-col lg:w-2/5">
            {/* Head Line */}
            <div className="block lg:text-right text-center">
              <h2 className="text-4xl font-bold text-blueVeryDark-700 leading-[3.25rem] mb-5">
                أحدث <span className=" text-blueVeryDark-950">المقالات</span>
              </h2>
              <p className="text-blueVeryDark-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">
                مرحبًا بكم في قسم مدونتنا، حيث تلتقي المعرفة بالإلهام. استكشف
                المقالات المفيدة ونصائح الخبراء وأحدث الاتجاهات في مجالنا.
              </p>
              <Button toPage={"/blogs"} text={"شاهد المزيد"} />
            </div>

            {/* Slider controls */}
            <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
              {/* Right */}
              <button
                className="group flex justify-center items-center border border-solid border-blueVeryDark-950 w-11 h-11 transition-all duration-500 rounded-full hover:bg-blueVeryDark-950"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <svg
                  className="h-6 w-6 text-blueVeryDark-950 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Left */}
              <button
                className="group flex justify-center items-center border border-solid border-blueVeryDark-950 w-11 h-11 transition-all duration-500 rounded-full hover:bg-blueVeryDark-950"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <svg
                  className="h-6 w-6 text-blueVeryDark-950 group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Left side */}
          <div className="w-full lg:w-3/5">
            {/*Swiper*/}
            <Swiper
              {...swiperConfig}
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              ref={swiperRef}
            >
              {slideList.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full m-1 rounded-2xl shadow-md max-lg:max-w-xl lg:w-11/12 group">
                    <div className="flex items-center mb-9">
                      <img
                        src="https://pagedone.io/asset/uploads/1696244059.png"
                        alt="blogs tailwind section"
                        className="shadow-md rounded-t-2xl w-full  max-h-52 md:max-h-64 object-cover"
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="text-xl line-clamp-2 text-blueVeryDark-700 font-medium leading-8 mb-4 group-hover:text-blueVeryDark-950">
                        خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ
                        عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ
                        العام 45 قبل الميلاد
                      </h3>
                      <p className="text-blueVeryDark-500 line-clamp-3 leading-6 transition-all duration-500 mb-8">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء
                        لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
                        أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم
                        استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ
                        -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي،
                        هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص
                        مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات
                        الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص،
                        وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر
                        العديد من المواقع الحديثة العهد في نتائج البحث. على مدى
                        السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم،
                        أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض
                        العبارات الفكاهية إليها.
                      </p>
                      <Link
                        to={"/"}
                        className="pb-2 pr-2 cursor-pointer flex items-center gap-2 text-lg text-blueVeryDark-950 font-semibold"
                      >
                        أقراء المزيد
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.75 6L1.75 6M5.5 10.5L1.53033 6.53033C1.28033 6.28033 1.15533 6.15533 1.15533 6C1.15533 5.84467 1.28033 5.71967 1.53033 5.46967L5.5 1.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
