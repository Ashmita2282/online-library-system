import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import altImg from "../assets/book.jpg";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.list.find((book) => book.id === parseInt(id))
  );

  if (!book) {
    return <div className="text-center text-red-500">Book not found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8AAAE5] to-[#FFFFFF] p-6">
      <div className="w-full max-w-md flex  flex-col items-center justify-center bg-white p-8 rounded-lg shadow-xl">
        <img
          src={book.imgUrl || altImg}
          alt="Book Cover"
          className="w-[60%] rounded-xl mb-3 h-[250px] flex items-center justify-center"
        />
        <h1 className="text-3xl font-bold text-center text-[#8AAAE5] mb-3">
          {book.title}
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          By {book.author}
        </h2>

        <p className="text-gray-600 p-4 mb-4 text-center">
          <span className="font-bold">Description:</span> {book.description}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold">Rating:</span> {book.rating}
        </p>
        <Link
          to="/books"
          className="block text-center w-full bg-[#8AAAE5] text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Back to Books
        </Link>
      </div>
    </div>
  );
};

export default BookDetails;
