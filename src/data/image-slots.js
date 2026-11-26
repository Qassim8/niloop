// Image slots: places in the design reserved for photos/screenshots that still need to be supplied.
// Save the file as public/images/slots/<id>.<webp|jpg|png> (any of those extensions) and rebuild
// (or restart `npm run dev`): the placeholder is replaced automatically.
//
// ratio  - CSS aspect ratio of the frame (the image is cropped with object-cover)
// size   - recommended pixel size (2x the displayed size, so it stays sharp on retina screens)
export const imageSlots = {
  "hero-bg": {
    title: "خلفية الهيرو (اختيارية)",
    ratio: "16 / 9",
    size: "1920×1080",
    note: "صورة مدينة أو مكتب بدرجات زرقاء داكنة؛ تظهر بشفافية خلف الباترن",
  },
  "about-team": {
    title: "صورة فريق نايلوب",
    ratio: "4 / 5",
    size: "1200×1500",
    note: "صورة حقيقية للفريق أثناء العمل أو اجتماع (بدل الصورة الحالية)",
  },
  "about-gallery-1": {
    title: "من داخل نايلوب (1)",
    ratio: "4 / 3",
    size: "1200×900",
    note: "لقطة من بيئة العمل أو ورشة مع عميل",
  },
  "about-gallery-2": {
    title: "من داخل نايلوب (2)",
    ratio: "4 / 3",
    size: "1200×900",
    note: "لقطة من بيئة العمل أو تسليم مشروع",
  },
  "about-gallery-3": {
    title: "من داخل نايلوب (3)",
    ratio: "4 / 3",
    size: "1200×900",
    note: "لقطة من فعالية أو اجتماع فريق",
  },
  "erp-dashboard": {
    title: "لقطة لوحة تحكم «متجري»",
    ratio: "16 / 10",
    size: "1600×1000",
    note: "لقطة شاشة حقيقية للوحة التقارير أو المخزون في نظام متجري",
  },
  "service-web": {
    title: "صورة خدمة تطوير المواقع",
    ratio: "4 / 3",
    size: "1200×900",
    note: "عرض لأحد مواقعكم على لابتوب وجوال (mockup)",
  },
  "service-graphic": {
    title: "صورة خدمة الجرافيك والهوية",
    ratio: "4 / 3",
    size: "1200×900",
    note: "تصميم هوية بصرية حقيقي من أعمالكم (بطاقات، مطبوعات)",
  },
  "service-marketing": {
    title: "صورة خدمة التسويق الرقمي",
    ratio: "4 / 3",
    size: "1200×900",
    note: "تصاميم سوشيال ميديا أو لوحة نتائج حملة حقيقية",
  },
  "service-content": {
    title: "صورة خدمة كتابة المحتوى",
    ratio: "4 / 3",
    size: "1200×900",
    note: "نموذج من نصوص حقيقية كتبتموها (صفحة موقع أو منشور) بشكل مرتب",
  },
  "person-bareq": { title: "صورة ممثل بريق الشاطئ", ratio: "1 / 1", size: "400×400", note: "صورة شخصية لصاحب الشهادة (بإذنه) بدل الشعار" },
  "person-sanaa": { title: "صورة ممثل السنع", ratio: "1 / 1", size: "400×400", note: "صورة شخصية لصاحب الشهادة (بإذنه)" },
  "person-badr": { title: "صورة ممثل بدر القحطاني", ratio: "1 / 1", size: "400×400", note: "صورة شخصية لصاحب الشهادة (بإذنه)" },
  "person-zadi": { title: "صورة ممثل زادي", ratio: "1 / 1", size: "400×400", note: "صورة شخصية لصاحب الشهادة (بإذنه)" },
  "person-abda": { title: "صورة ممثل ابدأ بسؤال", ratio: "1 / 1", size: "400×400", note: "صورة شخصية لصاحب الشهادة (بإذنه)" },
  "person-eatc": { title: "صورة ممثل EATC", ratio: "1 / 1", size: "400×400", note: "صورة شخصية لصاحب الشهادة (بإذنه)" },
  "process-1": {
    title: "صورة خطوة العمل 1",
    ratio: "4 / 3",
    size: "1200×900",
    note: "لقطة من أول تواصل أو اجتماع تعريفي مع عميل",
  },
  "process-2": {
    title: "صورة خطوة العمل 2",
    ratio: "4 / 3",
    size: "1200×900",
    note: "صورة جلسة تحديد الاحتياجات (ورقة أو لوح أفكار)",
  },
  "process-3": {
    title: "صورة خطوة العمل 3",
    ratio: "4 / 3",
    size: "1200×900",
    note: "لقطة من التنفيذ: شاشة تصميم أو كود",
  },
  "process-4": {
    title: "صورة خطوة العمل 4",
    ratio: "4 / 3",
    size: "1200×900",
    note: "صورة تسليم مشروع أو عميل راضٍ (بإذنه)",
  },
};
