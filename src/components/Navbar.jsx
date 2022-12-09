import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="page-header">
      <div className="container">
        <nav className="page-navigation">
          <div className="logo-container">
            <Link to={"/react-ecommerce-fetch-api/"}>
              <img src="/favicon/android-chrome-192x192.png" alt="" />
            </Link>
          </div>
          <form action="#">
            <input type="text" />
            <input type="button" value="Search" />
          </form>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
