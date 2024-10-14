import React from "react";
import Marquee from "@/components/Marquee";
import MarqueeCard from "@/components/MarqueeCard";
export default function Testimonial() {
  return (
    <div className="bg-blueLightGrayish-200 py-10 font-elMessiri  ">
      <div className="container w-10/12 ">
        <div className="text-center mb-20 ">
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-blueVeryDark-700 mb-4">
            أراء <span className=" text-blueVeryDark-950">العملاء</span>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-blueVeryDark-700">
            آراء و تعليقات العملاء عن ما أقدمه من دورات و جلسات
          </p>
          <div className="flex mt-6 mb-7 justify-center">
            <div className="w-32 h-1 rounded-full bg-blueVeryDark-950 inline-flex" />
          </div>
        </div>
        <div className="relative flex max-h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-blueLightGrayish-200 ">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((review, index) => (
              <MarqueeCard item={review} key={index} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {reviews.map((review, index) => (
              <MarqueeCard item={review} key={index} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blueLightGrayish-200 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blueLightGrayish-200 dark:from-background"></div>
        </div>
      </div>
    </div>
  );
}

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
