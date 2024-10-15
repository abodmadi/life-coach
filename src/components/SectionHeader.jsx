import React from "react";

export default function SectionHeader({ text1, text2, desc }) {
  return (
    <div className="     flex  flex-col  text-center md:text-right  border-b border-blueVeryDark-200 pb-6 pt-24">
      <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-blueVeryDark-700">
        {text1}{" "}
        {text2 && <span className="text-blueVeryDark-950">{text2}</span>}
      </h1>
      <p className="text-sm font-bold tracking-tight text-blueVeryDark-500">
        {desc}
      </p>
    </div>
  );
}
