import React from "react";
import { useParams } from "react-router-dom";
import Details from "./Components/Details";

export default function CourseDetails() {
  const { id } = useParams();
  return (
    <>
      <div className="bg-violetLightGrayish-400 font-elMessiri">
        <Details />
      </div>
    </>
  );
}
