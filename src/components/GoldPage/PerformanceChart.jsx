import { useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { date: "Feb '20", value: 2000 },
  { date: "Jan '21", value: 3200 },
  { date: "Jan '22", value: 4100 },
  { date: "Jan '23", value: 5600 },
  { date: "Jan '24", value: 7200 },
  { date: "Feb '25", value: 8800 }
];

export default function PerformanceChart() {
  const [investment, setInvestment] = useState(1000);
  const [years, setYears] = useState(4);
  const [frequency, setFrequency] = useState("Monthly");

  const projectedValue = (investment * 12 * years * 1.37).toFixed(0);

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Performance Heading */}
        <h2 className="text-3xl font-bold text-gray-800">Performance</h2>

        {/* Live Buy Price & Returns */}
        <div className="flex flex-wrap gap-6 mt-4 text-gray-600 text-sm">
          <p>🔴 Live buy price: <span className="font-semibold">₹8,868.67/gm</span></p>
          <p>📈 Absolute returns: <span className="text-green-500 font-semibold">+99.45%</span></p>
          <p>📊 CAGR: <span className="text-green-500 font-semibold">+14.81%</span></p>
        </div>

        {/* Chart Section */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="date" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Investment Calculator */}
        <motion.div
          // className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-md mx-auto"
          className="bg-gray-900 shadow-lg rounded-lg p-6 mt-6 max-w-md mx-auto"  
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4">Calculate & Decide</h2>

          {/* Investment Amount */}
          <label className="block text-white text-sm mb-2">Investment amount (₹)</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="w-full p-2 border rounded-md mb-4"
          />

          {/* Frequency Selection */}
          <div className="flex gap-2 mb-4">
            {["Daily", "Monthly", "One-time"].map((freq) => (
              <button
                key={freq}
                onClick={() => setFrequency(freq)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                  frequency === freq ? "bg-blue-500 text-black" : "bg-gray-200"
                }`}
              >
                {freq}
              </button>
            ))}
          </div>

          {/* Investment Period */}
          <label className="block text-white text-sm mb-2">Investment period (years)</label>
          <div className="flex items-center">
            <button
              onClick={() => setYears((prev) => Math.max(1, prev - 1))}
              // className="px-3 py-1 bg-gray-200 rounded-l-md"
              className="px-3 py-1 bg-gray-600 rounded-l-md"
            >
              -
            </button>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full text-center p-2 border"
            />
            <button
              onClick={() => setYears((prev) => prev + 1)}
              className="px-3 py-1 bg-gray-200 rounded-r-md"
            >
              +
            </button>
          </div>

          {/* Projected Value */}
          <motion.div
            // className="mt-4 p-4 bg-gray-100 rounded-lg text-center"
            className="mt-4 p-4 bg-gray-100 rounded-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-600 text-sm">
              If you had invested ₹{investment} <span className="font-semibold">{frequency}</span> for {years} years,
              your investments would be worth
            </p>
            <p className="text-xl font-bold text-green-600 mt-2">₹{projectedValue}</p>
          </motion.div>

          {/* Invest Now Button */}
          <motion.button
            className="mt-4 w-full bg-gray-600 text-white py-3 rounded-md font-semibold shadow-lg hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Invest Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
