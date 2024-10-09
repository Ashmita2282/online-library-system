import React from "react";
import { Link } from "react-router-dom";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography"];

const CategoryList = () => {
  return (
    <div>
      <h2>Book Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
