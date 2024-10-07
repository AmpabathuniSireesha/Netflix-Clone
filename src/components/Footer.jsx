import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="social-media">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Investor Relations</a></li>
          </ul>
          <ul><li><a href="#">Terms of Use</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
        </ul>
        <ul>
          <li><a href="#">Help Centre</a></li>
          <li><a href="#">Media Centre</a></li>
          <li><a href="#">Jobs</a></li></ul>
          <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="service-code">
        <button>Service Code</button>
      </div>
      <p>© 1997-2024 Netflix, Inc.</p>
    </footer>
  );
};

export default Footer;
