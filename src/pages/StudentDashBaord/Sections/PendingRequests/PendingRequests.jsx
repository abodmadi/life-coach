import React, { useState } from "react";
import DashboardTable from "../../Components/DashboardTable";
import { studentTableRequestColumns } from "@/constants";
import { getPaymentQuery } from "@/reactQuery/PaymentQuery";
import Loader from "@/components/Loader";
import PendingRows from "./Components/PendingRows";
import Pagination from "@/components/Pagination";
import Error from "@/components/Error";

export default function PendingRequests() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setBlogsPerPage] = useState(15);
  const getUserPaymentRequest = getPaymentQuery(
    "/user-payment/00c8d7a8-6e6f-4141-bdc8-a0c1c443bd6c"
  );
  if (getUserPaymentRequest.isError) {
    return (
      <Error
        code={getUserPaymentRequest?.error?.response?.status}
        message={getUserPaymentRequest?.error?.response?.data?.errors[0]?.msg}
        title={getUserPaymentRequest?.error?.response?.statusText}
      />
    );
  }
  // Pagination Calculation:
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let currentItems;
  if (getUserPaymentRequest.isSuccess) {
    currentItems = getUserPaymentRequest?.data?.userPayment?.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
  }

  return getUserPaymentRequest.isLoading ? (
    <Loader />
  ) : (
    <DashboardTable
      header={"الطلبات"}
      tableColumnsNames={studentTableRequestColumns}
    >
      <PendingRows currentItems={currentItems} />
      <Pagination
        ItemsPerPage={itemsPerPage}
        currentPage={currentPage}
        paginate={(newPage) => setCurrentPage(newPage)}
        totalItems={getUserPaymentRequest?.data?.userPayment?.length}
      />
    </DashboardTable>
  );
}
