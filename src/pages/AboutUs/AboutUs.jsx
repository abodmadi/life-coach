import React from "react";
import Hero from "./Components/Hero";
import SectionHeader from "@/components/SectionHeader";
import AcademicDegrees from "./Components/AcademicDegrees";
import Skills from "./Components/Skills";

export default function AboutUs() {
  return (
    <div className="bg-violetLightGrayish-400 font-elMessiri">
      <div className="container w-10/12">
        <SectionHeader text1={"عن"} text2={"محمد رفعت"} />
      </div>
      <Hero />
      <div className="mt-16">
        <AcademicDegrees />
      </div>
      <Skills />
    </div>
  );
}
