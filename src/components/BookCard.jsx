import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold text-[#8AAAE5] mb-2">
        {book.title}
      </h3>
      <p className="text-gray-600">By {book.author}</p>
      <Link
        to={`/book/${book.id}`}
        className="inline-block mt-4 bg-[#8AAAE5] text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
