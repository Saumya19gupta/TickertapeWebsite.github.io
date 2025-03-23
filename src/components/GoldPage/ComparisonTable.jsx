import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";


const features = [
  { title: "Buy as low as ₹10", digital: true, physical: false },
  { title: "Trade 24/7 at market linked prices", digital: true, physical: false },
  { title: "No lock-in, easy to sell", digital: true, physical: false },
  { title: "Security", digital: true, physical: true },
  { title: "No need for a demat account", digital: true, physical: false },
  { title: "Conversion to physical gold", digital: true, physical: true },
];

const ComparisonTable = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
      {/* Heading */}
      <motion.h2 
        className="text-3xl font-bold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Start Your Gold Investment Today
      </motion.h2>

      <motion.div 
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="grid grid-cols-3 text-center font-semibold text-lg pb-4 border-b">
          <span></span>
          <span className="text-black">Digital Gold</span>
          <span className="text-black">Physical Gold</span>
        </div>

        {/* Features List */}
        <div className="divide-y">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="grid grid-cols-3 text-center py-3 items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-gray-700">{feature.title}</span>
              <span>{feature.digital ? <CheckCircle className="text-green-500 w-6 h-6 mx-auto" /> : <XCircle className="text-red-500 w-6 h-6 mx-auto" />}</span>
              <span>{feature.physical ? <CheckCircle className="text-green-500 w-6 h-6 mx-auto" /> : <XCircle className="text-red-500 w-6 h-6 mx-auto" />}</span>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <motion.button 
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition"
            whileHover={{ scale: 1.05 }}
          >
            Invest Now
          </motion.button>
          <motion.button 
            className="px-6 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition"
            whileHover={{ scale: 1.05 }}
          >
            Read More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ComparisonTable;
