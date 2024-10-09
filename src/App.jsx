import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders child routes */}
      <Footer />
    </>
  );
};

export default App;
