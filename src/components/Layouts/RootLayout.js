import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-16">{children}</div>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default RootLayout;
