import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import "./index.css";
import Home from "./components/Home";
import BrowseBooks from "./components/BrowseBooks";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> }, // Home Page
      { path: "books", element: <BrowseBooks /> }, // Browse Books
      { path: "books/:category", element: <BrowseBooks /> }, // Browse Books by Category
      { path: "book/:id", element: <BookDetails /> }, // Book Details
      { path: "add-book", element: <AddBook /> }, // Add Book
      { path: "/", element: <Footer /> }, // 404 Page
      { path: "*", element: <NotFound /> }, // 404 Page
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);
