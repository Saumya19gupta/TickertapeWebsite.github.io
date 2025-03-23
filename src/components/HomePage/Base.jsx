// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaUser, FaBars, FaTimes, FaWallet, FaChartBar, FaStar, FaEllipsisH } from "react-icons/fa";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);

//   return (
//     <nav className="bg-black text-white py-3 px-4 w-full">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left Section: Logo */}
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl font-bold">📊 TickerTape</h1>
//         </div>

//         {/* Center Section: Search Bar */}
//         <motion.div
//           className="hidden md:flex items-center bg-gray-800 px-4 py-2 rounded-full w-1/2"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//         >
//           <FaSearch className="text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search stocks, MFs, smallcase & more..."
//             className="ml-3 bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
//           />
//         </motion.div>

//         {/* Right Section: Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           <NavItem icon={<FaWallet />} text="Portfolio" />
//           <NavItem icon={<FaStar />} text="Gold" />
//           <NavItem icon={<FaChartBar />} text="Screener" />
          
//           {/* More Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="flex items-center space-x-1 focus:outline-none"
//             >
//               <FaEllipsisH />
//               <span>More</span>
//             </button>
//             {dropdownOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute right-0 mt-2 w-40 bg-gray-900 p-3 rounded-lg shadow-lg"
//               >
//                 <p className="py-2 hover:text-yellow-400 cursor-pointer">Market Analysis</p>
//                 <p className="py-2 hover:text-yellow-400 cursor-pointer">News</p>
//               </motion.div>
//             )}
//           </div>

//           {/* Login Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setLoginOpen(!loginOpen)}
//               className="bg-white text-black px-4 py-2 rounded-full flex items-center space-x-1 focus:outline-none"
//             >
//               <FaUser />
//               <span>Sign Up / Login</span>
//             </button>
//             {loginOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="absolute right-0 mt-2 w-40 bg-gray-900 p-3 rounded-lg shadow-lg"
//               >
//                 <p className="py-2 hover:text-yellow-400 cursor-pointer">Sign Up</p>
//                 <p className="py-2 hover:text-yellow-400 cursor-pointer">Login</p>
//               </motion.div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-xl focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           className="md:hidden bg-gray-900 p-4 mt-2 rounded-lg"
//         >
//           <NavItem icon={<FaWallet />} text="Portfolio" />
//           <NavItem icon={<FaStar />} text="Gold" />
//           <NavItem icon={<FaChartBar />} text="Screener" />

//           {/* More Button */}
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="flex items-center space-x-1 w-full text-left mt-2"
//           >
//             <FaEllipsisH />
//             <span>More</span>
//           </button>
//           {dropdownOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="mt-2 p-2 bg-gray-800 rounded-lg"
//             >
//               <p className="py-1 hover:text-yellow-400 cursor-pointer">Market Analysis</p>
//               <p className="py-1 hover:text-yellow-400 cursor-pointer">News</p>
//             </motion.div>
//           )}

//           {/* Login Button */}
//           <button
//             onClick={() => setLoginOpen(!loginOpen)}
//             className="bg-white text-black px-4 py-2 rounded-full w-full mt-2 flex justify-center items-center space-x-2"
//           >
//             <FaUser />
//             <span>Sign Up / Login</span>
//           </button>
//           {loginOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="mt-2 p-2 bg-gray-800 rounded-lg"
//             >
//               <p className="py-1 hover:text-yellow-400 cursor-pointer">Sign Up</p>
//               <p className="py-1 hover:text-yellow-400 cursor-pointer">Login</p>
//             </motion.div>
//           )}
//         </motion.div>
//       )}
//     </nav>
//   );
// }

// const NavItem = ({ icon, text }) => (
//   <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-2 cursor-pointer">
//     {icon}
//     <span>{text}</span>
//   </motion.div>
// );


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

// export default function HomePage() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="py-3 px-4 w-full border-b border-gray-700">
//         <div className="container mx-auto flex items-center justify-between">
//           {/* Left: Stock Market Ticker */}
//           <div className="flex items-center space-x-4">
//             <motion.div
//               className="bg-red-500 px-3 py-1 rounded-md text-sm"
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               NIFTY 50 ▼ 0.09%
//             </motion.div>
//             <motion.div
//               className="bg-red-600 px-3 py-1 rounded-md text-sm"
//               initial={{ opacity: 0, x: -10 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               SENSEX ▼ 0.27%
//             </motion.div>
//           </div>

//           {/* Center: Market Status */}
//           <motion.div
//             className="text-xl font-bold flex items-center space-x-2"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <span>The market is in</span>
//             <span className="text-yellow-400">Fear zone</span>
//           </motion.div>

//           {/* Right: Search Bar */}
//           <motion.div
//             className="hidden md:flex items-center bg-gray-800 px-4 py-2 rounded-full w-1/3"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//           >
//             <FaSearch className="text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search stocks, MFs..."
//               className="ml-3 bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
//             />
//           </motion.div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-xl focus:outline-none"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Search Bar & Menu */}
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="md:hidden bg-gray-800 p-4 mt-2 rounded-lg"
//           >
//             <div className="flex items-center bg-gray-700 px-4 py-2 rounded-full">
//               <FaSearch className="text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search stocks..."
//                 className="ml-3 bg-transparent outline-none w-full text-sm text-white placeholder-gray-400"
//               />
//             </div>
//           </motion.div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="py-10 px-6 md:px-20">
//         <div className="container mx-auto">
//           {/* Market Sentiment Text */}
//           <motion.h1
//             className="text-3xl md:text-5xl font-bold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             The market is in <span className="text-yellow-400">Fear zone</span>
//           </motion.h1>

//           {/* Market Timeline */}
//           <motion.div
//             className="mt-6 flex space-x-6 md:space-x-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             {["FRI", "MON", "TUE", "WED", "TODAY"].map((day, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col items-center p-2 rounded-full ${
//                   day === "TODAY"
//                     ? "bg-gray-800 p-3 rounded-full shadow-lg"
//                     : ""
//                 }`}
//               >
//                 <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 font-bold">
//                   {day[0]}
//                 </div>
//                 <span className="text-sm mt-2">{day}</span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Base() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 rounded-b-2xl">
      {/* Hero Section (Smaller Height) */}
      <section className="py-6 px-6 md:px-20 min-h-[40vh] flex flex-col justify-center">
        <div className="container mx-auto">
          {/* Market Sentiment Text */}
          <motion.h1
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The market is in <span className="text-yellow-400">Fear zone</span>
          </motion.h1>

          {/* Market Timeline with Animation */}
          <motion.div
            className="mt-4 flex space-x-4 md:space-x-8 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {["FRI", "MON", "TUE", "WED", "TODAY"].map((day, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center p-2 rounded-full ${
                  day === "TODAY"
                    ? "bg-gray-800 p-3 rounded-full shadow-lg"
                    : ""
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }} // Animation Delay
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 font-bold">
                  {day[0]}
                </div>
                <span className="text-sm mt-2">{day}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
