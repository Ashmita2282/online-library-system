import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#8AAAE5] shadow-lg font-serif">
      <nav className="container mx-auto p-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold tracking-wide">
          <Link to="/">📚 EliteReads</Link>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white border rounded shadow p-3 hover:text-[#FCF6F5] text-lg transition duration-300 transform hover:scale-110"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className="border rounded shadow p-3 text-white hover:text-[#FCF6F5] text-lg transition duration-300 transform hover:scale-110"
            >
              Browse Books
            </Link>
          </li>
          <li>
            <Link
              to="/add-book"
              className="border rounded shadow p-3 text-white hover:text-[#FCF6F5] text-lg transition duration-300 transform hover:scale-110"
            >
              Add Book
            </Link>
          </li>
        </ul>

        {/* Mobile Dropdown Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full bg-[#8AAAE5] z-10 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                className="text-white p-3 w-full text-center hover:bg-[#7a97d6] transition-colors duration-200"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/books"
                className="text-white p-3 w-full text-center hover:bg-[#7a97d6] transition-colors duration-200"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Browse Books
              </Link>
            </li>
            <li>
              <Link
                to="/add-book"
                className="text-white p-3 w-full text-center hover:bg-[#7a97d6] transition-colors duration-200"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                Add Book
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
