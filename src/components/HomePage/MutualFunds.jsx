// import { useState } from "react";
// import { motion } from "framer-motion";

// const categories = [
//   { name: "Large Cap", active: true },
//   { name: "Mid Cap", active: false },
//   { name: "Small Cap", active: false },
//   { name: "Tax Saving", active: false },
//   { name: "Index Funds", active: false },
//   { name: "ETFs", active: false },
// ];

// const funds = [
//   { name: "Motilal Oswal Large Cap Fund", return: "24.79%", logo: "🟡" },
//   { name: "DSP Top 100 Equity Fund", return: "13.72%", logo: "🟢" },
//   { name: "WOC Large Cap Fund", return: "11.34%", logo: "🔵" },
//   { name: "Canara Rob Bluechip Equity Fund", return: "10.21%", logo: "🟠" },
//   { name: "SBI BlueChip Fund", return: "8.79%", logo: "🔴" },
// ];

// export default function MutualFunds() {
//   const [activeCategory, setActiveCategory] = useState("Large Cap");

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Heading Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Mutual Funds and ETFs</h2>
//         <a href="#" className="text-blue-500 hover:underline">
//           1Y Return ↗
//         </a>
//       </div>

//       {/* Categories */}
//       <div className="flex gap-2 flex-wrap mb-4">
//         {categories.map((category, index) => (
//           <motion.button
//             key={index}
//             onClick={() => setActiveCategory(category.name)}
//             className={`px-4 py-2 rounded-full text-sm ${
//               activeCategory === category.name
//                 ? "bg-black text-white"
//                 : "bg-gray-200 text-black"
//             }`}
//             whileTap={{ scale: 0.9 }}
//           >
//             {category.name}
//           </motion.button>
//         ))}
//       </div>

//       {/* Funds List */}
//       <motion.div
//         className="bg-white p-4 rounded-lg shadow-md"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {funds.map((fund, index) => (
//           <motion.div
//             key={index}
//             className="flex justify-between items-center border-b py-3 last:border-none"
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="flex items-center gap-3">
//               <span className="text-xl">{fund.logo}</span>
//               <div>
//                 <h3 className="font-medium">{fund.name}</h3>
//                 <p className="text-sm text-gray-500">Equity • Growth</p>
//               </div>
//             </div>
//             <span className="text-green-500 font-semibold">{fund.return}</span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import logoMotifiles from "/src/logo/Motifiles.png";
import logoDSP from "/src/logo/DSP.png";
import logoWOC from "/src/logo/WOC.png";
import logoCanara from "/src/logo/Canara.png";
import logoSRTR from "/src/logo/SRTR.png";
// import logo from "/src/img/Motifiles"; 
// import logo from "/src/logo/DSP"; 
// import logo from "/src/logo/WOC"; 
// import logo from "/src/logo/Canara"; 
// import logo from "/src/logo/SRTR"; 

// Fund categories with icons
const categories = [
  { name: "Large Cap", active: true },
  { name: "Mid Cap", active: false },
  { name: "Small Cap", active: false },
  { name: "Tax Saving", active: false },
  { name: "Index Funds", active: false },
  { name: "ETFs", active: false },
];

// Fund data
const funds = [
  {
    name: "Motilal Oswal Large Cap Fund",
    return: "24.79%",
    logo: logoMotifiles 

  },
  { name: "DSP Top 100 Equity Fund", return: "13.72%", logo: logoDSP },
  { name: "WOC Large Cap Fund", return: "11.34%", logo: logoWOC },
  {
    name: "Canara Rob Bluechip Equity Fund",
    return: "10.21%",
    logo: logoCanara,
  },
  { name: "SBI BlueChip Fund", return: "8.79%", logo: logoSRTR },
];

export default function MutualFunds() {
  const [activeCategory, setActiveCategory] = useState("Large Cap");

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Heading Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-x4 text-black font-semibold">Mutual Funds and ETFs</h1>
        <a href="#" className="text-blue-500 hover:underline">
          1Y Return ↗
        </a>
      </div>

      {/* Categories */}
      <div className="flex gap-2 flex-wrap mb-4">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === category.name
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Funds List */}
      <motion.div
        className="bg-white p-4 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {funds.map((fund, index) => (
          <motion.div
            key={index}
            className="flex justify-between items-center border-b py-3 last:border-none"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3">
              <img src={fund.logo} alt={fund.name} className="w-10 h-10" />
              <div>
                <h3 className="font-medium">{fund.name}</h3>
                <p className="text-sm text-gray-500">Equity • Growth</p>
              </div>
            </div>
            <span className="text-green-500 font-semibold">{fund.return}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

