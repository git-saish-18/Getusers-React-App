import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li id="logo">
            LetsGrowMore
          </li>
          <li id="home">
            <Link to="/home">Home</Link>
          </li>
          <li >
            <Link id="about" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
