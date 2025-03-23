import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { question: "What is Digital Gold?", answer: "Digital Gold allows you to buy, sell, and store gold online securely." },
  { question: "Who am I buying the gold from?", answer: "You are buying gold from authorized and regulated digital gold providers." },
  { question: "Where is my gold stored?", answer: "Your gold is securely stored in vaults managed by trusted custodians." },
  { question: "Will I be charged for the storage of my gold?", answer: "Some platforms may charge a small storage fee, while others offer free storage." },
  { question: "How do I know my gold is secure?", answer: "Your gold is insured and audited by independent third-party entities." },
  { question: "How can I modify my SIP amount?", answer: "You can modify your SIP amount through your investment dashboard anytime." },
  { question: "How does the mandate set-up & daily SIP work?", answer: "Daily SIP allows automated investment in gold, following the set mandate." },
  { question: "What happens if SafeGold goes into liquidation?", answer: "Your gold holdings remain safe as they are stored in independent vaults." },
  { question: "How can I sell the gold?", answer: "You can sell gold anytime through the platform and receive money in your account." },
  { question: "Can I take physical delivery of gold?", answer: "Yes, you can request physical gold delivery based on platform terms." },
  { question: "What is the purity of gold?", answer: "Digital gold is usually 99.9% pure and meets industry standards." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-10 px-5 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-semibold text-gray-900">
          Frequently asked <span className="text-blue-600">questions</span>
        </h2>

        {/* Accordion */}
        <div className="mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center py-4 text-gray-800 font-medium focus:outline-none"
              >
                {faq.question}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
