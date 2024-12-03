import {
    getData,
    setData,
    deleteData,
    updateData,
  } from "@/Services/AxiosAPIServices";
  import { useMutation, useQuery,useQueryClient } from "@tanstack/react-query";
import { paymentUrl } from "@/utils";
export const setPaymentQuery = () => {
    return useMutation({
      mutationKey: ["payments"],
      mutationFn: async (values) => await setData(paymentUrl + "",values),
      refetchOnWindowFocus: false, // Prevent refetching on window focus
    });
  };