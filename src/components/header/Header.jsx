import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <div className="container header__container">
      <h5>Hello, I'm</h5>
      <h1>Mohammad Reza Toloue</h1>
      <h5 className="text-light">Full Stack Developer</h5>

      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </div>
  );
};

export default Header;
