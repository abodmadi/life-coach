import { FilterProvider } from "../../contexts/FilterContext";
import Filters from "./Components/Filters";
import { Outlet, useOutlet } from "react-router-dom";
//comment
export default function Courses() {
  const isOutlet = useOutlet();
  return isOutlet ? (
    <Outlet />
  ) : (
    <section className="bg-blueLightGrayish-200">
      <div className="font-elMessiri container mx-auto w-11/12">
        <FilterProvider>
          <Filters />
        </FilterProvider>
      </div>
    </section>
  );
}

//-----------------------------------------------------------------
//import CourseCard from "../../components/CourseCard";
//import SideBar from "../../components/SideBar";
/*const [courses,setCourses] = useState([])

    useEffect(()=>{
        const handelAPI = async () =>{
            const response = await fetch('/api/course/all',{
                method:'GET',
            })
            const responseBody = await response.json()
            setCourses(responseBody.courses)
        }
        handelAPI()
    },[]) */
/* <div className="flex justify-between gap-x-1 bg-slate-100">
            <SideBar />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 p-3 h-full w-screen">
                {courses.map((course)=>(
                    <CourseCard course={course} key={course.id}/>
                ))}
            </div>
        </div> */
