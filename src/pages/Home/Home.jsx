import Hero from "./Components/Hero";
import Features from "./Components/Features";
import BlogsSwiper from "./Components/BlogsSwiper";
import CoursesSection from "./Components/CoursesSection";
import Testimonial from "./Components/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <CoursesSection />
      <BlogsSwiper />
      <Testimonial/>
    </>
  );
}

/*
// book section 
<section className="bg-slate-100">
<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
            <img
                alt="section 2 image"
                src={bookingImage}
                className="absolute inset-0 h-full w-full object-cover"
            />
            </div>
        </div>

        <div className="relative flex items-center bg-gray-200 ">
            <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-200"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                    Discover your path to growth with personalized sessions.
                </h2>

                <p className="mt-4 text-gray-600">
                    "In a fast-paced and challenging world, finding a guide who understands and supports you is essential to achieving balance and success. With our personalized sessions, you will receive a unique mentoring experience based on a deep understanding of your personal needs and goals".
                </p>
                <Link to={'/sessions'}>
                    <Button text={'Book your session'}/>
                </Link>
            </div>
        </div>
    </div>
</div>
</section>
// Courses List 

// Blog List 
// State 
<section className="bg-slate-100">
<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

        <p className="mt-4 text-slate-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
            provident impedit esse recusandae facere libero harum sequi.
        </p>
    </div>

    <div className="mt-8 sm:mt-12">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
            <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

                <dd className="text-4xl font-extrabold text-slate-600 md:text-5xl">$4.8m</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

                <dd className="text-4xl font-extrabold text-slate-600 md:text-5xl">24</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

                <dd className="text-4xl font-extrabold text-slate-600 md:text-5xl">86</dd>
            </div>
        </dl>
    </div>
</div>
</section>
*/
