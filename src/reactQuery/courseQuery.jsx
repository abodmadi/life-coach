import {
  getData,
  setData,
  deleteData,
  updateData,
} from "@/Services/AxiosAPIServices";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { coursesUrl } from "@/utils";
export const getCoursesQuery = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: async () => await getData(coursesUrl + "/all"),
    refetchOnWindowFocus: false, // Prevent refetching on window focus
  });
};
