import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "What is Loan Against Mutual Funds?", answer: "A loan against mutual funds allows you to borrow money by pledging your mutual fund holdings as collateral." },
  { question: "What is the credit limit and how is it calculated?", answer: "The credit limit depends on the type of mutual funds you hold and their market value." },
  { question: "Which mutual funds are accepted for availing a loan against mutual funds?", answer: "Generally, equity and debt mutual funds from recognized AMCs are accepted." },
  { question: "What is the tenure of the loan against mutual funds?", answer: "The tenure can range from a few months to multiple years, depending on the lender." },
  { question: "What is the process for availing a loan against mutual funds?", answer: "You need to pledge your mutual funds online or offline, and upon approval, the loan amount is disbursed." },
  { question: "What will my monthly payments look like?", answer: "Your monthly payments depend on the interest rate, loan tenure, and the principal amount borrowed." },
  { question: "How much loan can I get?", answer: "The loan amount depends on the percentage of your mutual fund's market value, typically up to 50-70%." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-900 py-12 px-6 md:px-16">
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Frequently asked <span className="text-blue-500">questions</span>
      </motion.h2>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <motion.div
                className="px-5 pb-4 text-gray-700"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Contact & Disclaimer */}
      <div className="text-center mt-10">
        <p className="text-gray-600">
          Have any question? <a href="#" className="text-blue-500 underline">Contact us</a>
        </p>
        <p className="text-gray-500 text-sm mt-3">
          Credit services are facilitated by the non-advisory department of Essential Investment Managers Pvt. Ltd. By using this page, you agree to the <a href="#" className="text-blue-500 underline">Terms & Conditions</a>.
        </p>
      </div>
    </div>
  );
};

export default FAQSection;
