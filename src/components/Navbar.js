import React from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-container">
          <button className="toggle-sidebar">
            <FiMenu />
          </button>
          <Logo />
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
