import React from "react";
import { useParams } from "react-router-dom";

export default function CourseContents() {
  const { id } = useParams();

  return <div>CourseContents{id}</div>;
}
