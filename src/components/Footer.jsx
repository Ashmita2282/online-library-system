import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#8AAAE5] text-white py-8 font-serif shadow-xl border-t border-white border ">
      <div className="my-4" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">📚 EliteReads</h2>
            <p className="text-md">
              Join our newsletter for updates and offers.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/"
              className="hover:text-[#FCF6F5] transition duration-300 text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              to="/"
              className="hover:text-[#FCF6F5] transition duration-300 text-lg font-semibold"
            >
              | About Us |
            </Link>
            <Link
              to="/"
              className="hover:text-[#FCF6F5] transition duration-300 text-lg font-semibold"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="shadow">
          <div className="flex justify-center space-x-6 mb-2 pt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCF6F5] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path d="M8 0A8 8 0 0 0 0 8a8 8 0 0 0 7.774 7.97V10.5H5.557V8h2.217V6.363A2.516 2.516 0 0 1 9.778 4.5c.789 0 1.471.058 1.668.084v2.207H10.5a1.5 1.5 0 0 0-1.5 1.5V8h2.191L10 10.5H8.5V16A8 8 0 0 0 8 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCF6F5] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path d="M5.026 15C11.509 15 14.29 9.036 14.29 5.473c0-.233-.005-.466-.016-.698A10.211 10.211 0 0 0 16 2.25a10.027 10.027 0 0 1-2.83.775 5.047 5.047 0 0 0 2.213-2.775 10.1 10.1 0 0 1-3.219 1.23A5.022 5.022 0 0 0 7.8 6.33a14.256 14.256 0 0 1-10.291-5.21A5.024 5.024 0 0 0 2.392 9.69a5.028 5.028 0 0 1-2.275-.633v.064c0 2.444 1.733 4.48 4.036 4.93-.422.115-.866.173-1.324.173-.324 0-.64-.031-.952-.086.64 1.99 2.5 3.44 4.694 3.48a10.095 10.095 0 0 1-6.271 2.164c-.41 0-.812-.024-1.21-.071a14.254 14.254 0 0 0 7.61 2.226" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FCF6F5] transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-6 h-6"
              >
                <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm3.002 2.001c.048 0 .095.002.143.005a1.867 1.867 0 0 1 1.703 1.703c.003.047.005.095.005.143v1.494H11V4.836h1.005C12.232 4.71 12.005 4.5 12 4.5a1.5 1.5 0 0 0-1.5 1.5V9h-1V6.163V4.5H8v4.5h-1V4.5H5.001V2.001h3.001V2.5a.5.5 0 0 1 .001-1zm1.999 4.999H10v3h1V6zm-2 0H8v3h1V6z" />
              </svg>
            </a>
          </div>
          <p className="text-center text-sm pb-3">
            &copy; {new Date().getFullYear()} | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
