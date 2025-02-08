import { chaptersUrl } from "@/utils";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getData } from "@/Services/AxiosAPIServices";

export const getChaptersQuery = (endpoint) => {
  return useQuery({
    queryKey: ["chapters", endpoint],
    queryFn: async () => await getData(chaptersUrl + endpoint),
    refetchOnWindowFocus: false,
  });
};
