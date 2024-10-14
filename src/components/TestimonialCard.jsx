import React from "react";

export default function TestimonialCard({id}) {
  return (
    <div className=" flex max-w-sm flex-col gap-6 rounded-xl border border-gray-300 bg-gray-100 p-8 sm:max-w-lg">
      <div className="flex gap-4">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844"
          alt=""
          className="inline-block h-16 w-16 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h6 className="text-base font-bold">Jonathan Smith</h6>
          <p className="text-sm text-gray-500">{id}</p>
        </div>
      </div>
      <div>
        I want to express my utmost satisfaction with Elevate AI. This software
        has completely transformed the way we analyze and utilize data in our
        business. Its user-friendly interface, powerful features, and
        exceptional support have exceeded our expectations.
      </div>
    </div>
  );
}
