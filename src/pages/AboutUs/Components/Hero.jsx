import React from "react";

export default function Hero() {
  return (
    <div className="container my-8 py-2 w-10/12 px-2 sm:px-4 lg:px-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 ">
        {/* image */}
        <div>
          <img
            src="https://m7mdref3t.wordpress.com/wp-content/uploads/2024/01/img_20231224_235257.jpg"
            alt="About Us tailwind page"
            className="max-lg:mx-auto object-cover rounded-lg"
          />
        </div>
        {/* Description */}
        <div className="lg:pl-[100px] flex items-center">
          <div className="w-full">
            <h2 className="flex flex-col font-bold text-2xl lg:text-3xl text-blueVeryDark-900 mb-5 max-lg:text-center">
              محمد رفعت محمد
              <span className="text-blueVeryDark-500 text-xl">مدرب حياة</span>
            </h2>

            <p className="text-xl leading-6 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
              “منذ بداياتي المتواضعة، كان لدي شغف دائم بمساعدة الآخرين على تحقيق
              أقصى إمكاناتهم. هذا الشغف، مدعومًا بخبرتي الشخصية في التغلب على
              التحديات الحياتية، قادني إلى مجال التدريب الشخصي. كمدرب حياة
              معتمد، أنا متحمس لتقديم تجربة تدريبية تحويلية تمكّن الأفراد من
              إعادة اكتشاف قدراتهم وتحقيق أهدافهم. من خلال نهجي الشخصي والمرن في
              التدريب، أسعى إلى إنشاء بيئة داعمة تعزز النمو الشخصي والمهني. أؤمن
              بأن كل شخص لديه القدرة على إحداث تغيير إيجابي في حياته، وهدفي هو
              توفير الأدوات والموارد اللازمة لجعل هذا التغيير ممكنًا. مع كل جلسة
              تدريب، أشعر بإلهام متجدد لرؤية تأثير التدريب على حياة الأشخاص. إن
              تمكين الآخرين ليس فقط مهنتي، بل هو دعوتي. أتطلع إلى مشاركة هذه
              الرحلة معكم ومساعدتكم على فتح باب جديد من الفرص والإمكانيات.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
