import gg from "@/assets/svgs/gg.svg";
import ethics from "@/assets/svgs/ethics.svg";
import lifestyle from "@/assets/svgs/lifestyle.svg";
import skill from "@/assets/svgs/skill.svg";
import abilities from "@/assets/svgs/abilities.svg";
import { icon } from "@fortawesome/fontawesome-svg-core";
import control from "@/assets/svgs/control.svg";
import courses from "@/assets/svgs/courses.svg";
import chapters from "@/assets/svgs/chapters.svg";
import assigments from "@/assets/svgs/assigments.svg";
export const sideBarItems = [
  {
    title: "Dashboard",
    svgPaths: [
      "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z",
      "M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z",
    ],
  },
  {
    title: "Courses",
    svgPaths: [
      "M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z",
    ],
  },
  {
    title: "Card",
    svgPaths: [
      "M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z",
    ],
  },
];

export const servicesList = [
  {
    id: 1,
    title: "Life Courses",
    description: "",
    imageUrl: "/src/assets/booking.jpg",
    to: "courses",
  },
  {
    id: 2,
    title: "Book Sessions",
    description: "",
    imageUrl: "/src/assets/booking.jpg",
    to: "sessions",
  },
];

export const FeaturesList = [
  {
    icon: [
      "m31.762 81.664h-26.852c-0.80469 0-1.4531-0.65234-1.4531-1.4531l-0.003906-33.566c0-2.6523 2.1602-4.8125 4.8125-4.8125s4.8125 2.1602 4.8125 4.8125v23.719h18.684c0.80469 0 1.4531 0.65234 1.4531 1.4531v8.3906c0 0.80469-0.64844 1.457-1.4531 1.457zm-25.398-2.9102h23.945v-5.4805h-18.688c-0.80469 0-1.4531-0.65234-1.4531-1.4531v-25.176c0-1.0508-0.85156-1.9023-1.9023-1.9023s-1.9023 0.85156-1.9023 1.9023z",
      "m35.957 92.184c-3.1172 0-5.6484-2.5352-5.6484-5.6484v-13.262h-18.688c-0.80469 0-1.4531-0.65234-1.4531-1.4531v-21.82c0-5.4297 4.418-9.8477 9.8477-9.8477s9.8477 4.418 9.8477 9.8477v10.293h4.1484c4.1914 0 7.6016 3.4102 7.6016 7.6016v18.637c-0.003906 3.1172-2.5391 5.6523-5.6562 5.6523zm-22.879-21.82h18.684c0.80469 0 1.4531 0.65234 1.4531 1.4531v14.715c0 1.5117 1.2305 2.7422 2.7422 2.7422s2.7422-1.2305 2.7422-2.7422v-18.637c0-2.5859-2.1055-4.6914-4.6914-4.6914h-5.6016c-0.80469 0-1.4531-0.65234-1.4531-1.4531l-0.003906-11.75c0-3.8242-3.1133-6.9375-6.9375-6.9375s-6.9336 3.1133-6.9336 6.9375z",
      "m20.016 43.062c-4.5039 0-8.168-3.6641-8.168-8.168 0-4.5039 3.6641-8.168 8.168-8.168s8.168 3.6641 8.168 8.168c0 4.5039-3.6641 8.168-8.168 8.168zm0-13.426c-2.8984 0-5.2578 2.3594-5.2578 5.2578 0 2.8984 2.3594 5.2578 5.2578 5.2578s5.2578-2.3594 5.2578-5.2578c0-2.8984-2.3594-5.2578-5.2578-5.2578z",
      "m31.762 92.184h-6.7148c-0.80469 0-1.4531-0.65234-1.4531-1.4531v-10.52c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531l0.003906 9.0625h3.8047v-9.0625c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531v10.516c0 0.80469-0.64844 1.457-1.4531 1.457z",
      "m11.621 92.184h-6.7109c-0.80469 0-1.4531-0.65234-1.4531-1.4531v-10.52c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531v9.0625h3.8047v-9.0625c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531l0.003906 10.516c0 0.80469-0.65234 1.457-1.457 1.457z",
      "m95.09 81.664h-26.852c-0.80469 0-1.4531-0.65234-1.4531-1.4531v-8.3945c0-0.80469 0.65234-1.4531 1.4531-1.4531h18.684v-23.719c0-2.6523 2.1562-4.8125 4.8125-4.8125 2.6523 0 4.8125 2.1602 4.8125 4.8125v33.566c0 0.80078-0.65234 1.4531-1.457 1.4531zm-25.398-2.9102h23.945v-32.109c0-1.0508-0.85156-1.9023-1.9023-1.9023s-1.9023 0.85156-1.9023 1.9023v25.172c0 0.80469-0.65234 1.4531-1.4531 1.4531h-18.684z",
      "m64.043 92.184c-3.1172 0-5.6484-2.5352-5.6484-5.6484l-0.003906-18.641c0-4.1914 3.4102-7.6016 7.6016-7.6016h4.1484v-10.293c0-5.4297 4.418-9.8477 9.8477-9.8477 5.4258 0 9.8438 4.418 9.8438 9.8477v21.816c0 0.80469-0.65234 1.4531-1.4531 1.4531h-18.684v13.258c-0.003906 3.1211-2.5391 5.6562-5.6523 5.6562zm1.9492-28.98c-2.5859 0-4.6914 2.1055-4.6914 4.6914v18.637c0 1.5117 1.2305 2.7422 2.7422 2.7422s2.7422-1.2305 2.7422-2.7422l-0.003906-14.715c0-0.80469 0.65234-1.4531 1.4531-1.4531h18.684l0.003906-20.363c0-3.8242-3.1133-6.9375-6.9375-6.9375s-6.9336 3.1133-6.9336 6.9375v11.75c0 0.80469-0.65234 1.4531-1.4531 1.4531z",
      "m79.984 43.062c-4.5039 0-8.168-3.6641-8.168-8.168 0-4.5039 3.6641-8.168 8.168-8.168s8.168 3.6641 8.168 8.168c0 4.5039-3.6641 8.168-8.168 8.168zm0-13.426c-2.8984 0-5.2578 2.3594-5.2578 5.2578 0 2.8984 2.3594 5.2578 5.2578 5.2578s5.2578-2.3594 5.2578-5.2578c0.003906-2.8984-2.3555-5.2578-5.2578-5.2578z",
      "m74.949 92.184h-6.7148c-0.80469 0-1.4531-0.65234-1.4531-1.4531v-10.52c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531l0.003906 9.0625h3.8047v-9.0625c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531l0.003906 10.516c0 0.80469-0.65234 1.457-1.457 1.457z",
      "m95.09 92.184h-6.7148c-0.80469 0-1.4531-0.65234-1.4531-1.4531v-10.52c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531l0.003906 9.0625h3.8047v-9.0625c0-0.80469 0.65234-1.4531 1.4531-1.4531 0.80469 0 1.4531 0.65234 1.4531 1.4531l0.003906 10.516c0 0.80469-0.65234 1.457-1.457 1.457z",
      "m38.363 38.363c-0.27734 0-0.55469-0.078125-0.79688-0.23828-0.46484-0.30469-0.71484-0.84375-0.64844-1.3945l0.71484-5.8906c-4.1719-2.4766-6.543-6.0547-6.543-9.9297 0-3.6094 2.0469-6.9609 5.7617-9.4375 3.5312-2.3555 8.2031-3.6562 13.148-3.6562s9.6172 1.2969 13.148 3.6523c3.7148 2.4766 5.7617 5.8281 5.7617 9.4414 0 3.6094-2.0469 6.9609-5.7617 9.4375-3.5312 2.3555-8.2031 3.6523-13.148 3.6523-1.1758 0-2.3516-0.074219-3.5039-0.22266l-7.3906 4.3828c-0.23047 0.13672-0.48438 0.20312-0.74219 0.20312zm11.637-27.637c-4.3789 0-8.4766 1.125-11.535 3.1641-2.8789 1.918-4.4648 4.4102-4.4648 7.0195 0 3.0273 2.1406 5.8906 5.875 7.8516 0.53516 0.28125 0.83984 0.86328 0.76562 1.4609l-0.47656 3.9297 5.2891-3.1328c0.28906-0.17188 0.625-0.23828 0.95703-0.1875 1.168 0.17188 2.3789 0.25781 3.5898 0.25781 4.3789 0 8.4766-1.125 11.535-3.1641 2.8789-1.918 4.4648-4.4102 4.4648-7.0156 0-2.6055-1.5859-5.0977-4.4648-7.0195-3.0586-2.0391-7.1562-3.1641-11.535-3.1641z",
    ],
    title: "الجلسات الفردية المخصصة",
    description:
      "خدماتنا الاستشارية مصممة خصيصاً لإطلاق إمكاناتك وتوجيهك نحو النجاح. شرك معنا ومعاً سنحول التحديات إلى فرص.",
    name: "",
  },
  {
    icon: [
      "M38.251,54.927c-2.109-1.8-2.947-2.473-4.805-3.937c-3.482-2.743-7.576-2.972-9.525-0.533  c-0.714,0.893-1.294,2.198-1.477,3.641l-3.966-3.905c-0.2-0.197-0.29-0.401-0.301-0.68l-0.597-15.28  c-0.267-5.92-4.165-6.494-5.353-6.53c-1.302-0.034-3.18,0.405-4.557,1.763c-1.145,1.129-1.736,2.692-1.707,4.519l0.384,24.311  c0.035,2.186,1.748,4.919,2.67,5.68c3.137,2.587,5.91,4.54,8.356,6.263c7.393,5.207,11.103,7.821,11.554,18.632  c0.054,1.251,1.253,1.328,1.83,1.365l1.427,0.087c1.186,0.071,2.792,0.163,4.471,0.261c3.567,0.206,7.609,0.44,8.378,0.504  c0.04,0.003,0.078,0.005,0.117,0.005c0.696,0,1.294-0.521,1.377-1.224c0.403-3.387,0.854-25.423-1.343-27.917  C41.717,58.012,39.658,56.128,38.251,54.927z M43.889,88.227c-1.646-0.102-4.393-0.261-7.074-0.417  c-1.883-0.109-3.933-0.227-5.182-0.303c-0.765-11.159-5.306-14.359-12.661-19.539c-2.406-1.695-5.133-3.616-8.187-6.134  c-0.393-0.337-1.641-2.302-1.661-3.582L8.739,33.94c-0.017-1.065,0.28-1.906,0.881-2.498c0.706-0.696,1.782-0.992,2.525-0.964  c2.057,0.06,2.583,2.143,2.66,3.87l0.596,15.272c0.038,0.98,0.428,1.862,1.127,2.551l7.897,7.776c0.013,0.013,0.027,0.026,0.04,0.04  c0.006,0.006,0.012,0.012,0.018,0.017l8.597,8.466c0.546,0.537,1.425,0.531,1.964-0.015c0.538-0.546,0.531-1.425-0.015-1.963  l-8.646-8.514c-1.861-1.87-1.28-4.553-0.293-5.787c0.934-1.172,3.465-0.73,5.638,0.981c1.826,1.439,2.649,2.1,4.721,3.868  c1.227,1.048,3.244,2.88,6.605,6.693C44.076,65.763,44.341,81.825,43.889,88.227z M90.33,29.465  c-1.376-1.358-3.255-1.802-4.557-1.763c-1.188,0.035-5.086,0.609-5.354,6.538l-0.596,15.273c-0.011,0.279-0.1,0.482-0.301,0.679  l-3.966,3.906c-0.183-1.443-0.763-2.748-1.477-3.641c-1.949-2.438-6.044-2.209-9.527,0.534c-1.857,1.464-2.695,2.137-4.805,3.937  c-1.405,1.199-3.462,3.082-6.932,7.022c-2.195,2.494-1.746,24.53-1.343,27.917c0.083,0.704,0.681,1.225,1.377,1.224  c0.039,0,0.077-0.001,0.117-0.005c0.77-0.064,4.812-0.298,8.378-0.504c1.679-0.097,3.284-0.19,4.471-0.261l1.427-0.087  c0.576-0.037,1.775-0.114,1.83-1.367c0.451-10.809,4.161-13.422,11.554-18.629c2.447-1.723,5.22-3.677,8.357-6.263  c0.922-0.76,2.635-3.494,2.669-5.679l0.384-24.311C92.066,32.157,91.476,30.594,90.33,29.465z M88.876,58.251  c-0.02,1.28-1.268,3.245-1.659,3.581c-3.056,2.52-5.783,4.441-8.189,6.136c-7.356,5.181-11.897,8.381-12.661,19.539  c-1.249,0.076-3.299,0.195-5.182,0.303c-2.681,0.155-5.428,0.314-7.073,0.417c-0.453-6.402-0.187-22.462,0.835-24.495  c3.364-3.816,5.379-5.647,6.604-6.692c2.072-1.768,2.895-2.429,4.721-3.868c2.175-1.712,4.705-2.152,5.639-0.981  c0.991,1.241,1.574,3.948-0.326,5.818c-0.001,0.002-0.003,0.003-0.004,0.005l-8.609,8.478c-0.546,0.538-0.553,1.417-0.015,1.963  s1.417,0.553,1.964,0.015L81.471,52.17c0.7-0.69,1.09-1.572,1.127-2.55l0.595-15.263c0.078-1.736,0.604-3.818,2.661-3.879  c0.725-0.032,1.818,0.267,2.525,0.964c0.601,0.593,0.898,1.433,0.881,2.498L88.876,58.251z M49,24.08  c4.734,0,8.585-3.852,8.585-8.586S53.734,6.909,49,6.909s-8.585,3.851-8.585,8.585S44.266,24.08,49,24.08z M49,9.685  c3.203,0,5.809,2.606,5.809,5.809S52.203,21.303,49,21.303c-3.203,0-5.809-2.606-5.809-5.809S45.797,9.685,49,9.685z M65.016,42.803  l-0.006-1.235C64.968,32.783,57.786,25.636,49,25.636s-15.968,7.147-16.01,15.932l-0.006,1.235l1.225,0.15  c4.812,0.589,9.788,0.888,14.79,0.888s9.979-0.299,14.791-0.888L65.016,42.803z M35.83,40.347  c0.656-6.685,6.324-11.934,13.17-11.934c6.845,0,12.514,5.25,13.17,11.934C53.571,41.3,44.428,41.3,35.83,40.347z",
    ],
    title: "بيئة داعمة وآمنة",
    description:
      "نحرص على خلق بيئة تدريبية تتسم بالخصوصية والدعم، حيث يمكنك التعبير عن نفسك بحرية وأمان.",
    name: "",
  },
  {
    icon: [
      "m35.855 3.125c-4.918 0-8.9102 3.9922-8.9102 8.9062 0 4.918 3.9922 8.9102 8.9102 8.9102s8.9062-3.9922 8.9062-8.9102c0-4.9141-3.9883-8.9062-8.9062-8.9062zm0 3.125c3.1914 0 5.7812 2.5938 5.7812 5.7812 0 3.1953-2.5898 5.7852-5.7812 5.7852-3.1953 0-5.7852-2.5898-5.7852-5.7852 0-3.1875 2.5898-5.7812 5.7852-5.7812z",
      "m16.352 73.059h-8.4062c-0.86328 0-1.5625 0.69922-1.5625 1.5625v20.691c0 0.86328 0.69922 1.5625 1.5625 1.5625h20.141c0.85937 0 1.5625-0.69922 1.5625-1.5625v-20.691c0-0.86328-0.70313-1.5625-1.5625-1.5625h-0.61719c0.32422-0.51953 0.58203-1.0898 0.75391-1.707l4.9453-17.477 0.10156 0.039062v10.348c0 1.2461 0.36328 2.4023 0.99609 3.3711-0.38281 0.28125-0.63281 0.73828-0.63281 1.2539v26.426c0 0.86328 0.69922 1.5625 1.5625 1.5625h20.137c0.86328 0 1.5625-0.69922 1.5625-1.5625v-26.426c0-0.86328-0.69922-1.5625-1.5625-1.5625h-10.492c0.51562-0.90234 0.80859-1.9453 0.80859-3.0625v-12.402c0-2.5742-1.4297-4.9375-3.7148-6.1289l-6.7617-3.5273 0.47266-5.543s2.5703 2.6445 2.5703 2.6445c2.2227 2.2852 5.6523 2.8984 8.5273 1.5273 2.1172-1.0117 4.7305-2.2617 6.7617-3.2305 2.5977-1.2383 3.7383-4.3203 2.5703-6.9531l-0.003907-0.003907c-1.0469-2.3711-3.7852-3.4922-6.1992-2.5312l-5.9023 2.3477s-4.3438-4.9648-4.3438-4.9648c-1.0547-1.207-2.4609-2.0469-4.0195-2.4102-2.1758-0.50391-5.7344-1.332-8.0469-1.8711-1.8242-0.42578-3.7422-0.16016-5.3867 0.73438l-7.3516 4.0117c-1.4062 0.76953-2.5586 1.9258-3.3203 3.3281-1.0781 1.9922-2.8594 5.2695-4.1484 7.6445-1.2812 2.3555-0.47266 5.3086 1.8281 6.6875l0.003906 0.003906c1.1836 0.71094 2.6016 0.91406 3.9375 0.57422 1.3398-0.33984 2.4844-1.2031 3.1836-2.3945l4.1875-7.1406s1.3398-0.22266 1.3398-0.22266l-1.5625 10.66c-0.23047 1.5703 0.33203 3.1016 1.418 4.1523l-5.8789 18.871c-0.50781 1.6289-0.32031 3.3945 0.51172 4.8828zm-6.8438 3.1211h17.016v17.57h-17.016v-17.57zm44.262-5.7305h-17.012v23.301h17.012zm-29.266-19.73-5.7148 18.336c-0.25 0.80859-0.15625 1.6836 0.25781 2.4219 0.41406 0.73438 1.1172 1.2695 1.9336 1.4727l0.003906 0.003906c1.8398 0.46094 3.7148-0.625 4.2305-2.4531l5.0117-17.695zm11.891 2.1016c0-0.65625-0.41016-1.2461-1.0273-1.4688l-10.922-3.9805c-0.75-0.27344-1.2031-1.0352-1.0859-1.8164l1.875-12.781c0.070313-0.49219-0.097656-0.99219-0.45312-1.3438-0.35547-0.34766-0.85547-0.50391-1.3516-0.42188l-4.1719 0.69531c-0.45703 0.074219-0.85937 0.35156-1.0938 0.75l-4.5547 7.7734c-0.27734 0.46875-0.73047 0.8125-1.2578 0.94531-0.53125 0.13281-1.0938 0.054687-1.5625-0.22656v-0.003906c-0.86719-0.51953-1.1719-1.6289-0.6875-2.5156l4.1445-7.6445c0.47656-0.875 1.1953-1.5977 2.0703-2.0742 0.003906 0 7.3516-4.0117 7.3516-4.0117 0.97266-0.53125 2.1055-0.6875 3.1836-0.4375l8.0469 1.875c0.92187 0.21094 1.75 0.71094 2.375 1.4219 1.8594 2.125 5.0703 5.7969 5.0703 5.7969 0.43359 0.49609 1.1367 0.66406 1.7539 0.42188 0 0 4.0234-1.6016 6.9297-2.7578 0.85156-0.33594 1.8164 0.054687 2.1875 0.89453l0.003906 0.003906c0.48047 1.0859 0.007812 2.3594-1.0625 2.8672l-6.7617 3.2305c-1.6641 0.79297-3.6523 0.4375-4.9375-0.88281 0 0-4.9609-5.1055-4.9609-5.1055-0.42578-0.4375-1.0664-0.58594-1.6445-0.37891-0.57812 0.20703-0.98047 0.72656-1.0312 1.3359l-0.85156 9.9961c-0.054688 0.625 0.27344 1.2266 0.83594 1.5156l7.6875 4.0117c1.25 0.65234 2.0312 1.9414 2.0312 3.3555v12.402c0 1.6914-1.3711 3.0625-3.0625 3.0625h-0.003907c-1.6914 0-3.0625-1.3711-3.0625-3.0625v-11.441z",
      "m60.879 51.562v43.75c0 0.86328 0.70312 1.5625 1.5664 1.5625h20.137c0.86328 0 1.5625-0.69922 1.5625-1.5625v-43.75h7.9102c0.62891 0 1.1953-0.375 1.4414-0.95312 0.24219-0.57812 0.11719-1.2461-0.32031-1.6953l-19.543-20.141c-0.29297-0.30469-0.69531-0.47656-1.1211-0.47656-0.42188 0-0.82812 0.17188-1.1211 0.47656l-19.543 20.141c-0.43359 0.44922-0.5625 1.1172-0.31641 1.6953 0.24219 0.57812 0.80859 0.95312 1.4414 0.95312z",
    ],
    title: "التركيز على النمو الشخصي",
    description:
      "سواء كانت أهدافك مهنية أو شخصية، فإننا نساعدك على تطوير الاستراتيجيات والمهارات اللازمة لتحقيقها.",
    name: "",
  },
  {
    icon: [
      "M49.76,71.37c11.71,0,21.24-9.53,21.24-21.24c0-11.71-9.53-21.24-21.24-21.24c-11.71,0-21.24,9.53-21.24,21.24 C28.52,61.84,38.05,71.37,49.76,71.37z M49.76,30.89c10.61,0,19.24,8.63,19.24,19.24c0,10.61-8.63,19.24-19.24,19.24 s-19.24-8.63-19.24-19.24C30.52,39.52,39.15,30.89,49.76,30.89z",
      "M60.15,50.13c0-0.55-0.45-1-1-1h-8.39V35.06c0-0.55-0.45-1-1-1s-1,0.45-1,1v16.07h10.39C59.7,51.13,60.15,50.68,60.15,50.13 z",
      "M60.33,21.29c-2.51-0.96-5.2-1.53-7.88-1.79c-0.89,0.09-1.81-0.6-2.7,0.95c-0.27,0.46-0.28,1.08,0,1.57 c0.8,1.63,1.57,1.03,2.37,1.2c0.79,0.04,1.57,0.22,2.35,0.31c27.57,5.34,30.39,42.67,4.11,52.37C29.47,85.2,9.55,49.6,31.03,29.26 v1.87c0,0.55,0.45,1,1,1s1-0.45,1-1v-3.82c0-0.55-0.45-1-1-1H27.9c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1.7 c-1.96,1.76-3.7,3.77-5.13,5.99C9.32,58.5,32.6,87.79,59.65,78.98C86.92,69.6,87.29,31.43,60.33,21.29z",
    ],
    title: "مرونة في المواعيد",
    description:
      "نقدم جلسات مرنة تتناسب مع جدولك الزمني، سواء كانت وجهًا لوجه أو عبر الإنترنت.",
    name: "24h",
  },
  {
    icon: [
      "M27 46c6.06 0 11-4.94 11-11s-4.94-11-11-11-11 4.94-11 11 4.94 11 11 11zm0-18c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7z",
      "M58.28 39.96c-.24-1.48-1.08-2.8-2.28-3.68l1.98-9.88c.22-1.08-.48-2.14-1.56-2.36-1.08-.22-2.14.48-2.36 1.56l-1.92 9.62c-1.42.14-2.76.8-3.76 1.94l-9.28 10.82H18c-4.42 0-8 3.58-8 8v20c0 3.3 2.7 6 6 6 .7 0 1.38-.12 2-.34v2.34c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-24h7.02c1.24 0 2.4-.56 3.16-1.54l10.98-14.1c.96-1.24 1.38-2.84 1.12-4.4zm-4.28 1.94l-10.98 14.1h-9.02c-1.1 0-2 .9-2 2v26h-10v-24c0-1.1-.9-2-2-2s-2 .9-2 2v16c0 1.1-.9 2-2 2s-2-.9-2-2v-20c0-2.2 1.8-4 4-4h21.08c1.16 0 2.28-.5 3.04-1.4l9.28-10.84c.56-.64 1.5-.78 2.2-.3.4.26.64.66.72 1.12s-.04.92-.34 1.3z",
      "M80 8H48c-3.3 0-6 2.7-6 6v20c0 1.1.9 2 2 2s2-.9 2-2V14c0-1.1.9-2 2-2h32c1.1 0 2 .9 2 2v30c0 1.1-.9 2-2 2H60c-1.1 0-2 .9-2 2s.9 2 2 2h20c3.3 0 6-2.7 6-6V14c0-3.3-2.7-6-6-6z",
      "M76 16H52c-1.1 0-2 .9-2 2s.9 2 2 2h24c1.1 0 2-.9 2-2s-.9-2-2-2z",
      "M76 26H62c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2z",
      "M76 36H62c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2z",
    ],
    title: " تدريبات شخصية",
    description:
      "كل جلسة مصممة لتناسب أهدافك واحتياجاتك، مما يضمن لك الحصول على أقصى استفادة من كل لقاء.",
    name: "",
  },
];
export const CourseCardList = [
  {
    title: " هناك حقيقة مثبتة منذ زمن طويل ",
    description:
      "ن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ ",
    price: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
  },
  {
    title: "هناك حقيقة مثبتة منذ زمن طويل ",
    description:
      "ن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ ",
    price: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
  },
  {
    title: "هناك حقيقة مثبتة منذ زمن طويل ",
    description:
      "ن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ ",
    price: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",
  },
];

export const sortOptions = [
  { titile: "mostPopular", name: "الأكثر شعبية", href: "/", current: true },
  { titile: "bestRating", name: "أفضل تقييم", href: "/", current: false },
  { titile: "newest", name: "الأحدث", href: "/", current: false },
  {
    titile: "lth",
    name: "السعر: من الأقل إلى الأعلى",
    href: "/",
    current: false,
  },
  {
    titile: "htl",
    name: "السعر: من الأعلى إلى الأدنى",
    href: "/",
    current: false,
  },
];
export const subCategories = [
  { titile: "mostPopular", name: "الأكثر شعبية", href: "/", current: true },
  { titile: "newest", name: "الأحدث", href: "/", current: false },
];
export const filters = [
  {
    id: " ",
    name: "الدورات",
    options: [
      { value: "الكنز", label: "الكنز", checked: false },
      { value: "العوالم الفلكية", label: "العوالم الفلكية", checked: false },
    ],
  },
];

export const academicDegreesList = [
  {
    date: "Dec-2023",
    title: "شهادة مدرب الحياة",
    platform: "منصة المنتور",
    description:
      "أهمية الاهتمام بالصحة النفسية بدلاً من الإنجازات المادية فقط، والتي غالبًا ما تشعر بعدم الاكتمال. خصائص المدرب الماهر والمؤثر القادر على التأثير بشكل إيجابي على عملائه. كيفية عمل جلسات التدريب للسماح للعملاء بالتحرر من قيودهم وتحقيق أهدافهم، وكيف يمكن للمؤسسات الاعتماد على اللايف كوتشينج لتحسين أداء موظفيها.",
  },
  {
    date: "May-2023",
    title: "شهادة حل المشكلات واتخاذ القرارات",
    platform: "منصة إدراك",
    description:
      "تطوير المهارات في حل المشكلات واتخاذ القرارات يتطلب فهمًا عميقًا لمفهوم المشكلات بما في ذلك آليات وصفها وتحديدها بشكل دقيق. ففي عالم الأعمال المعاصر، يُعتبر فهم الطرق الفعالة لتحليل المشكلات وتقديم الحلول الإبداعية أمرًا حيويًا لنجاح الفرد والمؤسسة على حد سواء. ومن خلال تعلم تقنيات تحليل المشكلات، واكتساب مهارات اتخاذ القرارات الصائبة، يمكن للأفراد تعزيز أدائهم وتحسين قدرتهم على التفكير النقدي والابتكار.",
  },
  {
    date: "Mar-2023",
    title: "شهادة مدرب حياة معتمد",
    platform: "معهد الدراسات النفسية",
    description:
      "تمكنت من تطوير مهارات الاتصال والتواصل، فهم عميق للسلوك البشري، تطوير مهارات القيادة والتأثير، إدارة الوقت وتحديد الأولويات، مهارات حل المشكلات، التطوير الشخصي والمهني المستمر، بناء علاقات احترافية قوية، إدارة العمل الحر والتسويق للخدمات، التعامل مع التحديات العاطفية والنفسية، وتحقيق الأهداف الشخصية والمهنية.",
  },
  {
    date: "Jan-2023",
    title: "دورة الأمان التام",
    platform: "أكاديمية عمارة",
    description:
      "هذه العملية المطهرة تجلب معها شعوراً بالانفتاح والحرية، مما يمكننا من التقدم بخطوات واثقة نحو مستقبلٍ مشرق ومليء بالإنجازات. فعندما نتخلص من الخوف، نكسر قيودنا الذهنية ونمنح أنفسنا الفرصة للتطور والنمو الشخصي.",
  },
  {
    date: "Jan-2022",
    title: "دورة قوة الكلمة والتفكير ",
    platform: "أكاديمية عمارة",
    description: `تحسين مهارات الاتصال: فهم كيفية التحكم في الأفكار يمكن أن يساعد في تحسين قدرتك على التعبير عن أفكارك بوضوح وقوة.
تعزيز الثقة بالنفس: عندما تتعلم كيفية التحكم في الأفكار والتعبير عنها بوضوح، يمكن أن يزيد ذلك من ثقتك بنفسك وقدرتك على التفاعل مع الآخرين.
تحسين عملية صنع القرارات: فهم كيفية التحكم في الأفكار يمكن أن يساعد في تحليل المواقف بشكل أكثر إيجابية واتخاذ قرارات مدروسة.
تعزيز القيادة: فهم كيفية التحكم في الأفكار وتوجيهها بشكل فعال يمكن أن يجعلك قائداً أكثر تأثيراً وفعالية في مجال عملك أو حياتك الشخصية.`,
  },
  {
    date: "Jan-2021",
    title: "شهادة مهارات التقديم",
    platform: "منصة نفهم",
    description:
      "تتضمن القدرة على تقديم المعلومات والأفكار بشكل فعال وجذاب أمام الجمهور. تشمل هذه المهارة القدرة على التحدث بوضوح وثقة، وتنظيم المحتوى بطريقة منطقية ومنظمة ليسهل فهمه من قبل الجمهور المستهدف. كما تشمل كذلك الاستعداد الجيد قبل العرض وفهم متطلبات الجمهور واحتياجاتهم. مهارة التقديم تعتمد أيضًا على القدرة على الاحتفاظ بانتباه الجمهور والتفاعل معهم بشكل فعال خلال العرض.",
  },
];

export const SkillsList = [
  {
    title: "الخبرة المهنية",
    description:
      "مع سنوات من الخبرة في مجال التدريب الشخصي والمهني، أنا ملتزم بتقديم دعم فعال وتحفيزي لعملائي. خلال مسيرتي المهنية، عملت في مجموعة متنوعة من الأدوار والمهام التي ساعدتني على تطوير مجموعة شاملة من المهارات.",
    icon: gg,
  },
  {
    title: "المهارات الرئيسية",
    description:
      "كمدرب حياة محترف، أعتز بمجموعة المهارات التي طورتها عبر سنوات من الخبرة والتعلم المستمر. هذه المهارات تمكنني من توفير تجربة تدريبية فريدة ومؤثرة لعملائي.",
    icon: skill,
  },
  {
    title: "المعتقدات والقيم الأساسية",
    description:
      "كمدرب حياة، أعتبر معتقداتي وقيمي جزءًا لا يتجزأ من نهجي في التدريب وتوجيه عملائي. هذه المبادئ تشكل الأساس الذي أبني عليه علاقاتي المهنية وتحدد الطريقة التي أقدم بها خدماتي.",
    icon: ethics,
  },
  {
    title: "النهج الشخصي في التدريب",
    description:
      "كمدرب حياة، أتبنى نهجًا شخصيًا يركز على تعزيز القوة الداخلية وإمكانيات كل عميل. أؤمن بأن كل شخص لديه القدرة على تحقيق التغيير الإيجابي والنمو، ودوري هو مساعدتهم على اكتشاف هذه الإمكانيات وتحقيقها.",
    icon: abilities,
  },
  {
    title: "الهوايات والاهتمامات الشخصية",
    description:
      "بالإضافة إلى شغفي بالتدريب والتنمية الشخصية، لدي العديد من الهوايات والاهتمامات التي تثري حياتي وتساعد في الحفاظ على توازني الشخصي. هذه الأنشطة تساهم في تطويري كشخص وكمحترف.",
    icon: lifestyle,
  },
];

export const requestPaymentWaysList = [
  {
    title: "تسجيل الدخول",
    description: [
      "تأكد من تسجيل الدخول أو إنشاء حساب جديد حتي تستطيع إكمال باقي الخطوات",
    ],
  },
  {
    title: "أختر طريقة دفع",
    description: [
      "حدد بأي طريقة تريد سداد القيمة المطلوبة",
      "من خلال حساب فوري",
      "من خلال حساب فودافون كاش",
    ],
  },
  {
    title: "إرسال طلب الحجز",
    description: [
      "قم بالضغط على (عن طريق الدفع الإلكتروني)",
      "قم بملئ الحقول المطلوبة",
      "تأكد من ارفاقك لصورة ايصال الدفع بجودة جيدة",
    ],
  },
  {
    title: "مراجعة الطلب",
    description: [
      "سيتم مراجعة الطلب وحين الانتهاء سيتم ابلاغك عن طريق رسالة بريد إلكتروني",
    ],
  },
];

export const tableCourseColumnsNames = [
  "الرقم",
  "صورة الغلاف",
  "الأسم",
  "الوصف",
  "السعر",
  "عدد الفصول",
  "المحرر",
];
export const tableChapterColumnsNames = [
  "الرقم",
  "صورة الغلاف",
  "الأسم",
  "الوصف",
  "اسم الدورة",
  "عدد المقاطع",
  "المحرر",
];
export const courseFields = [
  {
    name: "name",
    label: "اسم الدورة",
    type: "text",
    placeholder: "",
    data: "text",
  },

  {
    name: "price",
    label: "السعر",
    type: "number",
    placeholder: "",
    data: "number",
  },

  {
    name: "description",
    label: "الوصف",
    type: "text",
    component: "textarea",
    placeholder: "",
    data: "text",
  },
  {
    name: "coverImage",
    label: "صورة الغلاف",
    type: "file",
    placeholder: "",
    data: "image",
  },
];
export const chapterFields = [
  {
    name: "name",
    label: "اسم الفصل",
    type: "text",
    placeholder: "",
    data: "text",
  },

  {
    name: "videos",
    label: "المقاطع",
    type: "url",
    placeholder: "",
    data: "videos",
  },

  {
    name: "description",
    label: "الوصف",
    type: "text",
    component: "textarea",
    placeholder: "",
    data: "text",
  },
  {
    name: "coverImage",
    label: "صورة الغلاف",
    type: "file",
    placeholder: "",
    data: "image",
  },
];
export const sideBarRoutes = [
  {
    routeName: "لوحة التحكم",
    routeLink: "",
    routeIcon: control,
  },
  {
    routeName: "الدورات",
    routeLink: "courses",
    routeIcon: courses,
  },
  {
    routeName: "الفصول",
    routeLink: "chapters",
    routeIcon: chapters,
  },
  {
    routeName: "الواجبات",
    routeLink: "assigments",
    routeIcon: assigments,
  },
];
