import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import React from "react";



const HeaderFooter = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default HeaderFooter;