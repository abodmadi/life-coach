import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StudentDashboardContext } from "@/contexts/StudentDashboardContext";
import { getChaptersQuery } from "@/reactQuery/chapterQuery";
import Loader from "@/components/Loader";
import { playChapterSvg } from "@/constants";
import CourseVideosSwiper from "./CourseVideosSwiper";
export default function CourseContents() {
  const { id } = useParams();
  const { setIsCourseOpened } = useContext(StudentDashboardContext);
  useEffect(() => {
    setIsCourseOpened(true);
    return () => {
      setIsCourseOpened(false);
    };
  });

  const getCourseChapters = getChaptersQuery(`/course-chapters/${id}`);
  console.log(getCourseChapters?.data?.courseChapters[0]);

  const [currentChapter, setCurrentChapter] = useState(0);

  return getCourseChapters.isLoading ? (
    <Loader />
  ) : (
    <div className="flex gap-1 h-screen bg-violetLightGrayish-400">
      {/* Sidebar */}
      <div>
        <nav className=" max-w-52 min-w-52 h-full max-h-full flex flex-col items-center border rounded-l-xl m-2 border-blueVeryDark-400 border-dashed shadow-xl  py-4 ">
          <div className="text-3xl text-blueVeryDark-950">الفصول</div>
          <ul className="mt-2 text-gray-700 capitalize">
            {getCourseChapters?.data?.courseChapters?.map((chapter, index) => (
              <li
                onClick={() => {
                  setCurrentChapter(index);
                }}
                key={index}
                className="mt-3 p-2 hover:text-blueVeryDark-950 rounded-lg hover:translate-y-1 hover:-translate-x-1"
              >
                <Link
                  to={""}
                  className=" flex border-b border-blueVeryDark-400 gap-1.5 items-center "
                >
                  <img src={playChapterSvg} className="h-6 w-6" />
                  <span className="text-sm line-clamp-2">{chapter.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Body */}
      <div className="container h-full w-full border rounded-xl my-2 p-4 ml-2  border-blueVeryDark-400 border-dashed">
        <div className="h-full w-full flex flex-col gap-y-2 ">
          <div className=" text-3xl text-blueVeryDark-950 px-2">
            {getCourseChapters?.data?.courseChapters[currentChapter]?.name}
          </div>
          <div className=" px-2 text-blueVeryDark-600">
            {
              getCourseChapters?.data?.courseChapters[currentChapter]
                ?.description
            }
          </div>
          <div className="flex items-center justify-center w-full h-full bg-red-300">
            <div className="bg-green-200 size-5/6">
              <CourseVideosSwiper CourseVideos={getCourseChapters?.data?.courseChapters[currentChapter]
                ?.videos}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
