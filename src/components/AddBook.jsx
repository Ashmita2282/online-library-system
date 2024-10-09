import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category && description && rating) {
      dispatch(
        addBook({
          id: Date.now(),
          title,
          author,
          category,
          description,
          rating,
        })
      );
      navigate("/books");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#8AAAE5] to-[#FFFFFF] p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-[#8AAAE5] mb-6">
          Add a New Book
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-[#8AAAE5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8AAAE5] focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border border-[#8AAAE5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8AAAE5] focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-[#8AAAE5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8AAAE5] focus:border-transparent"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-[#8AAAE5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8AAAE5] focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-4 py-2 border border-[#8AAAE5] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8AAAE5] focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-[#8AAAE5] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
