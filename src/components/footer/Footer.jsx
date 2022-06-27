import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="Footer">
      <a href="https://tolue.net" className="footer__logo">
        Tolue.Net
      </a>

      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="#top">
          <FaFacebookF />
        </a>
        <a href="#top">
          <FiInstagram />
        </a>
        <a href="#top">
          <FiTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tolue.Net All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
