import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "./Components/Details";
import { useDispatch, useSelector } from "react-redux";
import { setCourseId } from "@/redux/state_slices/course/courseSlice";

export default function CourseDetails() {
  const { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCourseId(id));
  }, []);

  return (
    <>
      <div className="bg-violetLightGrayish-400 font-elMessiri">
        <Details />
      </div>
    </>
  );
}
