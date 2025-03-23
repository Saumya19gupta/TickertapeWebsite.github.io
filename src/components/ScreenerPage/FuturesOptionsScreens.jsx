import React, { useState } from "react";
import { motion } from "framer-motion";

const screensData = [
  {
    title: "Fut: Long Build Up",
    description:
      "Stocks experiencing long build up in future contracts. It is considered as a bullish indicator",
    filters: "1W change in Fut OI • 1W return +4 more",
    users: "13.2K+ users have been using this",
    icon: "📊",
    isPro: true,
  },
  {
    title: "Cash & Carry Candidates",
    description:
      "Potential stocks where a profitable cash and carry arbitrage trade can be executed",
    filters: "Fair value spread • Cash & carry profit +4 more",
    users: "10K+ users have been using this",
    icon: "💰",
    isPro: true,
  },
  {
    title: "Opt: Long Build Up",
    description:
      "Stocks experiencing long build up in option contracts. It is considered as a bullish indicator",
    filters: "1W change in Call OI • 1W return +4 more",
    users: "10.2K+ users have been using this",
    icon: "📈",
    isPro: true,
  },
];

const FuturesOptionsScreens = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-16">
      <h2 className="text-2xl font-semibold text-gray-900">
        Futures & Options Screens
      </h2>

      {/* Cards Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {screensData.map((screen, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Pro Badge */}
            {screen.isPro && (
              <span className="absolute top-3 right-3 bg-purple-100 text-purple-600 text-xs font-bold px-2 py-1 rounded-full">
                Pro
              </span>
            )}

            {/* Icon */}
            <div className="text-3xl">{screen.icon}</div>

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
              <button className="border p-2 rounded-lg">➝</button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      <motion.button
        className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Load more"}
      </motion.button>
    </div>
  );
};

export default FuturesOptionsScreens;
