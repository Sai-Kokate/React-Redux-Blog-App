import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
        {/* // outlet represents all the childern */}
      </main>
    </>
  );
};

export default Layout;
