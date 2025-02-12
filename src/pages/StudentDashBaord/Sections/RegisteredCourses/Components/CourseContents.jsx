import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StudentDashboardContext } from "@/contexts/StudentDashboardContext";
import { getChaptersQuery } from "@/reactQuery/chapterQuery";
import Loader from "@/components/Loader";
import { playChapterSvg } from "@/constants";
import { closeMenu, openMenu } from "@/constants";
import CourseVideosSwiper from "./CourseVideosSwiper";
import { SidebarOpen } from "lucide-react";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);

  return getCourseChapters.isLoading ? (
    <Loader />
  ) : (
    <div className="container flex gap-1 h-screen bg-violetLightGrayish-400">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen || "lg:" ? "block " : "hidden "
        } fixed lg:relative inset-0 lg:inset-auto  z-50 lg:z-0 transition-transform transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="max-w-52 min-w-52 h-full max-h-full flex flex-col items-center border rounded-l-xl m-2 border-blueVeryDark-400 border-dashed shadow-xl py-4 bg-white">
          <div className="text-3xl text-blueVeryDark-950">الفصول</div>
          <ul className="mt-2 text-gray-700 capitalize">
            {getCourseChapters?.data?.courseChapters?.map((chapter, index) => (
              <li
                onClick={() => {
                  setCurrentChapter(index);
                  if (window.innerWidth < 768) setIsSidebarOpen(false); // Close sidebar on small screens after selection
                }}
                key={index}
                className="mt-3 p-2 hover:text-blueVeryDark-950 rounded-lg hover:translate-y-1 hover:-translate-x-1"
              >
                <Link
                  to={""}
                  className="flex border-b border-blueVeryDark-400 gap-1.5 items-center"
                >
                  <img src={playChapterSvg} className="h-6 w-6" />
                  <span className="text-sm line-clamp-2">{chapter.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar Toggle Button for Small Screens */}

      {/* Body */}
      <div className="container h-full border rounded-xl my-2 p-4 ml-2 md:ml-60 border-blueVeryDark-400 border-dashed">
        <div className="container h-full flex flex-col gap-y-2">
          <div className="flex justify-between items-baseline">
            <div className="text-3xl text-blueVeryDark-950 px-2">
              {getCourseChapters?.data?.courseChapters[currentChapter]?.name}
            </div>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden z-50 bg-blueVeryDark-400 text-white px-4 py-2 rounded-md shadow-lg"
            >
              {isSidebarOpen ? (
                <img src={closeMenu} className="size-6" />
              ) : (
                <img src={openMenu} className="size-6" />
              )}
            </button>
          </div>
          <div className="px-2 text-blueVeryDark-600">
            {
              getCourseChapters?.data?.courseChapters[currentChapter]
                ?.description
            }
          </div>
          <div className="flex items-center justify-center container h-full bg-red-300">
            <div className="bg-green-200 size-5/6">
              <CourseVideosSwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
