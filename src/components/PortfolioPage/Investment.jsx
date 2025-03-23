import React from 'react'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "stocks", label: "Stocks", color: "bg-yellow-200 text-yellow-800" },
  { id: "mutualFunds", label: "Mutual Funds", color: "bg-purple-200 text-purple-800" },
  { id: "gold", label: "Gold", color: "bg-yellow-400 text-yellow-900" }
];

const contentData = {
  stocks: {
    title: "Stocks & ETFs",
    description: "Invest in individual stocks, ETFs, and smallcases for long-term growth.",
    points: ["Analyze company fundamentals", "Track stock trends", "Get real-time insights"],
    netWorth: "₹ ₹ ₹ ₹ ₹",
    performance: { label: "Stocks", value: "▲ 3.5%", color: "text-green-500" }
  },
  mutualFunds: {
    title: "Mutual Funds",
    description: "Diversify your investments with expert-managed mutual funds.",
    points: ["Compare mutual fund schemes", "Assess risk and returns", "Automate SIP investments"],
    netWorth: "₹ ₹ ₹ ₹ ₹",
    performance: { label: "Mutual Funds", value: "▼ 1.8%", color: "text-red-500" }
  },
  gold: {
    title: "Gold Investment",
    description: "Invest in gold-backed securities for stability and wealth preservation.",
    points: ["Buy and sell digital gold", "Hedge against inflation", "Track live gold prices"],
    netWorth: "₹ ₹ ₹ ₹ ₹",
    performance: { label: "Gold", value: "▲ 2.2%", color: "text-green-500" }
  }
};

const Investment = () => {
  const [activeTab, setActiveTab] = useState("stocks");

  return (
    <div className="bg-gray-50 text-gray-900 py-12 px-6 md:px-16">
      {/* Tab Buttons */}
      <div className="flex gap-3 justify-center md:justify-start">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${tab.color} ${
              activeTab === tab.id ? "ring-2 ring-gray-500" : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-8 gap-8">
        {/* Left Content (Text) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">{contentData[activeTab].title}</h2>
            <p className="text-gray-600">{contentData[activeTab].description}</p>
            <ul className="text-gray-500 space-y-1">
              {contentData[activeTab].points.map((point, index) => (
                <li key={index}>• {point}</li>
              ))}
            </ul>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-80 transition">
              Connect
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Right Content (Stats & Image) */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Floating App Stats */}
          <motion.div
            className="absolute -top-6 right-0 bg-white shadow-md rounded-full px-4 py-2 text-sm flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="font-bold">65L+</span>
            <span className="text-gray-500">Downloads</span>
            <span className="text-yellow-500">⭐ 4.2 App Rating</span>
          </motion.div>

          {/* Investment Stats Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
            <p className="text-gray-600">Net Worth</p>
            <h3 className="text-green-600 text-xl font-bold">{contentData[activeTab].netWorth}</h3>
            <div className="flex justify-between mt-3">
              <span className="text-gray-500">{contentData[activeTab].performance.label}</span>
              <span className={contentData[activeTab].performance.color}>
                {contentData[activeTab].performance.value}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Investment;



// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const tabs = [
//   { id: "stocks", label: "Stocks", color: "bg-yellow-200 text-yellow-800" },
//   { id: "mutualFunds", label: "Mutual Funds", color: "bg-purple-200 text-purple-800" },
//   { id: "gold", label: "Gold", color: "bg-yellow-400 text-yellow-900" }
// ];

// const contentData = {
//   stocks: {
//     title: "Stocks & ETFs",
//     description: "Invest in individual stocks, ETFs, and smallcases for long-term growth.",
//     points: [
//       "Analyze company fundamentals",
//       "Track stock trends and performance",
//       "Get real-time market insights"
//     ],
//     netWorth: "₹ ₹ ₹ ₹ ₹",
//     performance: { label: "Stocks", value: "▲ 3.5%", color: "text-green-500" }
//   },
//   mutualFunds: {
//     title: "Mutual Funds",
//     description: "Diversify your investments with expert-managed mutual funds.",
//     points: [
//       "Compare various mutual fund schemes",
//       "Assess risk levels and returns",
//       "Automate investments with SIPs"
//     ],
//     netWorth: "₹ ₹ ₹ ₹ ₹",
//     performance: { label: "Mutual Funds", value: "▼ 1.8%", color: "text-red-500" }
//   },
//   gold: {
//     title: "Gold Investment",
//     description: "Invest in gold-backed securities for stability and wealth preservation.",
//     points: [
//       "Buy and sell digital gold",
//       "Hedge against inflation",
//       "Track live gold prices"
//     ],
//     netWorth: "₹ ₹ ₹ ₹ ₹",
//     performance: { label: "Gold", value: "▲ 2.2%", color: "text-green-500" }
//   }
// };

// const InvestmentSection = () => {
//   const [activeTab, setActiveTab] = useState("stocks");

//   return (
//     <div className="bg-gray-50 text-gray-900 py-12 px-6 md:px-16">
//       {/* Tab Buttons */}
//       <div className="flex gap-3 justify-center md:justify-start">
//         {tabs.map((tab) => (
//           <motion.button
//             key={tab.id}
//             className={`px-4 py-1 rounded-full text-sm font-medium transition ${tab.color} ${
//               activeTab === tab.id ? "ring-2 ring-gray-500" : ""
//             }`}
//             onClick={() => setActiveTab(tab.id)}
//             whileTap={{ scale: 0.95 }}
//           >
//             {tab.label}
//           </motion.button>
//         ))}
//       </div>

//       {/* Main Content Area */}
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-8 gap-8">
//         {/* Left Content (Text) */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             className="space-y-4 text-center md:text-left"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 50 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-3xl font-bold">{contentData[activeTab].title}</h2>
//             <p className="text-gray-600">{contentData[activeTab].description}</p>
//             <ul className="text-gray-500 space-y-1">
//               {contentData[activeTab].points.map((point, index) => (
//                 <li key={index}>• {point}</li>
//               ))}
//             </ul>
//             <button className="bg-black text-white px-6 py-2 rounded-lg hover:opacity-80 transition">
//               Connect
//             </button>
//           </motion.div>
//         </AnimatePresence>

//         {/* Right Content (Stats & Image) */}
//         <motion.div
//           className="relative flex flex-col items-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Floating App Stats */}
//           <motion.div
//             className="absolute -top-6 right-0 bg-white shadow-md rounded-full px-4 py-2 text-sm flex items-center space-x-2"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             <span className="font-bold">65L+</span>
//             <span className="text-gray-500">Downloads</span>
//             <span className="text-yellow-500">⭐ 4.2 App Rating</span>
//           </motion.div>

//           {/* Investment Stats Card */}
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
//             <p className="text-gray-600">Net Worth</p>
//             <h3 className="text-green-600 text-xl font-bold">{contentData[activeTab].netWorth}</h3>
//             <div className="flex justify-between mt-3">
//               <span className="text-gray-500">{contentData[activeTab].performance.label}</span>
//               <span className={contentData[activeTab].performance.color}>
//                 {contentData[activeTab].performance.value}
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default InvestmentSection;

