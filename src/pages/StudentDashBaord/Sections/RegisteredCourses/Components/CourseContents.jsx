import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StudentDashboardContext } from "@/contexts/StudentDashboardContext";
export default function CourseContents() {
  const { id } = useParams();
  const { setIsCourseOpened } = useContext(StudentDashboardContext);
  useEffect(() => {
    setIsCourseOpened(true);
    return () => {
      setIsCourseOpened(false);
    };
  });

  return <div className="w-full h-[400px]">CourseContents{id}</div>;
}
