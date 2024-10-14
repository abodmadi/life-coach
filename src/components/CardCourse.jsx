import React from "react";
import Button from "./Button";

export default function CardCourse({ item }) {
  return (
    <>
      <div className="min-h-screen font-elMessiri flex justify-center items-center">
        <div className="container flex justify-center">
          <div className="max-w-sm py-10">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img className="rounded-t-lg" src={item.imageUrl} alt="" />
              <div className="py-6 px-8 rounded-lg bg-white">
                <h1 className="text-blueVeryDark-700 font-bold line-clamp-2 text-2xl mb-3 hover:text-blueVeryDark-900 hover:cursor-pointer ">
                  {item.title}
                </h1>
                <p className="text-blueVeryDark-400 line-clamp-4 tracking-wide">
                  {item.description}
                </p>
                <div className="mt-6 ">
                  {" "}
                  <Button toPage={"/"} text={"أحجز الان"} />
                </div>
              </div>
              <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                <span className="text-md">${item.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
