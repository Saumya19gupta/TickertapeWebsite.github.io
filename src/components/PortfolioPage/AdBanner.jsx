import React from 'react'

import { motion } from "framer-motion";
// import kotak from "/src/img/kotak.png"
// import logoSRTR from "/src/logo/SRTR.png";

const AdBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-red-700 text-white text-center py-3 px-6 rounded-lg mx-4 md:mx-10 lg:mx-20 shadow-lg relative flex flex-col md:flex-row justify-between items-center"
    >
      {/* Left Side - Ad Text */}
      <div className="text-left">
        <p className="text-lg font-semibold">AVAIL <span className="text-white text-2xl font-bold">ZERO</span> DELIVERY BROKERAGE</p>
        <p className="text-sm">For users under 30 years of age</p>
      </div>

      {/* Button */}
      <motion.a
        href="https://www.kotaksecurities.com/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-5 py-2 mt-3 md:mt-0 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Open Demat Account
      </motion.a>

      {/* Logo */}
      {/* <img
        src="/assets/kotak-logo.png"  
        alt="Kotak Securities"
        className="h-8 md:h-10 ml-3"
      /> */}

      {/* <img src = {kotak} alt = "Phone UI" className = "w-full drop-shadow-lg" />  */}
    </motion.div>
  );
};

export default AdBanner;
