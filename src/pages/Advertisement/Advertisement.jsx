//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../../assets/images/heroImage.jpg";
import Button from "../../components/Button";

export default function Advertisement() {
  return (
    <div className="bg-blueLightGrayish-950 min-h-screen w-screen">
      <div className="h-full container w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-full md:w-1/2 h-full  flex flex-col  justify-center items-center">
          <div>
            <h1 className="p-8  text-4xl text-blueVeryDark-950 font-elMessiri font-extrabold">
              استعد لرحلة استثنائية لتحقيق أهدافك!
            </h1>
          </div>
          <div className="">
            <p className="text-xl  text-blue-500 font-elMessiri">
              <span className="text-2xl text-blueVeryDark-950 font-extrabold">
                دورة جزيرة الكنز{" "}
              </span>{" "}
              رحلة البحث عن "الهدف المنشود" تبدأ في <span>01-01-2025 </span>{" "}
              <FontAwesomeIcon icon={faWater} /> انطلق معنا في هذه المغامرة
              لتكتشف هدفك وتحقق ما تطمح إليه!{" "}
              <FontAwesomeIcon icon={faRocket} />{" "}
              <span className="text-2xl text-blueVeryDark-950 font-extrabold">
                لأول 25 مشترك{" "}
              </span>{" "}
              ، خصم خاص بنسبة 75%! السعر بعد الخصم فقط 25 دولار (بدلاً من 100
              دولار).
            </p>
          </div>
          <Button
            toPage={"/about"}
            text={"احجز مكانك الآن ولا تفوّت الفرصة!"}
          />
        </div>

        <div className="w-full md:w-1/2 h-full p-12">
          <div className="w-full h-full bg-violetLightGrayish-600 ">
            <div className="-translate-x-2 -translate-y-2 w-full h-full bg-violetLightGrayish-950 ">
              <img
                src={heroImage}
                alt="hero image"
                className="-translate-x-3 -translate-y-3 w-full h-full object-cover  shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
