// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaArrowUp } from "react-icons/fa";

// const stocks = [
//   { name: "Bajaj Holdings and Investment Ltd", symbol: "BAJAJHLDNG", price: "₹12,454.30", change: "6.16%" },
//   { name: "Godrej Consumer Products Ltd", symbol: "GODREJCP", price: "₹1,074.60", change: "4.89%" },
//   { name: "Bajaj Housing Finance Ltd", symbol: "BAJAJHFL", price: "₹113.86", change: "4.43%" },
//   { name: "ABB India Ltd", symbol: "ABB", price: "₹5,344.65", change: "4.31%" },
//   { name: "Shriram Finance Ltd", symbol: "SHRIRAMFIN", price: "₹580.85", change: "4.13%" },
// ];

// export default function StockMarket() {
//   const [activeTab, setActiveTab] = useState("gainers");

//   return (
//     <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
//       <div className="w-full md:w-2/3 p-4 bg-white rounded-lg shadow">
//         <div className="flex space-x-4 mb-4">
//           <button
//             className={`px-4 py-2 rounded ${activeTab === "gainers" ? "bg-green-500 text-white" : "bg-gray-200"}`}
//             onClick={() => setActiveTab("gainers")}
//           >
//             Gainers
//           </button>
//           <button className="px-4 py-2 bg-gray-200 rounded">Losers</button>
//           <button className="px-4 py-2 bg-gray-200 rounded">Most Active</button>
//         </div>
//         <div>
//           {stocks.map((stock, index) => (
//             <motion.div
//               key={index}
//               className="flex justify-between items-center p-4 border-b"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <div>
//                 <p className="font-semibold">{stock.name}</p>
//                 <p className="text-sm text-gray-500">{stock.symbol}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">{stock.price}</p>
//                 <p className="text-green-500 flex items-center"> <FaArrowUp className="mr-1" /> {stock.change}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow">
//         <h2 className="text-lg font-semibold mb-4">Today's News and Events</h2>
//         <div className="space-y-3">
//           <div className="p-3 border-b">
//             <p className="font-semibold">Bank credit up 11.25% on year</p>
//             <p className="text-sm text-gray-500">1 hour ago - Capital Market - Live</p>
//           </div>
//           <div className="p-3 border-b">
//             <p className="font-semibold">Capital Reduction</p>
//             <p className="text-sm text-gray-500">Ex Date: Feb 21, 2025</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaArrowUp } from "react-icons/fa";

// const stocks = [
//   { name: "Bajaj Holdings and Investment Ltd", symbol: "BAJAJHLDNG", price: "₹12,454.30", change: "6.16%" },
//   { name: "Godrej Consumer Products Ltd", symbol: "GODREJCP", price: "₹1,074.60", change: "4.89%" },
//   { name: "Bajaj Housing Finance Ltd", symbol: "BAJAJHFL", price: "₹113.86", change: "4.43%" },
//   { name: "ABB India Ltd", symbol: "ABB", price: "₹5,344.65", change: "4.31%" },
//   { name: "Shriram Finance Ltd", symbol: "SHRIRAMFIN", price: "₹580.85", change: "4.13%" },
// ];

// const news = [
//   { title: "Bank credit up 11.25% on year", content: "According to the latest data from the Reserve Bank Of India (RBI), scheduled commercial bank's total credit increased by 11.25% year-on-year.", time: "1 hour ago", source: "Capital Market - Live" },
//   { title: "Capital Reduction", content: "MBECL has announced a capital reduction, effective from February 21, 2025.", time: "2 hours ago", source: "Market Watch" },
//   { title: "Stock Market Updates", content: "The stock market saw significant gains today, with several large-cap stocks hitting new highs.", time: "3 hours ago", source: "Financial Express" },
//   { title: "Tech Sector Surges", content: "Tech companies witnessed a 5% rise in stock prices due to increased investor interest.", time: "4 hours ago", source: "Economic Times" }
// ];

// export default function StockMarket() {
//   const [activeTab, setActiveTab] = useState("gainers");
//   const buttons = ["Gainers", "Losers", "Most Active"];
//   const shuffledButtons = buttons.sort(() => Math.random() - 0.5);

//   return (
//     <div className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
//       <div className="w-full md:w-2/3 p-4 bg-white rounded-lg shadow">
//         <div className="flex space-x-4 mb-4">
//           {shuffledButtons.map((btn, index) => (
//             <motion.button
//               key={index}
//               className={`px-4 py-2 rounded ${activeTab.toLowerCase() === btn.toLowerCase() ? "bg-green-500 text-white" : "bg-gray-200"}`}
//               onClick={() => setActiveTab(btn.toLowerCase())}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               {btn}
//             </motion.button>
//           ))}
//         </div>
//         <div>
//           {stocks.map((stock, index) => (
//             <motion.div
//               key={index}
//               className="flex justify-between items-center p-4 border-b"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <div>
//                 <p className="font-semibold">{stock.name}</p>
//                 <p className="text-sm text-gray-500">{stock.symbol}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">{stock.price}</p>
//                 <p className="text-green-500 flex items-center"> <FaArrowUp className="mr-1" /> {stock.change}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow">
//         <h2 className="text-lg font-semibold mb-4">Today's News and Events</h2>
//         <div className="space-y-3">
//           {news.map((item, index) => (
//             <motion.div
//               key={index}
//               className="p-3 border-b"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: index * 0.1 }}
//             >
//               <p className="font-semibold">{item.title}</p>
//               <p className="text-sm text-gray-500">{item.content}</p>
//               <p className="text-xs text-gray-400">{item.time} - {item.source}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const stocksData = [
  { name: "Bajaj Holdings and Investment Ltd", symbol: "BAJAJHLDNG", price: "₹12,454.30", change: "6.16%" },
  { name: "Godrej Consumer Products Ltd", symbol: "GODREJCP", price: "₹1,074.60", change: "4.89%" },
  { name: "Bajaj Housing Finance Ltd", symbol: "BAJAJHFL", price: "₹113.86", change: "4.43%" },
  { name: "ABB India Ltd", symbol: "ABB", price: "₹5,344.65", change: "4.31%" },
  { name: "Shriram Finance Ltd", symbol: "SHRIRAMFIN", price: "₹580.85", change: "4.13%" },
];

const newsData = [
  { title: "Bank credit up 11.25% on year", content: "According to the latest data from the Reserve Bank Of India (RBI), scheduled commercial bank's total credit increased by 11.25% year-on-year.", time: "1 hour ago", source: "Capital Market - Live" },
  { title: "Capital Reduction", content: "MBECL has announced a capital reduction, effective from February 21, 2025.", time: "2 hours ago", source: "Market Watch" },
  { title: "Stock Market Updates", content: "The stock market saw significant gains today, with several large-cap stocks hitting new highs.", time: "3 hours ago", source: "Financial Express" },
  { title: "Tech Sector Surges", content: "Tech companies witnessed a 5% rise in stock prices due to increased investor interest.", time: "4 hours ago", source: "Economic Times" }
];

export default function Stock() {
  const [stocks, setStocks] = useState(stocksData);
  const [news, setNews] = useState(newsData);
  const [activeTab, setActiveTab] = useState("gainers");
  const buttons = ["Gainers", "Losers", "Most Active"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks([...stocksData.sort(() => Math.random() - 0.5)]);
      setNews([...newsData.sort(() => Math.random() - 0.5)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container  mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-gray-900 rounded-lg shadow">
        <div className="flex justify-center space-x-4 mb-4">
          {buttons.map((btn, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded ${activeTab.toLowerCase() === btn.toLowerCase() ? "bg-green-500 text-black" : "bg-gray-200"}`}
              onClick={() => setActiveTab(btn.toLowerCase())}
              whileHover={{ scale: 1.1 }}
            >
              {btn}
            </motion.button>
          ))}
        </div>
        <div>
          {stocks.map((stock, index) => (
            <motion.div
              key={index}
              className="flex justify-between items-center p-4 border-b"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div>
                <p className="font-semibold">{stock.name}</p>
                <p className="text-sm text-gray-500">{stock.symbol}</p>
              </div>
              <div>
                <p className="font-semibold">{stock.price}</p>
                <p className="text-green-500 flex items-center"> <FaArrowUp className="mr-1" /> {stock.change}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="p-4 bg-white rounded-lg shadow"> */}
       <div className="p-4 bg-gray-900 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Today's News and Events</h2>
        <div>
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="p-3 border-b"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.content}</p>
              <p className="text-xs text-gray-400">{item.time} - {item.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
