// import React from 'react'
// import { Link } from 'react-router-dom'
// import Logo from "../Logo"

// function Footer() {
//   return (
// <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">

// <div className="relative z-10 mx-auto max-w-7xl px-4">
//     <div className="-m-6 flex flex-wrap">
//        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
//    <div className="flex h-full flex-col justify-between">
//        <div className="mb-4 inline-flex items-center">
//            <Logo width="100px" />
//        </div>
//        <div>
//            <p className="text-sm text-gray-600">
//                &copy; Copyright 2025. All Rights Reserved by DevUI.
//            </p>
//         </div>
//             </div>
//         </div>
//         <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//             <div className="h-full">
//                 <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//      Company
//  </h3>
//  <ul>


//      <li className="mb-4">
//          <Link
//              className=" text-base font-medium text-gray-900 hover:text-gray-700"
//              to="/"
//          >

//              Features
//          </Link>

//      </li>
//      <li className="mb-4">
//          <Link
//              className=" text-base font-medium text-gray-900 hover:text-gray-700"
//              to="/"
//          >
//              Pricing
//          </Link>
//      </li>
//      <li className="mb-4">
//          <Link
//              className=" text-base font-medium text-gray-900 hover:text-gray-700"
//              to="/"
//          >
//              Affiliate Program
//          </Link>
//      </li>
//      <li>
//        <Link
//              className=" text-base font-medium text-gray-900 hover:text-gray-700"
//              to="/"
//          >
//              Press Kit
//          </Link>
//                     </li>
//                 </ul>
//             </div>
//    </div>
//    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
//        <div className="h-full">
//            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//                Support
//            </h3>
//            <ul>
//                <li className="mb-4">
//                    <Link
//       className=" text-base font-medium text-gray-900 hover:text-gray-700"
//            to="/"
//        >
//            Account
//        </Link>
//  </li>
//  <li className="mb-4">
//      <Link
//          className=" text-base font-medium text-gray-900 hover:text-gray-700"
//          to="/"
//      >
//             Help
//         </Link>
//     </li>
//     <li className="mb-4">
//         <Link
//          className=" text-base font-medium text-gray-900 hover:text-gray-700"
//          to="/"
//      >
//          Contact Us
//      </Link>
//  </li>
//  <li>
//      <Link
//          className=" text-base font-medium text-gray-900 hover:text-gray-700"
//          to="/"
//      >
//     Customer Support
//                  </Link>
//              </li>
//          </ul>
//      </div>
//  </div>
//  <div className="w-full p-6 md:w-1/2 lg:w-3/12">
//      <div className="h-full">
//          <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
//              Legals
//          </h3>
//          <ul>
//                     <li className="mb-4">
//              <Link
//                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                  to="/"
//          >
//              Terms &amp; Conditions
//          </Link>
//      </li>
//      <li className="mb-4">
//          <Link
//              className=" text-base font-medium text-gray-900 hover:text-gray-700"
//              to="/"
//                     >
//                         Privacy Policy
//                     </Link>
//          </li>
//          <li>
//              <Link
//                  className=" text-base font-medium text-gray-900 hover:text-gray-700"
//                  to="/"
//              >
//                  Licensing
//              </Link>
//          </li>
//          </ul>
//          </div>
//         </div>
//     </div>
// </div>
// </section>
//   )
// }

// export default Footer




import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Facebook, Twitter, Instagram, Github } from "lucide-react"; // optional icons

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 border-t border-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & copyright */}
          <div>
            <div className="mb-4">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
            </p>

            Social links
            <div className="flex mt-6 space-x-4">
              <a href="/" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                <Facebook size={18} />
              </a>
              <a href="/" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                <Twitter size={18} />
              </a>
              <a href="/" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                <Instagram size={18} />
              </a>
              <a href="/" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="bg-pink-600 rounded-lg hover:bg-pink-700 h-60 p-7">
            <h3 className="mb-5 text-sm font-semibold uppercase text-gray-700 tracking-wide">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-black transition font-black">Features</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Pricing</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Affiliate Program</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Press Kit</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div  className="bg-red-600 rounded-lg hover:bg-red-700 h-60 p-7">
            <h3 className="mb-5 text-sm font-semibold uppercase text-gray-700 tracking-wide">
              Support
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Account</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Help</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Contact Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Customer Support</Link></li>
            </ul>
          </div>

          {/* Legals */}
          <div className="bg-pink-600 rounded-lg hover:bg-pink-700 h-60 p-7">
            <h3 className="mb-5 text-sm font-semibold uppercase text-gray-700 tracking-wide">
              Legals
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Terms & Conditions</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-black transition  font-black">Licensing</Link></li>
            </ul>
          </div>
        </div>

        {/* bottom border */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
          Built with ❤️ using React + Tailwind
        </div>
      </div>
    </footer>
  );
}

export default Footer;
