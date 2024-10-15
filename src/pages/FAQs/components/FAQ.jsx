import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";
function FAQ() {
  // State to keep track of which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // List of FAQs
  const faqs = [
    {
      question: "منشئ نص مزيف لوريم إيبسوم متصل ماذا يعني لوريم إيبسوم الم؟",
      answer:
        "إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال..",
    },
    {
      question: "منشئ نص مزيف لوريم إيبسوم متصل ماذا يعني لوريم إيبسوم الم؟",
      answer:
        "إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال..",
    },
    {
      question: "منشئ نص مزيف لوريم إيبسوم متصل ماذا يعني لوريم إيبسوم الم؟",
      answer:
        "إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال..",
    },
    {
      question: "منشئ نص مزيف لوريم إيبسوم متصل ماذا يعني لوريم إيبسوم الم؟",
      answer:
        "إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال..",
    },
  ];

  return (
    <section className="bg-blueLightGrayish-200">
      <div className="container mx-auto w-10/12 font-elMessiri">
        <SectionHeader
          text1={" الأسئلة "}
          text2={"الشائعة "}
          desc={"الاسئلة المتكررة لبعض المستخدمين"}
        />
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5  md:px-10 pb-8">
          <div className="mt-10 flex w-full  max-w-4xl flex-col">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative my-3 w-full rounded-md border border-gray-300 px-12 py-8"
              >
                <div className="max-w-3xl">
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-blueVeryDark-700">
                    {faq.question}
                  </h2>
                  {openFAQ === index && (
                    <p className="font-inter mt-4 text-sm md:text-base font-light text-blueVeryDark-400">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <button
                  className="absolute text-blueVeryDark-700 right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white"></circle>
                    <path
                      d="M7.04688 11.9999H16.9469"
                      stroke="currentColor"
                      strokeWidth="2" // React uses camelCase
                      strokeLinecap="round" // React uses camelCase
                      strokeLinejoin="round" // React uses camelCase
                    ></path>
                    <path
                      d="M12 7.05005V16.95"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${
                        openFAQ === index ? "opacity-0" : "opacity-100"
                      } transition-opacity duration-100 ease-in-out`}
                    ></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
          <p className="font-inter mx-auto mt-12 text-base text-blueVeryDark-400 text-center">
            لم تجد سؤالك ؟
            <Link
              to={"/contact-us"}
              className="text-blueVeryDark-700 font-bold"
            >
              {" "}
              تواصل معنا
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
