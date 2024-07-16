import React from "react";
import { Link } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Policy from "../../pages/Policy";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Rights Reserved &copy; Chaitanya</h4>
      <p className="mt-3 text-center">
        <Link to="/about" element={<About />}>
          About
        </Link>{" "}
        |
        <Link to="/contact" element={<Contact />}>
          Contact
        </Link>{" "}
        |
        <Link to="/policy" element={<Policy />}>
          Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
