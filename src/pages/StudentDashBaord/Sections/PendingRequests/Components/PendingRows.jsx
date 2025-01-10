import React from "react";
import { paymentMethods, paymentStatus } from "@/constants";
export default function PendingRows({ currentItems }) {
  return currentItems?.map((item, index) => (
    <tr key={index} className="even:bg-gray-100 hover:bg-gray-200">
      <td className="p-2 text-center whitespace-nowrap text-base font-bold text-gray-900">
        {index + 1}
      </td>
      <td className="p-2 text-center w-44 text-base font-medium text-gray-900 ">
        <p className="line-clamp-1 ">{item?.course?.name}</p>
      </td>
      <td className="p-2  flex justify-center items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
        <a href={item?.paymentReceipt} target="_blank">
          <img
            className="h-12 w-12 rounded-md"
            src={item?.paymentReceipt}
            alt={`payment image ${index}`}
          />
        </a>
      </td>
      {paymentMethods.map((method, index) =>
        method.label == item.paymentMethod ? (
          <td
            key={index}
            className="p-2 text-center w-44 text-base font-medium text-gray-900 "
          >
            <p className="line-clamp-1 ">{method?.value}</p>
          </td>
        ) : null
      )}

      <td className="p-2 text-center w-44 text-base font-medium text-gray-900 ">
        <p className="line-clamp-1 ">{item?.paymentDate.split("T")[0]}</p>
      </td>
      {paymentStatus.map((status, index) =>
        status.label == item.status ? (
          <td
            key={index}
            className="p-2 text-center whitespace-nowrap text-base"
          >
            <span
              className={`inline-flex items-center justify-center rounded-full px-3.5 py-1 ${status.color}`}
            >
              <p className="text-sm font-bold">{status.value}</p>
            </span>
          </td>
        ) : null
      )}
      <th scope="col" className="p-4"></th>
    </tr>
  ));
}
