import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="p-5">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
