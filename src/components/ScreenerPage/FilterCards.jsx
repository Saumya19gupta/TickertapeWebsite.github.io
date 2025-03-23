import React from 'react'

// import { motion } from "framer-motion";

// const FilterCards = () => {
//   const cards = [
//     {
//       title: "Pre built Screens",
//       description: "Quality Drifters",
//       details: "ROE1Y - revenue growth +7 more filters",
//       users: "35K users have been using this",
//       buttonText: "20+ Pre Built Screens",
//     },
//     {
//       title: "Create Custom filters",
//       description: "Create Your Own Filter",
//       details: "PE Ratio / 1 Year Forward EPS Growth",
//       buttonText: "Create & Add filter",
//     },
//     {
//       title: "Basic & Pro Filters",
//       description: "Earnings Quality Rank",
//       details: "Debt to Equity Ratio, Momentum Rank, Beta Filter, and more",
//     },
//   ];

//   return (
//     <div className="bg-gray-900 text-white py-16 px-6 md:px-16">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="bg-white text-black p-6 rounded-2xl shadow-lg relative overflow-hidden"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <h2 className="text-lg font-semibold text-gray-900">
//                 {card.title}
//               </h2>
//               <p className="mt-2 text-gray-600">{card.description}</p>
//               <p className="mt-1 text-gray-500">{card.details}</p>
//               {card.users && (
//                 <p className="mt-2 text-sm text-gray-400">👥 {card.users}</p>
//               )}
//               {card.buttonText && (
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg"
//                 >
//                   {card.buttonText}
//                 </motion.button>
//               )}
//               <motion.div
//                 className="absolute bottom-4 right-4 text-gray-400 text-xl"
//                 whileHover={{ x: 5 }}
//               >
//                 →
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterCards;

// import React from "react";
import { motion } from "framer-motion";

const FilterCards = () => {
  const cards = [
    {
      title: "Pre built Screens",
      description: "Quality Drifters",
      details: "ROE1Y - revenue growth +7 more filters",
      users: "35K users have been using this",
      buttonText: "20+ Pre Built Screens",
    },
    {
      title: "Create Custom filters",
      description: "Create Your Own Filter",
      details: "PE Ratio / 1 Year Forward EPS Growth",
      buttonText: "Create & Add filter",
    },
    {
      title: "Basic & Pro Filters",
      description: "Earnings Quality Rank",
      details: "Debt to Equity Ratio, Momentum Rank, Beta Filter, and more",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white text-black p-6 rounded-2xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-900">{card.title}</h2>

              {/* Description */}
              <p className="mt-2 text-gray-600">{card.description}</p>
              <p className="mt-1 text-gray-500">{card.details}</p>

              {/* Users */}
              {card.users && (
                <p className="mt-2 text-sm text-gray-400">👥 {card.users}</p>
              )}

              {/* Button */}
              {card.buttonText && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg"
                >
                  {card.buttonText}
                </motion.button>
              )}

              {/* Arrow Animation */}
              <motion.div
                className="absolute bottom-4 right-4 text-gray-400 text-xl"
                whileHover={{ x: 5 }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCards;







