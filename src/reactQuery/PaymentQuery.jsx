import {
  getData,
  setData,
  deleteData,
  updateData,
} from "@/Services/AxiosAPIServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { paymentUrl } from "@/utils";
export const setPaymentQuery = ({ onSuccess, onError,onMutate } = {}) => {
  return useMutation({
    mutationKey: ["payments"],
    mutationFn: async (values) => await setData(paymentUrl + "/store", values),
    onMutate,
    onSuccess,
    onError,
    refetchOnWindowFocus: false, // Prevent refetching on window focus
  });
};
