import React from "react";
import { Link } from "react-router-dom";
import altImg from "../assets/book.jpg";

const categories = [
  {
    name: "Fiction",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9vYjkrYa6Y_3nPtmyVe4csM0OWJB7YyYfA&s",
  },
  {
    name: "Non-Fiction",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbAgDiWVTK_lTwH4dNOg3Op178xK59URT7uw&s",
  },
  {
    name: "Sci-Fi",
    imgUrl:
      "https://png.pngtree.com/background/20230410/original/pngtree-future-world-sci-fi-background-picture-image_2380562.jpg",
  },
  {
    name: "Coding",
    imgUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    name: "Biography",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6-xWgaMQinf4JszfTxHYAd-Ue2zkIzkdqw&s",
  },
  {
    name: "Thriller",
    imgUrl: "https://static.tnn.in/photo/104200665/104200665.jpg",
  },
  {
    name: "Fantasy",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCF1UbEFhMvNLqk62BhNNxabfJeMxYd5PRsA&s",
  },
  {
    name: "History",
    imgUrl:
      "https://imgeng.jagran.com/images/2024/09/05/article/image/best-historical-fiction-books-1725540167233-1725540220573_m.webp",
  },
  {
    name: "Mystery",
    imgUrl:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2021/06/best-mystery-books-lapena.png?fit=680%2C489",
  },
];

const popularBooks = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    imgUrl:
      "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    imgUrl:
      "https://m.media-amazon.com/images/I/61Gg9qtRMXL._AC_UF350,350_QL80_.jpg",
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    imgUrl:
      "https://m.media-amazon.com/images/I/913padSawdL._AC_UF1000,1000_QL80_.jpg",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col font-serif items-center w-full justify-center bg-gradient-to-b from-[#FCF6F5] to-[#8AAAE5]">
      {/* Welcome Section */}
      <div className="flex border shadow p-5 flex-col justify-center items-center italic text-center">
        <h1 className="text-4xl font-bold mt-16 text-[#82a3de] mb-5">
          What will be your next adventure?
        </h1>
        <p className="text-xl m-6 p-2 font-bold text-[#aac1e8] mb-6">
          Here at EliteReads, dive into a world of exceptional literature across
          Science Fiction, Coding, Mystery, Historical Fiction, and beyond.
        </p>
      </div>

      {/* Categories Section */}
      <div className="mb-8 w-[80%] mt-8 shadow-y">
        <h2 className="text-3xl text-[#668dd0] text-center font-semibold mb-4">
          Browse by Categories
        </h2>
        <div className="flex flex-wrap space-x-3 mt-8  items-center justify-center">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/books/${category.name.toLowerCase()}`} // corrected path for param-based routing
              className="flex flex-col items-center bg-[#8AAAE5] text-white rounded m-5 py-2 px-4 hover:bg-blue-600 transition duration-300"
            >
              <img
                src={category.imgUrl || altImg}
                alt={`${category.name} category`}
                className="w-24 h-24 mb-2 rounded-full" // Style the image
              />
              <button className="font-bold text-xl">{category.name}</button>
            </Link>
          ))}
        </div>
      </div>

      <hr />

      {/* Popular Books Section */}
      <div className="w-[80%] ">
        <h2 className="text-3xl text-center  m-5 justify-center items-center mb-4 text-[#4272c5] font-bold font-serif">
          Popular Books
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap m-5 justify-center items-center text-center">
          {popularBooks.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="m-5 bg-white p-4 shadow-md rounded-lg hover:shadow-lg flex flex-col justify-center items-center text-center transition duration-300"
            >
              <img
                src={book.imgUrl}
                alt="Image"
                className="w-24 h-24 mb-2 items-center rounded-full border" // Style the image
              />
              <h3 className="text-xl font-semibold text-[#8AAAE5]">
                {book.title}
              </h3>
              <p className="text-gray-500 text-l font-semibold">
                By {book.author}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
