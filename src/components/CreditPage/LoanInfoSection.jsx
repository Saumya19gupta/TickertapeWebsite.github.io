import React from 'react'
import { motion } from "framer-motion";
// import img from './src/components/img/credit.png' ;
{/* <img src="/img/credit.png" alt="Credit" /> */}

// import img from "../../../components/img/credit.png";

import img from "/src/img/credit..png"
// import img from "/src/img/credit.manage.svg"
import creditSvg from "/src/img/credit.manage.svg";




const loanSteps = [
  {
    title: "Eligibility criteria",
    description: "Who’s eligible for a Loan Against Mutual Funds?",
    
  },

    // img: {img}, // Replace with actual image 
  {
    title: "Easy Monthly Installment",
    description: "Monthly installment on LAMF",
    image: "https://via.placeholder.com/150",

  },
  {
    title: "Apply in 4 easy steps",
    description: "Loan application process: step-by-step guide",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Managing a loan",
    description: "How to manage loan repayments, withdrawal, or closure?",
    image: "https://via.placeholder.com/150",
  },
];

const moreInfo = [
  {
    title: "Understanding monthly installments on LAMF in 1 minute",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Is LAMF a better alternative than breaking investments?",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "FAQs: Loans Against Mutual Funds on Tickertape",
    image: "https://via.placeholder.com/150",
  },
];

const LoanInfoSection = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-10 px-6 md:px-16">
      {/* Header */}
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Understand how Loans Against Mutual Funds works
      </motion.h2>

      {/* Loan Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {loanSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {/* <img src={step.image} alt={step.title} className="w-full rounded-lg" /> */}
            {/* <img src={img} alt="Credit Info" style={{ width: "100px", margin: "0 10px" }} /> */}
            <img src = {img} alt = "Phone UI" className = "w-full drop-shadow-lg" />
            <h3 className="text-lg font-semibold mt-3">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Learn More Section */}
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Learn more about loan against mutual funds
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moreInfo.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {/* <img src={item.image} alt={item.title} className="w-full rounded-lg" /> */}
            {/* <img src = {img} alt = "Phone UI" className = "w-full drop-shadow-lg" /> */}
            <img src={creditSvg} alt="Credit SVG" />
            <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoanInfoSection;
