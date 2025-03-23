import React from "react";
import { motion } from "framer-motion";

const popularScreens = [
  {
    title: "Long Term Gems (Coffee ...)",
    description:
      "Investment strategy that involves selecting high-quality stocks and holding them for a long time.",
    filters: "5Y revenue growth • ROCE +6 more",
    users: "61K+ users have been using this",
    icon: "⭐",
  },
  {
    title: "Near 52W Lows",
    description:
      "Fundamentally strong stocks near their 52W low.",
    filters: "% away from 52 low • 5Y revenue growth +5 more",
    users: "115K+ users have been using this",
    icon: "🌿",
  },
  {
    title: "Momentum Monsters",
    description: "Companies experiencing strong price momentum",
    filters: "14D exponential RSI • ADX rating +6 more",
    users: "81K+ users have been using this",
    icon: "⚙️",
    isPro: true,
  },
];

const PopularScreens = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 md:px-16">
      <h2 className="text-2xl font-semibold text-gray-900">Popular Screens</h2>

      {/* Cards Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularScreens.map((screen, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Icon */}
            <div className="text-3xl">{screen.icon}</div>

            {/* Pro Badge */}
            {screen.isPro && (
              <span className="absolute top-3 right-3 bg-purple-200 text-purple-700 text-xs px-2 py-1 rounded-full">
                Pro
              </span>
            )}

            {/* Title & Details */}
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {screen.title}
            </h3>
            <p className="bg-gray-100 text-gray-600 text-xs px-2 py-1 inline-block mt-2 rounded">
              {screen.filters}
            </p>
            <p className="text-gray-500 text-sm mt-2">{screen.description}</p>

            {/* Users & Arrow */}
            <div className="mt-4 flex justify-between items-center text-gray-400 text-sm">
              <p>👥 {screen.users}</p>
              <button className="border p-2 rounded-lg">
                ➝
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularScreens;
