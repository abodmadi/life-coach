import { useFormik } from "formik";
import * as yup from "yup";
export default function CompaniesForm() {
  const companiesList = [
    {
      id: "1f01b9f6-5ad4-40bf-b12e-8f1f506fda03",
      name: "بصمة لإدارة العقارات",
      description:
        "الحساب الرسمي لشركة بصمة لإدارة العقارات , بيع ،إدارة ،تسويق العقارات بمختلف أنواعها  في جميع أنحاء المملكة- Bussma Real Estate Company الرقم الموحد : 920002033",
      logo: null,
      createdAt: "2024-10-18 13:31:58.128",
      updatedAt: "2024-10-18 13:31:58.128",
    },
    {
      id: "5dc01da2-39f7-496b-903b-6ccc09a1770e",
      name: "أدير",
      description: "شركة أدير للتسويق والخدمات العقارية",
      logo: null,
      createdAt: "2024-10-18 13:29:27.319",
      updatedAt: "2024-10-18 13:29:27.319",
    },
    {
      id: "e6d6ec54-6e51-4d5a-a411-46e30660cf45",
      name: "سمو العقارية",
      description:
        "نسمو بالابتكار والاستدامة في التطوير العقاري وبناء المجتمعات.",
      logo: null,
      createdAt: "2024-10-18 13:30:34.072",
      updatedAt: "2024-10-18 13:30:34.072",
    },
  ];

  const scoialMediaAccounts = [
    {
      id: "087d20ea-b04f-43f4-9540-105662f6822d",
      profileUrl: "https://x.com/gobussma",
      companyId: "1f01b9f6-5ad4-40bf-b12e-8f1f506fda03",
      socialMediaAppId: "790a5231-fc7f-468d-9406-9c7c63bcd570",
      createdAt: "2024-10-18 13:50:05.644",
      updatedAt: "2024-10-18 13:50:05.644",
    },
    {
      id: "1089edf3-8aaf-4537-93fe-dc74b45ac5fb",
      profileUrl: "https://you.com/gobussma",
      companyId: "1f01b9f6-5ad4-40bf-b12e-8f1f506fda03",
      socialMediaAppId: "17cb6b90-bd0f-45b6-bb40-53cf511dad93",
      createdAt: "2024-10-18 13:53:01.153",
      updatedAt: "2024-10-18 13:53:01.153",
    },
    {
      id: "3e806169-e61c-48f3-a8f8-bf67776978ca",
      profileUrl: "https://watsapp.com/SumouRE",
      companyId: "e6d6ec54-6e51-4d5a-a411-46e30660cf45",
      socialMediaAppId: "198e86ce-343a-4cee-ad40-7454ed88f3ca",
      createdAt: "2024-10-18 14:01:48.913",
      updatedAt: "2024-10-18 14:01:48.913",
    },
    {
      id: "654f8436-8b3c-413e-ad47-33293362da7f",
      profileUrl: "https://watsapp.com/gobussma",
      companyId: "1f01b9f6-5ad4-40bf-b12e-8f1f506fda03",
      socialMediaAppId: "198e86ce-343a-4cee-ad40-7454ed88f3ca",
      createdAt: "2024-10-18 13:54:53.826",
      updatedAt: "2024-10-18 13:54:53.826",
    },
    {
      id: "84fed1f6-089f-4484-ad98-1b99f2d4632a",
      profileUrl: "https://x.com/SumouRE",
      companyId: "e6d6ec54-6e51-4d5a-a411-46e30660cf45",
      socialMediaAppId: "790a5231-fc7f-468d-9406-9c7c63bcd570",
      createdAt: "2024-10-18 14:03:17.498",
      updatedAt: "2024-10-18 14:03:17.498",
    },
    {
      id: "d8f8d3b5-baf1-429e-9a26-ba408307645a",
      profileUrl: "https://x.com/AdeerKSA",
      companyId: "5dc01da2-39f7-496b-903b-6ccc09a1770e",
      socialMediaAppId: "790a5231-fc7f-468d-9406-9c7c63bcd570",
      createdAt: "2024-10-18 14:05:51.374",
      updatedAt: "2024-10-18 14:05:51.374",
    },
  ];

  const somApps = [
    {
      id: "17cb6b90-bd0f-45b6-bb40-53cf511dad93",
      name: "YouTube",
      logo: null,
      createdAt: "2024-10-18 12:59:09.362",
      updatedAt: "2024-10-18 12:59:09.362",
    },
    {
      id: "198e86ce-343a-4cee-ad40-7454ed88f3ca",
      name: "واتساب",
      logo: null,
      createdAt: "2024-10-18 12:57:46.942",
      updatedAt: "2024-10-18 12:57:46.942",
    },
    {
      id: "6db9487c-9b5c-4c06-b129-0a0061b80f00",
      name: "فيسبوك",
      logo: null,
      createdAt: "2024-10-18 12:56:44.872",
      updatedAt: "2024-10-18 12:56:44.872",
    },
    {
      id: "790a5231-fc7f-468d-9406-9c7c63bcd570",
      name: "X",
      logo: null,
      createdAt: "2024-10-18 12:58:04.942",
      updatedAt: "2024-10-18 12:58:04.942",
    },
  ];

  const subTypes = [
    {
      id: "01af68dd-b05d-443c-b585-4c0adaed8a46",
      name: "خارجية",
      createdAt: "2024-10-18 12:48:24.761",
      updatedAt: "2024-10-18 12:48:24.761",
    },
    {
      id: "04e03cdc-4ead-4c58-bd87-66f2caab5a7a",
      name: "حضوري و إلكتروني",
      createdAt: "2024-10-18 12:47:51.785",
      updatedAt: "2024-10-18 12:47:51.785",
    },
    {
      id: "31f911f5-60f6-47c7-82f8-1bb60b62d80b",
      name: "حضوري",
      createdAt: "2024-10-18 12:45:53.779",
      updatedAt: "2024-10-18 12:45:53.779",
    },
    {
      id: "48314779-b7e0-4c6a-93ee-8a5c76575e06",
      name: "إلكتروني",
      createdAt: "2024-10-18 12:47:20.521",
      updatedAt: "2024-10-18 12:47:20.521",
    },
    {
      id: "6c18a287-368a-4454-9ec9-46b9ff924251",
      name: "بدون",
      createdAt: "2024-10-18 12:48:51.094",
      updatedAt: "2024-10-18 12:48:51.094",
    },
    {
      id: "fb984204-77f2-4cba-b040-a11d045d274d",
      name: "داخلية",
      createdAt: "2024-10-18 12:48:39.073",
      updatedAt: "2024-10-18 12:48:39.073",
    },
  ];

  const types = [
    {
      id: "9889dd3c-223d-4897-8981-c6a33c9bacbe",
      name: "فعالية",
      createdAt: "2024-10-18 12:42:09.306",
      updatedAt: "2024-10-18 12:42:09.306",
    },
    {
      id: "e753a7dc-bcbc-4ce8-ba07-897a6669ce26",
      name: "مزاد",
      createdAt: "2024-10-18 12:41:27.134",
      updatedAt: "2024-10-18 12:41:27.134",
    },
  ];

  /* const typesMap = new Map(types.map((item) => [item.name, item.id]));
  const suTypesMap = new Map(subTypes.map((item) => [item.name, item.id]));
  const compMap = new Map(companiesList.map((item) => [item.name, item.id]));
  const somAppMap = new Map(somApps.map((item) => [item.name, item.id]));
  const somAccountsMap = new Map(
    scoialMediaAccounts.map((item) => [item.profileUrl, item.id])
  ); */

  function handelNewPost(data) {
    /* data.publisherId = compMap.get(data.publisherId);
    data.scoialMediaAccountId = somAccountsMap.get(data.scoialMediaAccountId);
    data.socialMediaAppId = somAppMap.get(data.socialMediaAppId);
    data.typeId = typesMap.get(data.typeId);
    data.subTypeId = suTypesMap.get(data.subTypeId); */

    const dataMap = new Map(Object.entries(data));
    if (dataMap.get("coverImage") === "") {
      dataMap.delete("coverImage");
    }
    const finalData = Object.fromEntries(dataMap);

    console.log(finalData);
    formik.resetForm();
  }

  const newPostSchema = yup.object().shape({
    title: yup.string().min(5, "يجب ان لا يقل عن 5 حروف").required("مطلوب"),
    description: yup
      .string()
      .min(10, "يجب ان لا يقل عن 10 حروف")
      .max(1000, "يجب ان لا يزيد عن ألف حرف")
      .required("مطلوب"),
    coverImage: yup.string().url("يجب ان يحتوي على رابط").nullable(),
    postUrl: yup.string().url("يجب ان يحتوي على رابط").required("مطلوب"),
    publishDate: yup
      .date()
      .min(new Date(2000, 0, 1), "يجب ان لا يقل عن عام 2000")
      .max(new Date(), "يجب ان يسبق تاريخ اليوم")
      .required("مطلوب"),
    publisherId: yup.string().notOneOf([""]).required("مطلوب"),
    scoialMediaAccountId: yup.string().notOneOf([""]).required("مطلوب"),
    socialMediaAppId: yup.string().notOneOf([""]).required("مطلوب"),
    typeId: yup.string().notOneOf([""]).required("مطلوب"),
    subTypeId: yup.string().notOneOf([""]).required("مطلوب"),
  });

  //console.log("ff",[...companiesList.map((item)=>item.id)])

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      coverImage: "",
      postUrl: "",
      publishDate: "",
      publisherId: "",
      scoialMediaAccountId: "",
      socialMediaAppId: "",
      typeId: "",
      subTypeId: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    onSubmit: handelNewPost,
    validationSchema: newPostSchema,
  });

  return (
    <div className="container w-5/6 mx-auto flex justify-center p-8">
      <div className="w-full max-w-md">
        <h1 className="text-4xl text-center text-gray-700 font-bold mb-5">
          المنشورات
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Title */}
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
          {/* Description */}
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
          {/* Cover Image */}
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
          {/* Post Url */}
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
          {/* publish date */}
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
          {/* Company id */}
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
          </div>
          {/* Company Account Id */}
          <div className="mb-4">
            <label
              htmlFor="scoialMediaAccountId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              حساب التواصل الاجتماعي للشركة
            </label>
            <select
              id="scoialMediaAccountId"
              name="scoialMediaAccountId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.scoialMediaAccountId}
              className={`shadow border ${
                formik.errors.scoialMediaAccountId &&
                formik.touched.scoialMediaAccountId &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
            >
              <option disabled value={""}>
                أختر حساب تواصل للشركة
              </option>
              {scoialMediaAccounts.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.profileUrl}
                </option>
              ))}
            </select>
            {formik.errors.scoialMediaAccountId && formik.touched.scoialMediaAccountId && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.scoialMediaAccountId}
              </p>
            )}
          </div>
          {/* Social Media app Id */}
          <div className="mb-4">
            <label
              htmlFor="socialMediaAppId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              منصة التواصل الأجتماعي
            </label>
            <select
              id="socialMediaAppId"
              name="socialMediaAppId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.socialMediaAppId}
              className={`shadow border ${
                formik.errors.socialMediaAppId &&
                formik.touched.socialMediaAppId &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
            >
              <option disabled value={""}>
                أختر منصة تواصل اجتماعي
              </option>
              {somApps.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            {formik.errors.socialMediaAppId && formik.touched.socialMediaAppId && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.socialMediaAppId}
              </p>
            )}
          </div>
          {/* Type Id */}
          <div className="mb-4">
            <label
              htmlFor="typeId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              فئة المنشور
            </label>
            <select
              id="typeId"
              name="typeId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.typeId}
              className={`shadow border ${
                formik.errors.typeId &&
                formik.touched.typeId &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
            >
              <option disabled value={""}>
                أختر فئة المنشور
              </option>
              {types.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            {formik.errors.typeId && formik.touched.typeId && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.typeId}
              </p>
            )}
          </div>
          {/* Sub Type Id */}
          <div className="mb-6">
            <label
              htmlFor="subTypeId"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              نوع المنشور
            </label>
            <select
              id="subTypeId"
              name="subTypeId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subTypeId}
              className={`shadow border ${
                formik.errors.subTypeId &&
                formik.touched.subTypeId &&
                "border-red-400"
              }  rounded w-full py-2 px-3 text-gray-700`}
            >
              <option disabled value={""}>
                أختر نوع المنشور
              </option>
              {subTypes.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
            {formik.errors.subTypeId && formik.touched.subTypeId && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.subTypeId}
              </p>
            )}
          </div>

          {/* <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            
          </div> */}

          <button
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            حفظ
          </button>
        </form>
      </div>
    </div>
  );
}
