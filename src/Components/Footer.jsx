import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "1rem", backgroundColor: "#f0f0f0", marginTop: "2rem", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Senior Wellness App</p>
    </footer>
  );
};

export default Footer;
