import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { requestPaymentMethodsList,requestWhatsAppList } from "@/constants";
import React from "react";
import { Outlet, useOutlet } from "react-router-dom";

export default function RequestForms() {
  const isOutlet = useOutlet();
  return (
    <div className="bg-violetLightGrayish-400">
      {isOutlet ? (
        <Outlet />
      ) : (
        <div className="container w-10/12 ">
          <SectionHeader text1={"طرق"} text2={"حجز الدورات"} />
          <div className="flex flex-col items-start ">
            <div className="px-3 text-xl md:text-3xl text-blueVeryDark-900 my-6">
              هنالك طريقتين لكي تكون معنا في هذة الرحلة الشيقة
            </div>
            <div className="flex flex-col md:flex-row  ">
              <div className="lg:mx-5 p-1 ">
                <div className="text-lg md:text-xl text-blueVeryDark-500 ">
                  الطريقة الأولي: (الدفع الإلكتروني)
                </div>
                <ol className="relative border-s border-blueVeryDark-900 mx-8 my-8">
                  {requestPaymentMethodsList.map((item, index) => (
                    <li key={index} className="mb-10 ms-6 ">
                      <span className="absolute text-blueVeryDark-900 flex items-center justify-center w-6 h-6 bg-blueVeryDark-100 rounded-full -start-3 ring-8 ring-blueVeryDark-400/60">
                        {index + 1}
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-blueVeryDark-900 ">
                        {item.title}
                      </h3>
                      <ul className="list-disc lg:mb-4 lg:mx-8 text-base font-normal text-blueVeryDark-500 ">
                        {item.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="lg:mx-5 p-1">
                <div className="text-lg md:text-xl text-blueVeryDark-500 ">
                  الطريقة الثانية (الواتساب)
                </div>
                <ol className="relative border-s border-blueVeryDark-900 mx-8 my-8">
                  {requestWhatsAppList.map((item, index) => (
                    <li key={index} className="mb-10 ms-6 ">
                      <span className="absolute text-blueVeryDark-900 flex items-center justify-center w-6 h-6 bg-blueVeryDark-100 rounded-full -start-3 ring-8 ring-blueVeryDark-400/60">
                        {index + 1}
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-blueVeryDark-900 ">
                        {item.title}
                      </h3>
                      <ul className="list-disc lg:mb-4 lg:mx-8 text-base font-normal text-blueVeryDark-500 ">
                        {item.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-8 py-8">
            <Button text={"الدفع الإلكتروني"} toPage={"payment-way"} />
            <Button
              text={"الواتساب"}
              toPage={
                "https://api.whatsapp.com/send/?phone=%2B201023050092&text&type=phone_number&app_absent=0"
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
{
  /* <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Figma v1.3.0
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 7th, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Flowbite Library v1.2.2
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on December 2nd, 2021
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
        </li> */
}
{
  /*  <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg
              className="w-3.5 h-3.5 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>{" "}
            Download ZIP
          </a> */
}
{
  /* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span> */
}
{
  /* <div className="w-full max-w-lg">
        <div className="flex gap-x-5 items-center">
          <Button text={"payment way"} toPage={"/request-form/payment-way"}></Button>
          <Button text={"whats app"} toPage={"/request-form/whats-app"}></Button>
        </div>
        <Outlet/>
      </div> */
}
