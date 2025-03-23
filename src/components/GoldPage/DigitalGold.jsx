
import React from "react";
import { motion } from "framer-motion";

// import img from "/src/img/Gold.webp"

import Gold1 from "/src/img/Gold.webp"

export default function DigitalGold() {
  return (
    <div className="relative w-full bg-gray-900 text-white pb-16">
      {/* Top Offer Banner */}
      <motion.div
        className="w-full bg-purple-700 text-center text-sm py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-semibold">Mahashivratri Special Offers! </span>
        Schedule your gold purchase & get up to <span className="font-semibold">₹100</span> worth of free gold! →
      </motion.div>

      {/* Main Section */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 mt-10">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 mb-2">Introducing <span className="text-blue-500 font-semibold">Digital Gold</span></p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Tackle market volatility with <span className="text-yellow-400">Digital Gold</span>
          </h1>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>⭐ Track your gold portfolio in real-time</li>
            <li>⭐ Start a SIP and withdraw anytime</li>
            <li>⭐ No transaction fee</li>
          </ul>

          {/* CTA Button */}
          <motion.button
            className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Invest Now
            <span className="ml-2 px-2 py-1 bg-yellow-400 text-black rounded-md text-sm">
              🎁 Get Free Gold worth ₹100
            </span>
          </motion.button>
        </motion.div>

        {/* Right Side - Gold Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <motion.img
            src= "/gold-illustration.png"
            alt="Digital Gold"
            className="w-full max-w-md"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          /> */}

          
           <img src = {Gold1} alt = "Phone UI" className = "w-full drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Bottom Information */}
      <p className="text-gray-400 text-center mt-6 text-sm">
        • High Liquidity • Safe & Secure • 99.50% Pure
      </p>


      

    </div>
  );
}
