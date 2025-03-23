import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import FooterSection from "/src/img/footer_section_img.png"

const Basement = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-6xl font-semibold text-blue-400 leading-tight">
            Everything you need to redefine your investing experience
          </h1>

          <div className="mt-6 space-y-4 text-lg">
            <p><span className="font-semibold text-gray-300">Assets tracked worth:</span> <span className="text-white">60,500 Cr</span></p>
            <p><span className="font-semibold text-gray-300">Loved by:</span> <span className="text-white">60 L+ investors</span></p>
            <p><span className="font-semibold text-gray-300">Downloads:</span> <span className="text-white">6.2M+</span></p>
            <p><span className="font-semibold text-gray-300">Rated on Google Play:</span> <span className="text-yellow-400">⭐ 4.2</span></p>
          </div>

          {/* Download Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black px-5 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              <FaApple className="text-2xl mr-2" /> Download on iOS
            </a>

            <a
              href="https://play.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black px-5 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
            >
              <FaGooglePlay className="text-2xl mr-2" /> Download on Android
            </a>
          </div>
        </motion.div>

        {/* Right Side Mobile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          {/* <img
            src="/assets/mobile-ui.png" 
            alt="Mobile UI"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
          /> */}
           <img src = {FooterSection} alt = "Phone UI" className = "w-full drop-shadow-lg" />   

        </motion.div>
      </div>
    </section>
  );
};

export default Basement;
