import React from 'react'
import { motion } from "framer-motion";

const LoanInfo = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          What is loan against mutual funds?
        </h1>
        <p className="text-gray-500 mt-2 text-lg max-w-2xl mx-auto">
          It is a type of loan where you can pledge your mutual funds to obtain
          instant funds from a lender.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
        {/* Left Section - Image */}
        <motion.div
          className="w-full md:w-1/2 p-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-blue-600 rounded-lg p-6 shadow-lg">
            <h2 className="text-white text-lg font-semibold">HOW IT WORKS</h2>
            <p className="text-white text-2xl font-bold my-2">
              Loans against mutual funds
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition-all">
              Read more
            </button>
          </div>
        </motion.div>

        {/* Right Section - Benefits */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold">
            Why choose loans against mutual funds?
          </h3>
          <div className="space-y-4">
            {/* Feature 1 */}
            <motion.div
              className="flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-600 text-3xl">📉</span>
              <div>
                <h4 className="text-lg font-semibold">Low Interest</h4>
                <p className="text-gray-500 text-sm">
                  Interest rate as low as 10.50% per annum
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-600 text-3xl">💰</span>
              <div>
                <h4 className="text-lg font-semibold">Stay Invested</h4>
                <p className="text-gray-500 text-sm">
                  Your mutual funds continue to earn returns
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-400 text-3xl">🛡️</span>
              <div>
                <h4 className="text-lg font-semibold">Flexi Cash</h4>
                <p className="text-gray-500 text-sm">
                  Focus on wealth protection near maturity
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <motion.div
        className="mt-10 text-lg text-green-600 font-semibold"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Get cash at <span className="font-bold">10.50% pa</span> — Direct to
        your bank account
      </motion.div>
    </div>
  );
};

export default LoanInfo;


// import { motion } from "framer-motion";

// const LoanInfo = () => {
//   return (
//     <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
//       {/* Header Section */}
//       <motion.div
//         className="text-center mb-8"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-3xl md:text-4xl font-bold">
//           What is loan against mutual funds?
//         </h1>
//         <p className="text-gray-500 mt-2 text-lg max-w-2xl mx-auto">
//           It is a type of loan where you can pledge your mutual funds to obtain
//           instant funds from a lender.
//         </p>
//       </motion.div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
//         {/* Left Section - Image Box */}
//         <motion.div
//           className="w-full md:w-1/2 p-4"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="bg-blue-600 rounded-lg p-6 shadow-lg text-white text-center">
//             <h2 className="text-lg font-semibold">HOW IT WORKS</h2>
//             <p className="text-2xl font-bold my-2">Loans against mutual funds</p>
//             <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition-all">
//               Read more
//             </button>
//           </div>
//         </motion.div>

//         {/* Right Section - Features */}
//         <motion.div
//           className="w-full md:w-1/2 space-y-6"
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <h3 className="text-2xl font-semibold">Why choose loans against mutual funds?</h3>
//           <div className="space-y-4">
//             {/* Feature 1 */}
//             <motion.div
//               className="flex items-start gap-4"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-blue-600 text-3xl">📉</span>
//               <div>
//                 <h4 className="text-lg font-semibold">Low Interest</h4>
//                 <p className="text-gray-500 text-sm">
//                   Interest rate as low as 10.50% per annum
//                 </p>
//               </div>
//             </motion.div>

//             {/* Feature 2 */}
//             <motion.div
//               className="flex items-start gap-4"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-green-600 text-3xl">💰</span>
//               <div>
//                 <h4 className="text-lg font-semibold">Stay Invested</h4>
//                 <p className="text-gray-500 text-sm">
//                   Your mutual funds continue to earn returns
//                 </p>
//               </div>
//             </motion.div>

//             {/* Feature 3 */}
//             <motion.div
//               className="flex items-start gap-4"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-blue-400 text-3xl">🛡️</span>
//               <div>
//                 <h4 className="text-lg font-semibold">Flexi Cash</h4>
//                 <p className="text-gray-500 text-sm">
//                   Focus on wealth protection near maturity
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Footer Section */}
//       <motion.div
//         className="mt-10 text-lg text-green-600 font-semibold"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//       >
//         Get cash at <span className="font-bold">10.50% pa</span> — Direct to
//         your bank account
//       </motion.div>
//     </div>
//   );
// };

// export default LoanInfo;

