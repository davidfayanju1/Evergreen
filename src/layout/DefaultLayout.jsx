import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="page-container">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
