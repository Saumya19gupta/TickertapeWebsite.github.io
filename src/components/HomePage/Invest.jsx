import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaCalculator } from "react-icons/fa";
import ici from "/src/img/iciciAdBanner.jpg"

const investments = [
  { icon: <FaChartLine className="text-lg text-yellow-500" />, text: "Connect multiple demat accounts in one go" },
  { icon: <FaUsers className="text-lg text-green-500" />, text: "Compare your Diversification Score with peers' top fund choices" },
  { icon: <FaCalculator className="text-lg text-blue-500" />, text: "Predict your portfolio’s expected returns" },
];

const ads = [
  { src: "https://via.placeholder.com/400x200?text=Investment+Ad+1" },
  { src: "https://via.placeholder.com/400x200?text=Investment+Ad+2" },
  { src: "https://via.placeholder.com/400x200?text=Investment+Ad+3" },
];

export default function Invest() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <motion.div
        // className="p-6 bg-white rounded-lg shadow-lg"
        className="p-4 bg-gray-900 rounded-lg shadow"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Track your stocks and mutual fund investments</h2>
        <ul className="space-y-2 mb-4">
          {investments.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.icon}
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
        <p className="text-gray-500 text-sm">Import in 1-tap! Takes less than a minute!</p>
        <motion.button
          className="mt-4 w-full py-3 bg-black text-white rounded-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      <motion.div
        className="relative w-full max-w-md mx-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          {/* <motion.img
            src={ads[0].src}
            alt="Ad"
            className="w-full object-cover rounded-lg"
            animate={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          /> */}

          <img src = {ici} alt = "Phone UI" className = "w-full drop-shadow-lg" />  

        </div>
      </motion.div>
    </div>
  );
}
