import { Link } from "react-router-dom";
import Button from "./Button";

export default function Error({code,title,message,backOption=false}) {
  return (
    <section className="bg-violetLightGrayish-400 font-elMessiri h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-blueVeryDark-950">
            {code}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-blueVeryDark-700 md:text-4xl ">
            {title}
          </p>
          <p className="mb-4 text-lg text-blueVeryDark-400 ">
           {message}
          </p>
          {backOption && <Button text={"الرجوع للصفحة الرئيسية"} toPage={"/"}/>}
        </div>
      </div>
    </section>
  );
}
