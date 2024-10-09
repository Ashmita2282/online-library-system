import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import altImg from "../assets/book.jpg";

const BrowseBooks = () => {
  const { category } = useParams(); // gets the category from the URL
  const books = useSelector((state) => state.books.list); // gets the book list from Redux

  const [searchTerm, setSearchTerm] = useState(""); // state for search term

  // If category exists, filter by category, otherwise show all books
  const filteredBooks = category
    ? books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase()
      )
    : books; // Show all books when no category is provided

  // Filter books by title or author based on search term
  const searchedBooks = searchTerm
    ? filteredBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredBooks;

  return (
    <div className="p-6 bg-gradient-to-b font-serif from-[#acbede] to-[#8AAAE5]">
      <h1 className="text-4xl font-bold text-center text-[#577ec7] mb-8">
        {searchedBooks.length
          ? category
            ? `Books in ${category}`
            : "Browse All Books"
          : "No Books Found"}
      </h1>

      {/* Search Input */}
      <div className="mb-8 flex justify-center items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by title or author"
          className="border-2 border-gray-300 p-3 rounded-lg w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>

      {searchedBooks.length === 0 ? (
        <p className="text-center h-60 text-lg font-semibold text-gray-600 p-6 bg-gradient-to-r from-[#8AAAE5] to-[#FCF6F5] rounded-lg shadow-lg mx-auto w-[80%] flex items-center justify-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#8AAAE5] animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 0a6 6 0 1112 0 6 6 0 01-12 0zm0 0a6 6 0 11-12 0 6 6 0 0112 0zm0 0l-6-6 6 6z"
            />
          </svg>
          <span className="text-[#4272c5] text-xl font-bold">
            Oops! No books found matching your search.
          </span>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
          {searchedBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden"
            >
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <img
                  src={book.imgUrl || altImg}
                  alt="Book Cover" // alt text is a description of the image
                  className="w-[60%] h-[250px] flex items-center justify-center"
                />

                <h2 className="font-bold text-xl text-gray-800 mb-2">
                  {book.title}
                </h2>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="text-blue-500 hover:text-indigo-500 text-sm font-semibold"
                >
                  View Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBooks;
