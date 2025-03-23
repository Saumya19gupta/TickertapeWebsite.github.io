// import React from "react";
// import { motion } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination, Navigation } from "swiper/modules";

// const articles = [
//   {
//     title: "How to invest in Digital Gold",
//     date: "2023-10-04",
//     readTime: "1 min read",
//     img: "/images/article1.jpg",
//   },
//   {
//     title: "5 reasons why you should invest in Digital Gold",
//     date: "2023-10-05",
//     readTime: "3 min read",
//     img: "/images/article2.jpg",
//   },
//   {
//     title: "Myths vs Reality about investing in Digital Gold",
//     date: "2023-10-05",
//     readTime: "3 min read",
//     img: "/images/article3.jpg",
//   },
//   {
//     title: "How can Digital Gold act as a financial cushion?",
//     date: "2023-10-05",
//     readTime: "4 min read",
//     img: "/images/article4.jpg",
//   },
// ];

// const DigitalGold = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       {/* Hero Section */}
//       <motion.div
//         className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center text-center md:text-left"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Start investing in Digital Gold
//           </h1>
//           <p className="text-gray-600 mt-2">
//             💰 <strong>92%</strong> of users start by investing ₹5000 in gold
//           </p>
//           <motion.button
//             className="mt-4 bg-black text-white px-5 py-2 rounded-md flex items-center justify-center gap-2"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             Invest now <FaArrowRight />
//           </motion.button>
//         </div>
//         <motion.img
//           src="/images/gold-illustration.png"
//           alt="Gold Investment"
//           className="w-40 md:w-60 mt-4 md:mt-0"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//         />
//       </motion.div>

//       {/* Learn More Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold text-gray-800">Learn more</h2>

//         {/* Carousel */}
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={10}
//           pagination={{ clickable: true }}
//           navigation
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           modules={[Pagination, Navigation]}
//           className="mt-4"
//         >
//           {articles.map((article, index) => (
//             <SwiperSlide key={index}>
//               <motion.div
//                 className="bg-white shadow-md rounded-lg overflow-hidden"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <img src={article.img} alt={article.title} className="w-full h-40 object-cover" />
//                 <div className="p-4">
//                   <h3 className="font-semibold text-gray-800">{article.title}</h3>
//                   <p className="text-gray-600 text-sm">
//                     {article.date} • {article.readTime}
//                   </p>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default DigitalGold;

import React from "react";
import { motion } from 'framer-motion';
import Gold from "/src/img/Gold2.jpg"

const GoldInvestment = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Hero Section */}
      <motion.div 
        className="bg-white rounded-xl shadow-lg p-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800">Start Investing in Digital Gold</h1>
        <p className="text-gray-600 mt-2">💰 92% of users start by investing ₹5000 in gold</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800"
        >
          Invest Now
        </motion.button>
      </motion.div>

      {/* Learn More Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Learn More</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              {/* <img src={article.image} alt={article.title} className="w-full rounded-lg" /> */}
              <img src = {Gold} alt = "Phone UI" className = "w-full drop-shadow-lg" />
              <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
              <p className="text-gray-500 text-sm">{article.date} • {article.readTime} min read</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const articles = [
  { title: "How to invest in Digital Gold", date: "2023-10-04", readTime: "1", image: "https://via.placeholder.com/300" },
  { title: "5 reasons to invest in Digital Gold", date: "2023-10-05", readTime: "3", image: "https://via.placeholder.com/300" },
  { title: "Myths vs reality about investing in Digital Gold", date: "2023-10-05", readTime: "3", image: "https://via.placeholder.com/300" },
  { title: "How can Digital Gold act as a financial cushion?", date: "2023-10-05", readTime: "4", image: "https://via.placeholder.com/300" },
];

export default GoldInvestment;
