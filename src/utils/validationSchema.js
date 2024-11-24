import * as yup from "yup";

const smallTextValidator = yup
  .string()
  .matches(/^[^\d]/, "لا يمكن أن يبدأ النص برقم")
  .matches(
    /^[\u0600-\u06FFa-zA-Z0-9\s]+$/,
    "النص يمكن أن يحتوي على الحروف العربية، الأرقام، والمسافات فقط"
  )
  .min(5, "يجب ان لا يقل عن خمسة حروف")
  .max(100, "يجب ان لا يزيد عن مئة حرف")
  .trim()
  .required("مطلوب");

const largeTextValidator = yup
  .string()
  .matches(/^[^\d]/, "لا يمكن أن يبدأ النص برقم")
  .min(10, "يجب ان لا يقل عن عشرة حروف")
  .max(1000, "يجب ان لا يزيد عن آلف حرف")
  .test(
    "not-empty",
    "لا يمكن أن يكون النص عبارة عن مسافة بيضاء فقط",
    (value) => value && value.trim().length > 0 // Ensures non-whitespace input
  )
  .trim()
  .required("مطلوب");

const numberValidator = yup
  .number()
  .typeError("يجب أن يكون رقمًا") // Handle non-numeric inputs
  .positive("يجب أن يكون أكبر من أو يساوي الصفر") // Ensure positive value
  .min(0, "يجب أن يكون أكبر من أو يساوي الصفر")
  .max(10000, "يجب أن لا يتجاوز العشرة آلاف") // Set a maximum limit
  .test(
    "is-decimal",
    "يجب أن يحتوي على منزلتين عشريتين على الأكثر",
    (value) => value === undefined || /^\d+(\.\d{1,2})?$/.test(value.toString()) // Validate up to 2 decimal places
  )
  .required("مطلوب");

/* const fileValidator = yup
  .mixed()
  .required("مطلوب") // File is required
  .test("fileSize", "حجم الملف كبير جدًا. الحد الأقصى 2 ميجا بايت", (value) => {
    return value && value.size <= 2 * 1024 * 1024; // Size should be less than 2MB
  })
  .test("fileType", "يُسمح فقط بملفات JPG وPNG وGIF", (value) => {
    return (
      value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
    ); // Allowed file types
  }); */

const fileValidator = yup
  .string()
  .required("مطلوب")
  .test("fileSize", "حجم الملف كبير جدًا. الحد الأقصى 2 ميجا بايت", (value) => {
    if (!value) return false;
    const sizeInBytes = value.length * (3 / 4) - (value.endsWith("==") ? 2 : 1);
    return sizeInBytes <= 2 * 1024 * 1024;
  })
  .test("fileType", "يُسمح فقط بملفات JPG وPNG وGIF أو رابط URL", (value) => {
    if (!value) return false;
    // Check for Base64 MIME type
    const mimeType = value.match(/^data:(.+);base64,/)?.[1];
    if (
      mimeType &&
      ["image/jpeg", "image/png", "image/gif"].includes(mimeType)
    ) {
      return true;
    }
    // Check for valid URL with allowed extensions
    const isValidUrl = /^https?:\/\/.+\.(jpeg|jpg|png|gif)$/i.test(value);
    return isValidUrl;
  });
/* .test("fileType", "يُسمح فقط بملفات JPG وPNG وGIF", (value) => {
    if (!value) return false;
    const mimeType = value.match(/^data:(.+);base64,/)?.[1];
    return ["image/jpeg", "image/png", "image/gif","url"].includes(mimeType);
  }); */

const urlValidator = yup
  .string()
  .matches(
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/,
    "الرجاء إدخال عنوان URL صالح يبدأ بـ http:// أو https://" // Custom error message
  )
  .trim()
  .required("مطلوب");

const urlArrayValidator = yup
  .array()
  .of(
    yup
      .string()
      .required("مطلوب")
      .url("صيغة الرابط غير صحيحة") // Validates each string as a URL
      .test("is-image-url", "يجب أن يكون الرابط رابط صورة صالح", (value) => {
        return /^https?:\/\/.+\.(jpeg|jpg|png|gif)$/i.test(value); // Ensures the URL ends with an image extension
      })
  )
  .required("يجب إدخال روابط")
  .min(1, "يجب إدخال رابط واحد على الأقل")
  .max(5, "يمكن إدخال حتى 5 روابط فقط");

const videoUrlArrayValidator = yup
  .array()
  .of(
    yup
      .string()
      .required("مطلوب")
      .url("صيغة الرابط غير صحيحة") // Validate URL format
      .test("is-video-url", "يجب أن يكون الرابط رابط فيديو صالح", (value) => {
        // Check if the URL ends with valid video extensions or matches popular video platforms
        return (
          /^https?:\/\/.+\.(mp4|mov|avi|mkv|webm)$/i.test(value) || // Direct video file
          /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com)/i.test(
            value
          ) // Video platforms
        );
      })
  )
  .required("يجب إدخال روابط الفيديو")
  .min(1, "يجب إدخال رابط فيديو واحد على الأقل")
  .max(3, "يمكن إدخال حتى 3 روابط فيديو فقط"); // Optional limit

/* ****************************************************************************************************************************************** */
// Schema Objects ---------------------------------------------------------------------------------------------------//
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

export const courseValidation = yup.object().shape({
  name: smallTextValidator,
  description: largeTextValidator,
  price: numberValidator,
  coverImage: fileValidator,
});
export const chapterValidation = yup.object().shape({
  name: smallTextValidator,
  description: largeTextValidator,
  coverImage: fileValidator,
  videos: videoUrlArrayValidator,
  courseId: yup.string().notOneOf([""]).required("مطلوب"),
});

/* 
video schema
const validationSchema = Yup.object().shape({
  urls: Yup.array()
    .of(
      Yup.string()
        .url("Invalid URL format") // Validate each string as a URL
        .required("URL is required")
    )
    .min(1, "At least one URL is required") // Ensure the array has at least one item
    .required("URLs field is required"),
}); */
