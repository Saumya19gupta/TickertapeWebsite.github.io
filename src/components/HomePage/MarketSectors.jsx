import React from "react";
import { motion } from "framer-motion";

const marketData = [
  { name: "NIFTY 50", value: "22,906.75", change: "-0.11%", trend: "down" },
  { name: "USD/INR", value: "86.66", change: "-0.38%", trend: "down" },
  { name: "Gold", value: "8,857.66", change: "+0.16%", trend: "up" },
  { name: "NIFTY 100 Largecap", value: "23,406.30", change: "+0.16%", trend: "up" },
  { name: "NIFTY 100 Midcap", value: "51,175.15", change: "+1.28%", trend: "up" },
  { name: "NIFTY 100 Smallcap", value: "15,731.90", change: "+1.33%", trend: "up" },
  { name: "NIFTY Bank", value: "49,292.55", change: "-0.56%", trend: "down" },
  { name: "NIFTY IT", value: "40,902.90", change: "-0.05%", trend: "down" },
  { name: "NIFTY Pharma", value: "20,789.70", change: "-0.15%", trend: "down" },
];

const MarketSectors = () => {
  return (
    // <div className="w-full max-w-6xl mx-auto px-4 py-6 bg-white ">
      <div className="w-full max-w-6xl mx-auto px-8 py-12 bg-white">
        
      <div className="flex justify-between items-center mb-6">


        {/* <h1 className="text-3xl font-semibold text-gray-800">Market and Sectors</h1> */}
        <h1 className="text-3xl font-semibold text-gray-800">Market and Sectors</h1>
        <a href="/market-sectors" className="text-blue-600 text-sm font-medium hover:underline">
          See All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {marketData.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 border border-gray-200 rounded-lg flex justify-between items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div>
              <p className="text-gray-600 text-sm">{item.name}</p>
              <p className="text-lg font-bold">{item.value}</p>
            </div>
            <p
              className={`text-sm font-medium ${
                item.trend === "up" ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.change}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketSectors;
