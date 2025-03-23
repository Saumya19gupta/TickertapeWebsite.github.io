import React from "react";

import { motion } from "framer-motion";

// import creditSvg from "/src/img/credit.manage.svg";
// import Goldwebp from "/src/img/Gold.webp";
import img from "/src/img/part.jpeg"
import safegold from "/src/img/safegold.webp"
import vistra from "/src/img/vistra.webp"
import brinks from "/src/img/brinks.webp"

const InvestmentSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-5 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-6 md:mb-0"
        >
          <h2 className="text-gray-500 text-2xl md:text-3xl font-semibold">
            Ready to invest in golden opportunities?
          </h2>
          <p className="text-gray-700 mt-2">
            Have any questions? <a href="#" className="text-blue-500 font-medium hover:underline">Contact us.</a>
          </p>
        </motion.div>

        {/* Middle Image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          {/* <img  
             src="/gold-bars.png" // Replace with the actual image path */}
            
            
            {/* alt="Gold Investment" 
            className="w-28 md:w-36" /> */}

            {/* <img src={Goldwebp} alt="Gold Investment" /> */}


            {/* <img  
             src="/Gold.webp"  alt="Gold Investment"  className="w-28 md:w-36" />  */}

            <img src = {img} alt = "Phone UI" className = "w-full drop-shadow-lg" />               

            {/* <img src={Goldwebp} alt="Gold Investment" /> */}
            
        

        {/* <img src={Goldwebp} alt="Gold Investment" /> */}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center"
        >
          <div>
            <p className="text-gray-600 text-sm">In partnership with</p>
            {/* <img src="/safegold.png" alt="SafeGold" className="w-24 mt-1" /> */}

            <img src = {safegold} alt = "Phone UI" className = "w-full drop-shadow-lg" />      
          </div>
          <div>
            <p className="text-gray-600 text-sm">Trustee partner</p>
            {/* <img src="/vistra.png" alt="Vistra" className="w-20 mt-1" /> */}
            <img src = {vistra} alt = "Phone UI" className = "w-full drop-shadow-lg" />   
          </div>
          <div>
            <p className="text-gray-600 text-sm">Insured and secured by</p>
            {/* <img src="/brinks.png" alt="Brinks" className="w-20 mt-1" /> */}
            <img src = {brinks} alt = "Phone UI" className = "w-full drop-shadow-lg" />   
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;
