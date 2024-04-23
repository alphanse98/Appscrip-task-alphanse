import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="p-10">
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
