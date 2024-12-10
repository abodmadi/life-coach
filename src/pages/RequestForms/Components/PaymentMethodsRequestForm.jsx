import FormContainer from "@/components/FormContainer";
import { paymentMethodsFields, paymentMethodsRole } from "@/constants";
import { setPaymentQuery } from "@/reactQuery/PaymentQuery";
import { paymentMethodsValidation } from "@/utils/validationSchema";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { cloudinaryUrl, cloudName, uploadPreset } from "@/utils";
export default function PaymentMethodsRequestForm() {
  /*  const weekLast = new Date();
  weekLast.setDate(weekLast.getDate() - 7);
  console.log(weekLast); */

  const { courseId } = useSelector((state) => state.course);
  console.log(courseId);
  const { currentUser } = useSelector((state) => state.user);
  const handleSuccess = (data) => {
    console.log("Payment succeeded:", data);
    // Add additional logic for success handling
  };
  const handleError = (error) => {
    console.error("Payment failed:", error);
    // Add additional logic for error handling
  };
  const paymetSet = setPaymentQuery({
    onSuccess: handleSuccess,
    onError: handleError,
  });
  const [isLoading, setIsLoading] = useState(false);
  const uploadToCloudinary = async (file) => {
    setIsLoading(true);
    const fromData = new FormData();
    fromData.append("file", file);
    fromData.append("upload_preset", uploadPreset);
    fromData.append("cloud_name", cloudName);
    const imageUrl = await axios
      .post(cloudinaryUrl, fromData)
      .then((response) => {
        setIsLoading(false);
        return response.data;
      });

    return imageUrl.secure_url;
  };
 
  async function handleSubmit(values, { resetForm }) {
    const newPaymentReceipt = await uploadToCloudinary(values.paymentReceipt);
    values.paymentReceipt = newPaymentReceipt;
    paymetSet.mutate(values);
    
    resetForm();
  }
  let initialValues = {
    paymentReceipt: "",
    paymentMethod: "",
    paymentDate: "",
    studentId: currentUser.user.id,
    courseId: courseId,
  };
  /*   function handelRequest(data) {
    const dataMap = new Map(Object.entries(data));
    if (dataMap.get("coverImage") === "") {
      dataMap.delete("coverImage");
    }
    const finalData = Object.fromEntries(dataMap); 

    console.log(data);
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      corseId: "",
      userId: "",
      paymentMethod: "",
      paymentReceipt: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    onSubmit: handelRequest,
    validationSchema: requestSchema,
  });
  console.log(formik.values.paymentReceipt.split("\\")[2]); */
  return (
    <div className="container w-5/6 mx-auto flex justify-center p-8 ">
      <div className="w-full max-w-lg rounded-xl shadow-xl px-8 py-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center text-gray-700 font-bold mb-5">
          الدفع الإلكتروني
        </h1>
        <FormContainer
          fields={paymentMethodsFields}
          initialValues={initialValues}
          buttonText={"حجز"}
          validationSchema={paymentMethodsValidation}
          options={paymentMethodsRole}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {/* <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              العنوان
            </label>
            <input
              className={`shadow border ${
                formik.errors.title && formik.touched.title && "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
              id="title"
              name="title"
              type="text"
              placeholder="العنوان"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.errors.title && formik.touched.title && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.title}
              </p>
            )}
          </div>
         
          <div className="mb-4">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              طريقة الدفع
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              onChange={formik.handleChange}
              value={formik.values.paymentMethod}
              className={`shadow border ${
                formik.errors.paymentMethod &&
                formik.touched.paymentMethod &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
            >
              <option value={""} disabled>
                أختر طريقة الدفع
              </option>
              {[...Array(3)].map((_, index) => (
                <option value={index + 1} key={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            {formik.errors.paymentMethod && formik.touched.paymentMethod && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.paymentMethod}
              </p>
            )}
          </div>
          
          <div className="mb-4 flex items-center justify-center w-full">
            <label
              htmlFor="paymentReceipt"
              className={`flex flex-col items-center justify-center w-full h-40 border-2 ${
                formik.errors.paymentReceipt &&
                formik.touched.paymentReceipt &&
                "border-red-400"
              }  border-dashed rounded-lg cursor-pointer hover:bg-gray-100 `}
            >
              {formik.values.paymentReceipt ? (
                <img
                  src={
                    "C://Users//abdullah//Pictures//Screenshots//" +
                    formik.values.paymentReceipt.split("\\")[2]
                  }
                  alt="payment receipt image"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 ">
                    انقر لرفع الصورة
                  </p>
                  {formik.errors.paymentReceipt &&
                    formik.touched.paymentReceipt && (
                      <p className="text-red-500 text-xs italic">
                        {formik.errors.paymentReceipt}
                      </p>
                    )}
                </div>
              )}
              <input
                id="paymentReceipt"
                type="file"
                value={formik.values.paymentReceipt}
                name="paymentReceipt"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
        </form>
        <button
          onClick={() => {
            submitForm();
          }}
          className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          حفظ
        </button> */}
      </div>
    </div>
  );
}

{
  /* Description 
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              الوصف
            </label>
            <textarea
              className={`shadow border ${
                formik.errors.description &&
                formik.touched.description &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
              //className="w-full shadow text-gray-700 rounded border px-3 py-2 text-sm"
              placeholder="الوصف"
              rows="8"
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            ></textarea>
            {formik.errors.description && formik.touched.description && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.description}
              </p>
            )}
          </div>
          Cover Image 
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="coverImage"
            >
              رابط الغلاف
            </label>
            <input
              className={`shadow border ${
                formik.errors.coverImage &&
                formik.touched.coverImage &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
              id="coverImage"
              type="url"
              placeholder="رابط الغلاف"
              name="coverImage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.coverImage}
            />
            {formik.errors.coverImage && formik.touched.coverImage && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.coverImage}
              </p>
            )}
          </div>
           Post Url 
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="postUrl"
            >
              رابط المنشور
            </label>
            <input
              className={`shadow border ${
                formik.errors.postUrl &&
                formik.touched.postUrl &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
              id="postUrl"
              type="url"
              placeholder="رابط المنشور"
              name="postUrl"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postUrl}
            />
            {formik.errors.postUrl && formik.touched.postUrl && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.postUrl}
              </p>
            )}
          </div>
          publish date 
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="publishDate"
            >
              تاريخ النشر
            </label>
            <input
              className={`shadow border ${
                formik.errors.publishDate &&
                formik.touched.publishDate &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
              id="publishDate"
              type="date"
              placeholder="تاريخ النشر"
              name="publishDate"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.publishDate}
            />
            {formik.errors.publishDate && formik.touched.publishDate && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.publishDate}
              </p>
            )}
          </div>
           Company id 
          <div className="mb-4">
            <label
              htmlFor="publisherId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              الشركة
            </label>
            <select
              id="publisherId"
              name="publisherId"
              onChange={formik.handleChange}
              value={formik.values.publisherId}
              className={`shadow border ${
                formik.errors.publisherId &&
                formik.touched.publisherId &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
            >
              <option value={""} disabled >أختر شركة</option>
              {companiesList.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            {formik.errors.publisherId && formik.touched.publisherId && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.publisherId}
              </p>
            )}
          </div> */
}
