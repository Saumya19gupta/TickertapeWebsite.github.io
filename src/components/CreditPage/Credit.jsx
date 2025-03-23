// import React from 'react'

// import { motion } from "framer-motion";

// const LoanSection = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
//       {/* Header Section */}
//       <div className="text-center">
//         <motion.h1
//           className="text-4xl md:text-5xl font-bold"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Get cash against <span className="text-blue-500">mutual funds!</span>
//         </motion.h1>
//         <p className="text-gray-400 mt-2">Money credited within 2 working hours ⚡</p>
//       </div>

//       {/* Button */}
//       <motion.button
//         className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-lg font-medium rounded-lg transition-all shadow-lg"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Find your credit limit
//       </motion.button>

//       {/* Info Box */}
//       <motion.div
//         className="mt-6 bg-gray-800 p-4 rounded-lg text-gray-300 text-sm flex items-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         <span className="mr-2">📌</span> 100+ users applied for a loan this week
//       </motion.div>

//       {/* Credit Limit Section */}
//       <motion.div
//         className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.5 }}
//       >
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-72 text-center">
//           <h2 className="text-xl font-semibold">Credit Limit</h2>
//           <p className="text-3xl font-bold text-blue-400">₹4,50,000</p>
//         </div>

//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-72 text-center">
//           <h2 className="text-xl font-semibold">Cash Withdrawn</h2>
//           <p className="text-2xl font-bold text-green-400">₹1,00,000</p>
//         </div>
//       </motion.div>

//       {/* Interest Rates Section */}
//       <div className="mt-10 text-center">
//         <h3 className="text-lg text-gray-400">Loan Against Mutual Funds</h3>
//         <p className="text-3xl font-bold text-green-400">10.50%</p>
//       </div>
//     </div>
//   );
// };

// export default LoanSection;


import React from 'react'
import { motion } from "framer-motion";

const LoanSection = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Get cash against <span className="text-blue-500">mutual funds!</span>
        </h1>
        <p className="text-gray-400 mt-2 text-lg">Money credited within 2 working hours ⚡</p>
      </motion.div>

      {/* Button */}
      <motion.button
        className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-lg font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Find your credit limit
      </motion.button>

      {/* Info Box */}
      <motion.div
        className="mt-6 bg-gray-800 p-4 rounded-lg text-gray-300 text-sm flex items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="mr-2">📌</span> 100+ users applied for a loan this week
      </motion.div>

      {/* Credit Limit Section */}
      <motion.div
        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-72 text-center hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold text-gray-300">Credit Limit</h2>
          <p className="text-3xl font-bold text-blue-400">₹4,50,000</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-72 text-center hover:scale-105 transition-transform">
          <h2 className="text-xl font-semibold text-gray-300">Cash Withdrawn</h2>
          <p className="text-2xl font-bold text-green-400">₹1,00,000</p>
        </div>
      </motion.div>

      {/* Interest Rates Section */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h3 className="text-lg text-gray-400">Loan Against Mutual Funds</h3>
        <p className="text-4xl font-bold text-green-400">10.50%</p>
      </motion.div>
    </div>
  );
};

export default LoanSection;


