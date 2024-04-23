import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="p-10">   {/* container */}
        <NavBar />
        {children}
      </div>
      <Footer />  {/* Footer no need container */}
    </>
  );
};

export default Layout;
