import React from 'react'


import { motion } from "framer-motion";

const SavedScreens = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-16">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-900">Saved screens</h2>

      {/* Card Section */}
      <motion.div
        className="mt-6 bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row justify-between items-center shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Left Section */}
        <div className="text-gray-700">
          <h3 className="text-lg font-semibold text-gray-800">
            Create your first new screen
          </h3>
          <p className="text-gray-500 text-sm">
            Create your custom screen using more than 200 filters!
          </p>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 md:mt-0 bg-gray-900 text-white px-5 py-2 rounded-lg flex items-center space-x-2"
        >
          <span className="text-xl">+</span>
          <span>Create New Screen</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SavedScreens;
