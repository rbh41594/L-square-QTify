import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <Logo />
      </a>
      <Search />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
