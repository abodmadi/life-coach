import {
    getData,
    setData,
    deleteData,
    updateData,
  } from "@/Services/AxiosAPIServices";
  import { useQuery, useQueryClient } from "@tanstack/react-query";
import { enrollmentUrl } from "@/utils";
export const getEnrollmentQuery = (endpoint) => {
  return useQuery({
    queryKey: ["enrollment", endpoint],
    queryFn: async () => await getData(enrollmentUrl + endpoint),
    refetchOnWindowFocus: false, // Prevent refetching on window focus
  });
}

