import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>Inicio</Link>
        <Link to="/home" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
