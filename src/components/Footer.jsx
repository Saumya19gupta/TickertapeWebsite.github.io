import React from "react";
import Logopage from "/src/img/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-3xl py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          {/* <img src="/BJAJ.png" alt="Tickertape Logo" className="w-32" /> */}
          {/* <img src="/logopage.svg" alt="Tickertape Logo" className="w-32" /> */}
          <img src = {Logopage} alt = "tickertape Logo" className = "w-32" />
          <p className="text-sm text-gray-400 mt-2">from <span className="text-white font-bold">smallcase</span></p>
          <p className="text-sm text-gray-400 mt-4">
            Tickertape provides data, information & content for Indian stocks, mutual funds, ETFs & indices.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Anchorage Technologies Private Limited,<br />
            #51, 3rd Floor, Le Parc Richmonde,<br />
            Richmond Road, Shanthala Nagar,<br />
            Richmond Town, Bangalore - 560025
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-4">
          {[
            { title: "Assets", links: [
                { name: "Stocks", href: "/stocks" },
                { name: "Mutual Funds", href: "/mutualfunds/equity" }
              ]
            },
            { title: "Tools", links: [
                { name: "MMI", href: "/market-mood-index" },
                { name: "Stock Screener", href: "/screener/equity" },
                { name: "MF Screener", href: "/screener/mutual-fund" },
                { name: "Market Movers", href: "/market-movers" }
              ]
            },
            { title: "Learn & Share", links: [
                { name: "Social", href: "/social" },
                { name: "Learn", href: "https://www.tickertape.in/knowledge-base/" },
                { name: "Blog", href: "https://www.tickertape.in/blog/" }
              ]
            },
            { title: "Fine Print", links: [
                { name: "Pricing", href: "/pricing" },
                { name: "Disclosures", href: "/meta/disclosures" },
                { name: "Terms & Conditions", href: "/meta/terms" },
                { name: "Privacy Policy", href: "/meta/privacy" }
              ]
            }
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-3">{section.title}</h3>
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Social & Support */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
          {[
            { name: "YouTube", href: "https://www.youtube.com/channel/UCbnsKJ2aIL0BG6tar_f9Dlw" },
            { name: "Instagram", href: "https://www.instagram.com/tickertapein/" },
            { name: "Twitter", href: "https://x.com/tickertapeIN" },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/tickertapein/" }
          ].map((social, index) => (
            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              {social.name}
            </a>
          ))}
        </div>
        <div className="mt-4 md:mt-0">
          <a href="https://help.tickertape.in/support/home" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Help and Support</a>
          <a href="mailto:support@tickertape.in" className="text-gray-400 hover:text-white ml-4">support@tickertape.in</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { motion } from "framer-motion";
// import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <motion.footer
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 text-white py-10"
//     >
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Company Info */}
//         <div>
//           <h2 className="text-xl font-semibold">tickertape</h2>
//           <p className="text-gray-400 text-sm mt-2">
//             Tickertape provides data, information & content for Indian stocks, mutual funds, ETFs & indices.
//           </p>
//           <p className="text-gray-500 text-sm mt-3">
//             Anchorage Technologies Private Limited, <br />
//             #51, 3rd Floor, Le Parc Richmonde, <br />
//             Richmond Road, Bangalore - 560025
//           </p>
//         </div>

//         {/* Assets */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Assets</h3>
//           <ul className="space-y-1">
//             <li className="hover:text-gray-400 cursor-pointer">Stocks</li>
//             <li className="hover:text-gray-400 cursor-pointer">Mutual Funds</li>
//           </ul>
//         </div>

//         {/* Tools */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Tools</h3>
//           <ul className="space-y-1">
//             <li className="hover:text-gray-400 cursor-pointer">MMI</li>
//             <li className="hover:text-gray-400 cursor-pointer">Stock Screener</li>
//             <li className="hover:text-gray-400 cursor-pointer">MF Screener</li>
//             <li className="hover:text-gray-400 cursor-pointer">Market Movers</li>
//           </ul>
//         </div>

//         {/* Learn & Fine Print */}
//         <div className="flex flex-col gap-6">
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Learn & Share</h3>
//             <ul className="space-y-1">
//               <li className="hover:text-gray-400 cursor-pointer">Social</li>
//               <li className="hover:text-gray-400 cursor-pointer">Learn</li>
//               <li className="hover:text-gray-400 cursor-pointer">Blog</li>
//               <li className="hover:text-gray-400 cursor-pointer">Glossary</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Fine Print</h3>
//             <ul className="space-y-1">
//               <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
//               <li className="hover:text-gray-400 cursor-pointer">Disclosures</li>
//               <li className="hover:text-gray-400 cursor-pointer">Privacy Policy</li>
//               <li className="hover:text-gray-400 cursor-pointer">Community Guidelines</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Social Media */}
//       <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center px-6">
//         <div className="flex gap-4">
//           <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-xl" />
//           <FaTwitter className="text-gray-400 hover:text-white cursor-pointer text-xl" />
//           <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer text-xl" />
//         </div>

//         <p className="text-gray-500 text-sm mt-4 md:mt-0">
//           Help & Support: <a href="mailto:support@tickertape.in" className="text-blue-400 hover:underline">support@tickertape.in</a>
//         </p>

//         <div className="mt-4 md:mt-0 flex items-center gap-2">
//           <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">65L+ downloads</span>
//           <span className="text-yellow-400 text-lg">⭐ 4.2 App Rating</span>
//         </div>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;
