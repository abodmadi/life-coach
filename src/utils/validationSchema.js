import * as yup from "yup";
export const requestSchema = yup.object().shape({
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

  paymentMethod: yup.string().notOneOf([""]).required("مطلوب"),
  scoialMediaAccountId: yup.string().notOneOf([""]).required("مطلوب"),
  socialMediaAppId: yup.string().notOneOf([""]).required("مطلوب"),
  typeId: yup.string().notOneOf([""]).required("مطلوب"),
  subTypeId: yup.string().notOneOf([""]).required("مطلوب"),
  paymentReceipt: yup.string().required("مطلوب"),
});

export const valSm = yup.object().shape({
  pname: yup.string().min(5, "يجب ان لا يقل عن 5 حروف").required("مطلوب"),
});
export const courseValidation = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  price: yup.number().required("Required"),
});
export const chapterValidation = yup.object().shape({
  name: yup.string().required("Required"),
  description: yup.string().required("Required"),
  video: yup.string().required("Required"),
});
