// import { motion } from "framer-motion";
// import { Banknote, CircleCheck, TrendingUp, Wallet, LogIn } from "lucide-react";

// const steps = [
//   { text: "Log in to Tickertape using your phone number", icon: <LogIn className="text-blue-500 w-6 h-6" /> },
//   { text: "Enter the amount or weight of gold you want to buy", icon: <Banknote className="text-indigo-500 w-6 h-6" /> },
//   { text: "Choose between a SIP or a one-time investment", icon: <TrendingUp className="text-yellow-500 w-6 h-6" /> },
//   { text: "Start tracking your gold investments in portfolio", icon: <Wallet className="text-red-500 w-6 h-6" /> },
//   { text: "Withdraw anytime, hassle-free!", icon: <CircleCheck className="text-green-500 w-6 h-6" /> },
// ];

// const DigitalGoldInvestment = () => {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-gray-100">
//       {/* Heading */}
//       <motion.h2 
//         className="text-2xl font-bold text-center mb-6 text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Investing in Digital Gold Made Easy
//       </motion.h2>

//       <motion.div 
//         className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg grid md:grid-cols-2 gap-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Left Side: Investment UI */}
//         <motion.div 
//           className="relative bg-gray-50 p-4 rounded-lg shadow-md"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="bg-gray-900 text-white p-3 rounded-md text-center">Buy Digital Gold</div>
//           <div className="flex justify-between items-center p-3 bg-white shadow-sm rounded-md mt-3">
//             <input type="text" placeholder="Buy in Rupees" className="w-1/2 p-2 border rounded-md" />
//             <span className="text-gray-600">⇄</span>
//             <input type="text" placeholder="Buy in gm" className="w-1/2 p-2 border rounded-md" />
//           </div>

//           <div className="mt-4 flex gap-2 items-center">
//             <span className="p-2 bg-green-500 text-white text-sm rounded-md">POPULAR</span>
//             <div className="flex gap-2">
//               {["Daily", "Weekly", "Monthly", "One time"].map((plan, i) => (
//                 <span key={i} className={`p-2 rounded-md ${i === 0 ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-700"}`}>{plan}</span>
//               ))}
//             </div>
//           </div>

//           <div className="mt-4 flex items-center gap-2">
//             <span className="text-red-500">🔴 Live</span>
//             <span className="text-gray-800 font-semibold">₹ 6121.7/gm</span>
//           </div>
//         </motion.div>

//         {/* Right Side: Steps */}
//         <div className="space-y-4">
//           {steps.map((step, index) => (
//             <motion.div 
//               key={index} 
//               className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {step.icon}
//               <span className="text-gray-700">{step.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default DigitalGoldInvestment;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Banknote, CircleCheck, TrendingUp, Wallet, LogIn } from "lucide-react";

// const steps = [
//   { text: "Log in to Tickertape using your phone number", icon: <LogIn className="text-blue-500 w-6 h-6" /> },
//   { text: "Enter the amount or weight of gold you want to buy", icon: <Banknote className="text-indigo-500 w-6 h-6" /> },
//   { text: "Choose between a SIP or a one-time investment", icon: <TrendingUp className="text-yellow-500 w-6 h-6" /> },
//   { text: "Start tracking your gold investments in portfolio", icon: <Wallet className="text-red-500 w-6 h-6" /> },
//   { text: "Withdraw anytime, hassle-free!", icon: <CircleCheck className="text-green-500 w-6 h-6" /> },
// ];

// const DigitalGoldInvestment = () => {
//   const [message, setMessage] = useState("");

//   const handleInvestment = (plan) => {
//     setMessage(`You have selected the "${plan}" investment plan!`);
//     setTimeout(() => setMessage(""), 3000);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
//       {/* Heading */}
//       <motion.h2
//         className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Investing in Digital Gold Made Easy
//       </motion.h2>

//       {/* Investment Section */}
//       <motion.div
//         className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg grid md:grid-cols-2 gap-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Left Side: Investment UI */}
//         <motion.div
//           className="relative bg-gray-50 p-4 rounded-lg shadow-md"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="bg-gray-900 text-white p-3 rounded-md text-center">
//             Buy Digital Gold
//           </div>

//           <div className="flex justify-between items-center p-3 bg-white shadow-sm rounded-md mt-3">
//             <input
//               type="text"
//               placeholder="Buy in Rupees"
//               className="w-1/2 p-2 border rounded-md"
//             />
//             <span className="text-gray-600">⇄</span>
//             <input
//               type="text"
//               placeholder="Buy in gm"
//               className="w-1/2 p-2 border rounded-md"
//             />
//           </div>

//           {/* Investment Plans */}
//           <div className="mt-4 flex flex-wrap gap-2 items-center">
//             <span className="p-2 bg-green-500 text-white text-sm rounded-md">
//               POPULAR
//             </span>
//             <div className="flex gap-2">
//               {["Daily", "Weekly", "Monthly", "One Time"].map((plan, i) => (
//                 <motion.button
//                   key={i}
//                   onClick={() => handleInvestment(plan)}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`p-2 rounded-md transition-all ${
//                     i === 0
//                       ? "bg-gray-900 text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                 >
//                   {plan}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Live Gold Price */}
//           <div className="mt-4 flex items-center gap-2">
//             <span className="text-red-500">🔴 Live</span>
//             <span className="text-gray-800 font-semibold">₹ 6121.7/gm</span>
//           </div>

//           {/* Message Display */}
//           {message && (
//             <motion.div
//               className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {message}
//             </motion.div>
//           )}
//         </motion.div>

//         {/* Right Side: Steps */}
//         <div className="space-y-4">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {step.icon}
//               <span className="text-gray-700">{step.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default DigitalGoldInvestment;

import { useState } from "react";
import { motion } from "framer-motion";
import { Banknote, CircleCheck, TrendingUp, Wallet, LogIn } from "lucide-react";

const GOLD_PRICE_PER_GRAM = 6121.7; // Live price

const DigitalGoldInvestment = () => {
  const [amount, setAmount] = useState("");
  const [grams, setGrams] = useState("");

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setGrams(value ? (value / GOLD_PRICE_PER_GRAM).toFixed(4) : "");
  };

  const handleGramsChange = (e) => {
    const value = e.target.value;
    setGrams(value);
    setAmount(value ? (value * GOLD_PRICE_PER_GRAM).toFixed(2) : "");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Investing in Digital Gold Made Easy
      </motion.h2>

      {/* Investment Section */}
      <motion.div
        className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Side: Calculator */}
        <motion.div
          className="relative bg-gray-50 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-900 text-white p-3 rounded-md text-center">
            Buy Digital Gold
          </div>

          {/* Calculator Fields */}
          {/* <div className="flex justify-between items-center p-3 bg-white shadow-sm rounded-md mt-3"> */}
          <div className="flex justify-between items-center p-3 bg-gray-900 shadow-sm rounded-md mt-3">

            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Buy in Rupees"
              className="w-1/2 p-2 border rounded-md"
            />
            {/* <span className="text-gray-600">⇄</span> */}
            <span className="text-white">⇄</span>
            <input
              type="number"
              value={grams}
              onChange={handleGramsChange}
              placeholder="Buy in gm"
              className="w-1/2 p-2 border rounded-md"
            />
          </div>

          {/* Live Gold Price */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-red-500">🔴 Live</span>
            <span className="text-gray-800 font-semibold">₹ {GOLD_PRICE_PER_GRAM}/gm</span>
          </div>
        </motion.div>

        {/* Right Side: Steps */}
        <div className="space-y-4">
          {[
            { text: "Log in to Tickertape using your phone number", icon: <LogIn className="text-blue-500 w-6 h-6" /> },
            { text: "Enter the amount or weight of gold you want to buy", icon: <Banknote className="text-indigo-500 w-6 h-6" /> },
            { text: "Choose between a SIP or a one-time investment", icon: <TrendingUp className="text-yellow-500 w-6 h-6" /> },
            { text: "Start tracking your gold investments in portfolio", icon: <Wallet className="text-red-500 w-6 h-6" /> },
            { text: "Withdraw anytime, hassle-free!", icon: <CircleCheck className="text-green-500 w-6 h-6" /> },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {step.icon}
              <span className="text-gray-700">{step.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DigitalGoldInvestment;


