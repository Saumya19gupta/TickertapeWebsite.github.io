import React from 'react'

import { useState } from "react";
import { motion } from "framer-motion";

const StockScreener = () => {
  const [activeTab, setActiveTab] = useState("stocks");

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6 md:px-16">
      {/* Header Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          A <span className="text-yellow-400">360° View</span> of Your Investments
        </h1>
        <p className="text-gray-300 mt-3 text-lg">
          Compare diversification, predict growth & analyze trends.
        </p>
      </motion.div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setActiveTab("stocks")}
          className={`px-5 py-2 rounded-full transition ${
            activeTab === "stocks" ? "bg-yellow-400 text-black" : "bg-gray-700"
          }`}
        >
          Stocks
        </button>
        <button
          onClick={() => setActiveTab("mutualfunds")}
          className={`px-5 py-2 rounded-full transition ${
            activeTab === "mutualfunds" ? "bg-yellow-400 text-black" : "bg-gray-700"
          }`}
        >
          Mutual Funds
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-12">
        {activeTab === "stocks" && (
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Stock Portfolio</h2>
            <p className="text-gray-400 mt-2">
              Track your stock performance and analyze market trends.
            </p>
            <p className="text-green-400 mt-3">📈 Stocks up by 1.2%</p>
          </motion.div>
        )}

        {activeTab === "mutualfunds" && (
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Mutual Funds</h2>
            <p className="text-gray-400 mt-2">
              Compare different mutual funds and manage investments.
            </p>
            <p className="text-red-400 mt-3">📉 Mutual Funds down by 0.8%</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StockScreener;
