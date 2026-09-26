/*
 * All site content, taken from the live ededcourses.com WordPress install
 * (Tutor LMS courses, WooCommerce products, menus, pages). Edit here to update the site.
 */
const SITE = {
  name: "EDED GROUP",
  tagline: "সংক্ষেপে সবকিছু একখানেই",
  origin: "https://ededcourses.com",
  logo: "https://ededcourses.com/wp-content/uploads/2025/12/cropped-s-1.png",
  icon: "https://ededcourses.com/wp-content/uploads/2025/12/cropped-EDED_YT_WATERMARK-removebg-1.png",
  address: "D-31, Eastern Housing, Pallabi 2nd Phase, Mirpur, Dhaka",
  tradeLicense: "TRAD/DNCC/020017/2025",
  whatsapp: "+8801410931431",
  whatsappLabel: "01410931431",
  phone: "01343017631",
  email: "help@ededcourses.com",
  youtube: "https://www.youtube.com/playlist?list=PLYruNlr8Icod_D7D7ZppLL_tG9Bk36CDl",
  dashboard: "https://ededcourses.com/dashboard/",
  affiliate: "https://ededcourses.com/affiliate-dashboard/",
  appointment: "https://ededcourses.com/appointment/",
};

const U = "https://ededcourses.com/wp-content/uploads/";

const CATEGORIES = [
  { id: "admission", name: "Compact Admission Courses", bn: "কমপ্যাক্ট অ্যাডমিশন" },
  { id: "aca2ad", name: "Academic to Admission Courses", bn: "একাডেমিক টু অ্যাডমিশন" },
  { id: "revision", name: "HSC Compact Revision Courses", bn: "কমপ্যাক্ট রিভিশন" },
  { id: "a2z", name: "Compact A2Z", bn: "পকেট রিভিশন ম্যাটেরিয়াল" },
  { id: "other", name: "Community & Resources", bn: "কমিউনিটি" },
];

/* batch: HSC year the course targets. legacy: older batch kept for enrolled students. */
const COURSES = [
  { id: 30782, slug: "ac2ad28", title: "HSC 28 Compact Academic to Admission", subjects: "Physics · Chemistry · Math", cat: "aca2ad", batch: 28, img: U + "2026/06/shobb-1024x576.png", price: 4070, regular: 5270, lessons: 402, students: 8, badge: "New" },
  { id: 13635, slug: "ac27ad", title: "HSC 27 Academic to Admission: Full Syllabus", subjects: "Physics · Chemistry · Math", cat: "aca2ad", batch: 27, img: U + "2026/01/27-th-aca2ad-1024x576.png", price: 4070, regular: 5270, lessons: 526, students: 540, badge: "Bestseller" },
  { id: 2436, slug: "hsc26-aca-to-ad", title: "HSC 26 Academic to Admission: Full Syllabus", subjects: "Physics · Higher Math", cat: "aca2ad", batch: 26, img: U + "2025/12/acatoad-1024x576.png", price: 3070, regular: 4570, lessons: 521, students: 606 },
  { id: 32630, slug: "combo26", title: "Admission Combo Batch 26: Engineering + Varsity + GST", subjects: "Physics · Chemistry · Math", cat: "admission", batch: 26, img: U + "2026/08/Red-and-Yellow-Bold-Typographic-Youtube-Thumbnail--1024x576.png", price: 3970, regular: 5070, lessons: 466, students: 34, badge: "Best value" },
  { id: 31707, slug: "ceb26", title: "Compact Engineering Batch 26", subjects: "Physics · Chemistry · Math", cat: "admission", batch: 26, img: U + "2026/07/final-1024x572.jpg", price: 2570, regular: 4070, lessons: 460, students: 108 },
  { id: 31714, slug: "cvb26", title: "Compact Varsity + GST Batch 26", subjects: "Physics · Chemistry · Math", cat: "admission", batch: 26, img: U + "2026/07/varsity-final-1024x572.png", price: 2570, regular: 4070, lessons: 448, students: 52 },
  { id: 18518, slug: "crb-26", title: "HSC 26 Compact Revision Batch", subjects: "Physics · Chemistry · Higher Math", cat: "revision", batch: 26, img: U + "2026/01/ededgroup-course-banner-v1-1024x576.png", price: 970, regular: 1670, lessons: 526, students: 906, badge: "Most enrolled" },
  { id: 29343, slug: "prm", title: "Pocket Revision Material + Final Exam Batch", subjects: "Physics · Chemistry · Math", cat: "a2z", img: U + "2026/06/1781695404549-1024x572.png", price: 370, regular: 1270, lessons: 66, students: 226 },
  { id: 30295, slug: "prm-pcm", title: "Pocket Revision Material: PCM", subjects: "Physics · Chemistry · Math", cat: "a2z", img: U + "2026/06/Gemini_Generated_Image_z877mwz877mwz877-1-1024x572.png", price: 270, regular: 1070, lessons: 6, students: 55 },
  { id: 30188, slug: "prm-bio", title: "Pocket Revision Material: Biology", subjects: "Biology", cat: "a2z", img: U + "2026/06/Gemini_Generated_Image_1i2grh1i2grh1i2g-1-1024x571.png", price: 170, regular: 970, lessons: 24, students: 59 },
  { id: 23210, slug: "chemistry-academic-to-admission-2026", title: "Chemistry Academic to Admission 2026", subjects: "Chemistry", cat: "aca2ad", batch: 26, img: null, price: 970, regular: 2570, lessons: 151, students: 10 },
  { id: 12557, slug: "hsc26-bio-aca-to-ad", title: "HSC 26 Biology Academic to Admission", subjects: "Biology", cat: "aca2ad", batch: 26, img: U + "2025/06/WhatsApp-Image-2025-06-27-at-11.31.41_89108c40-1024x576.jpg", price: 1570, regular: 2070, lessons: 53, students: 40 },
  { id: 26706, slug: "new-course", title: "Ultimate Syllabus Community", subjects: "Free community", cat: "other", img: null, price: 0, regular: 0, lessons: 2, students: 241, badge: "Free" },
  { id: 267, slug: "life-physicschemistryhigher-math-aca-to-ad-revision-material", title: "\"LIFE\" Aca to Ad Revision Material", subjects: "Physics · Chemistry · Higher Math", cat: "other", img: U + "2024/04/Weekly-Solve-Batch-1024x576.png", price: null, regular: null, lessons: 3, students: 110 },
  // Previous batches
  { id: 4527, slug: "engiqb", title: "Compact Engineering QB Solve Batch 25", subjects: "Physics · Higher Math", cat: "admission", batch: 25, legacy: true, img: U + "2025/12/eqb-1024x576.jpg", price: 2170, regular: 2570, lessons: 295, students: 909 },
  { id: 4530, slug: "vagstqb", title: "Compact Varsity-A/GST QB Solve Batch 25", subjects: "Physics · Higher Math", cat: "admission", batch: 25, legacy: true, img: U + "2025/12/vagst-1024x576.jpg", price: 2170, regular: 2570, lessons: 320, students: 415 },
  { id: 4531, slug: "comboqb", title: "Compact QB Solve Combo Batch (Engineering + Varsity-A/GST)", subjects: "Physics · Higher Math", cat: "admission", batch: 25, legacy: true, img: U + "2025/09/Untitled-design-5-1024x576.png", price: 3170, regular: 3570, lessons: 346, students: 34 },
  { id: 4300, slug: "crb25", title: "HSC 25 Compact Revision Batch", subjects: "Physics · Higher Math", cat: "revision", batch: 25, legacy: true, img: U + "2025/12/crb-1024x576.jpg", price: 1570, regular: 2570, lessons: 63, students: 708 },
  { id: 669, slug: "hsc-25-academic-to-admission-course-physicshigher-math", title: "HSC 25 Academic to Admission Course", subjects: "Physics · Higher Math", cat: "aca2ad", batch: 25, legacy: true, img: U + "2024/11/HSC26-1-1024x576.png", price: 1570, regular: 2570, lessons: 321, students: 160 },
  { id: 8810, slug: "bio-crb", title: "HSC 25 Biology Compact Revision Batch", subjects: "Biology", cat: "revision", batch: 25, legacy: true, img: U + "2025/04/biocrfbthumb-1024x576.jpg", price: 1270, regular: 2270, lessons: 14, students: 54 },
  { id: 3076, slug: "admission24-engineering-private-batch-physicshigher-math", title: "Engineering'24 Compact QB Solve Batch", subjects: "Physics · Higher Math", cat: "admission", batch: 24, legacy: true, img: U + "2024/11/Engineering-1024x576.png", price: 1570, regular: 2570, lessons: 94, students: 764 },
  { id: 3078, slug: "admission24-varisty-a-unit-gst-private-batch-physicshigher-math", title: "Varsity + GST + Agri GST QB Solve Batch'24", subjects: "Physics · Higher Math", cat: "admission", batch: 24, legacy: true, img: U + "2025/03/Phisics-Book-Cover-1024x576.png", price: 1570, regular: 2570, lessons: 70, students: 234 },
  { id: 2984, slug: "admission-combo-engineeringvarsity-a-unit-batch-physicshigher-math", title: "Admission'24 Combo Batch (Engineering + Varsity A)", subjects: "Physics · Higher Math", cat: "admission", batch: 24, legacy: true, img: U + "2024/11/ADMISSION-COMBO-1-1024x576.png", price: 2570, regular: 3570, lessons: 111, students: 89 },
  { id: 3137, slug: "higher-math-engineering-admission-private-batch", title: "Higher Math Engineering Admission Private Batch", subjects: "Higher Math", cat: "admission", batch: 24, legacy: true, img: U + "2024/09/hE-1024x576.png", price: 1070, regular: 2070, lessons: 15, students: 0 },
  { id: 3136, slug: "higher-math-varsity-a-unit-gst-admission-private-batch", title: "Higher Math Varsity A/GST Admission Private Batch", subjects: "Higher Math", cat: "admission", batch: 24, legacy: true, img: U + "2024/09/hV-1024x576.png", price: 1070, regular: 2070, lessons: 15, students: 0 },
  { id: 3068, slug: "physics-engineering-admission-private-batch", title: "Physics Engineering Admission Private Batch", subjects: "Physics", cat: "admission", batch: 24, legacy: true, img: U + "2024/09/PE-1024x576.png", price: 1070, regular: 2070, lessons: 17, students: 0 },
  { id: 3074, slug: "physics-varisty-a-unit-gst-admission-private-batch", title: "Physics Varsity A/GST Admission Private Batch", subjects: "Physics", cat: "admission", batch: 24, legacy: true, img: U + "2024/09/PV-1024x576.png", price: 1070, regular: 2070, lessons: 17, students: 0 },
];

const PRODUCTS = [
  { slug: "compact-organic-hand-note-printed-copy", name: "Compact Organic Hand-Note (Printed Copy)", cat: "Compact Publications", img: U + "2026/08/Gemini_Generated_Image_ktunz2ktunz2ktun-01-718x1024.jpeg", price: 770, regular: 1070, physical: true },
  { slug: "pocket-revision-material", name: "PRM With Exam Batch: Phy, Chem, Math", cat: "E-Books", img: U + "2026/06/1781695520522-1.png", price: 370, regular: 1270 },
  { slug: "prm-phy-chem-math", name: "PRM: Phy, Chem, Math", cat: "E-Books", img: U + "2026/06/Gemini_Generated_Image_z877mwz877mwz877-1-1024x572.png", price: 270, regular: 1070 },
  { slug: "prm-biology", name: "PRM: Biology", cat: "E-Books", img: U + "2026/06/Gemini_Generated_Image_1i2grh1i2grh1i2g-1-1024x571.png", price: 170, regular: 970 },
  { slug: "issb-course-by-military-freaks", name: "ISSB Course by Military Freaks", cat: "Career", img: null, price: 2870, regular: 3500 },
];

const MENTORS = [
  { name: "Afsan Bin Ali", img: U + "2026/08/IMG-20260731-WA0020.jpg" },
  { name: "Farhan Shahriar Samit", img: U + "2026/08/IMG-20260801-WA0012.jpg" },
  { name: "Fahmid Hasan Himel", img: U + "2026/08/IMG-20260801-WA0004-scaled.jpg" },
  { name: "Subaita Tasnim Khan", img: U + "2026/08/IMG-20260731-WA0022.jpg" },
  { name: "S.M. Sayem", img: U + "2026/08/IMG-20260801-WA0001.jpg" },
  { name: "Irfan Khan Raiyan", img: U + "2026/08/IMG-20260801-WA0013.jpg" },
];

/* Landing pages for each HSC batch (from /hsc-26, /hsc-27, /hsc-28) */
const BATCHES = {
  26: {
    title: "HSC 26 Compact Admission",
    emoji: "🏆",
    price: 2570, regular: 3070,
    coupon: "Sep28", couponOff: 600,
    buy: "#batch-courses",
    points: [
      { h: "প্রতিটি অধ্যায়ের কমপ্যাক্ট ক্লাস", p: "প্রতিটি অধ্যায়ের ক্লাসগুলো গড়ে ২ থেকে ৩ ঘণ্টার হয়ে থাকে। আর এই ক্লাসগুলো থেকে ভর্তি পরীক্ষায় আমরা গত ৩ বছর ধরে ধারাবাহিকভাবে ৮০% কমন দিয়ে আসছি।" },
      { h: "প্রশ্নব্যাংক কেন্দ্রিক ও কমন উপযোগী প্রস্তুতি", p: "আমরা প্রশ্নব্যাংকের সবচেয়ে গুরুত্বপূর্ণ ও সিলেক্টিভ ম্যাথগুলো করাই, যা থেকে পরীক্ষায় সরাসরি কমন পাওয়ার সম্ভাবনা থাকে সর্বোচ্চ।" },
      { h: "টপ ১০০ নয়, টপ ৫০০ লক্ষ্য", p: "সেরা ১০০-তে ঢোকার জন্য হয়তো আমরা তোমাকে সাহায্য করতে পারব না, তবে আমরা এটা নিশ্চিত করব যাতে তুমি তোমার স্বপ্নের বিশ্ববিদ্যালয়ে অন্তত চান্স পেয়ে আসতে পারো। EDED কে সবাই চেনে এটার জন্যই!" },
    ],
    weekly: { done: 5, total: 12 },
  },
  27: {
    title: "HSC 27 Compact Zone",
    emoji: "🎯",
    price: 4070, regular: 5270,
    coupon: "compact", couponOff: 780,
    buy: "https://ededcourses.com/courses/ac27ad/",
    bundle: [
      { name: "Compact Engineering Batch", value: 2070 },
      { name: "Compact Varsity Batch", value: 2070 },
      { name: "Compact Revision Batch", value: 1570 },
    ],
    downloads: "14,570",
  },
  28: {
    title: "HSC 28 Compact Zone",
    emoji: "🎒",
    price: 4070, regular: 5270,
    coupon: "compact", couponOff: 780,
    buy: "https://ededcourses.com/courses/ac2ad28/",
  },
};

const DEMOS = [
  { subject: "Physics", topic: "Magnetic Effect of Current & Magnetism" },
  { subject: "Higher Math", topic: "বিন্যাস সমাবেশ (Permutation & Combination)" },
  { subject: "Chemistry", topic: "Organic Chemistry" },
];

const REVIEWS = [
  "2026/04/Screenshot_20260422-192827.jpg", "2026/04/Screenshot_20260421-220439.png",
  "2026/04/Screenshot_20260418-211717.png", "2026/04/Screenshot_20260418-211833.png",
  "2026/04/Screenshot_20260418-211917.png", "2026/04/Screenshot_20260418-211949.png",
  "2026/04/Screenshot_20260418-212103.png", "2026/04/Screenshot_20260418-212115.png",
  "2026/04/Screenshot_20260418-212144.png", "2026/04/Screenshot_20260418-212222.png",
  "2026/04/Screenshot_20260414-190503.png", "2026/04/Screenshot_20260414-190444.png",
  "2026/04/Screenshot_20260413-154145.png", "2026/04/Screenshot_20260413-202101.png",
  "2026/04/Screenshot_20260413-202118.png", "2026/04/Screenshot_20260413-202127.png",
  "2026/04/Screenshot_20260222-171408.png", "2026/04/Screenshot_20260221-174504.png",
  "2026/04/Screenshot_20260219-153416.png", "2026/04/Screenshot_20260219-153612.png",
  "2026/04/Screenshot_20260216-145251.png", "2026/04/Screenshot_20260215-163727.png",
  "2026/04/Screenshot_20260210-123040.png", "2026/04/Screenshot_20260209-233300.png",
].map((p) => U + p);
