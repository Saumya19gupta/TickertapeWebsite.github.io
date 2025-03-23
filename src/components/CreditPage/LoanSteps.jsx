import React from 'react'
// import { motion } from "framer-motion";

// const steps = [
//   {
//     title: "Calculate credit limit",
//     description: "Based on your mutual fund investments",
//     icon: "🧮",
//   },
//   {
//     title: "Confirm amount",
//     description: "",
//     icon: "❓",
//   },
//   {
//     title: "Link bank account",
//     description: "",
//     icon: "🏦",
//   },
//   {
//     title: "Pledge mutual funds",
//     description: "",
//     icon: "🔗",
//   },
// ];

// const LoanSteps = () => {
//   return (
//     <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
//       {/* Header */}
//       <motion.div
//         className="text-center mb-8"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 className="text-3xl md:text-4xl font-bold">
//           Cash against your mutual funds in 4 easy steps
//         </h1>
//       </motion.div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl">
//         {/* Steps Section */}
//         <motion.div
//           className="w-full md:w-1/2 space-y-6"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className={`flex items-center gap-4 p-4 rounded-lg shadow-md transition-all ${
//                 index === 0 ? "border-b-4 border-blue-600 bg-gray-100" : "hover:bg-gray-100"
//               }`}
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-2xl">{step.icon}</span>
//               <div>
//                 <h4 className="text-lg font-semibold">{step.title}</h4>
//                 {step.description && <p className="text-gray-500 text-sm">{step.description}</p>}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Image Section */}
//         <motion.div
//           className="w-full md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <div className="bg-gray-100 p-6 rounded-lg">
//             <span className="text-5xl">💵</span>
//             <span className="text-5xl ml-2">📊</span>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LoanSteps;


import { motion } from "framer-motion";

const steps = [
  {
    title: "Calculate credit limit",
    description: "Based on your mutual fund investments",
    icon: "🧮",
  },
  {
    title: "Confirm amount",
    description: "",
    icon: "❓",
  },
  {
    title: "Link bank account",
    description: "",
    icon: "🏦",
  },
  {
    title: "Pledge mutual funds",
    description: "",
    icon: "🔗",
  },
];

const LoanSteps = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">
          Cash against your mutual funds in 4 easy steps
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-5xl">
        {/* Steps Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-4 p-4 rounded-lg shadow-md transition-all ${
                index === 0 ? "border-b-4 border-blue-600 bg-gray-100" : "hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl">{step.icon}</span>
              <div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                {step.description && <p className="text-gray-500 text-sm">{step.description}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gray-100 p-6 rounded-lg relative">
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png" // Money Stack Icon
              alt="Money Stack"
              className="w-32 h-32"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.img
              src="https://cdn-icons-png.flaticon.com/512/3874/3874404.png" // Calculator Icon
              alt="Calculator"
              className="w-20 h-20 absolute bottom-0 right-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Button */}
      <motion.button
        className="mt-10 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg font-semibold text-lg transition-all hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Apply Now
      </motion.button>
    </div>
  );
};

export default LoanSteps;
