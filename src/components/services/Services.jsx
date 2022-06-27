import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Service</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Webdesign</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Customize & Design E-shop for your business</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize your website Speed performance</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimize Your SEO Score on Search Engines</p>
            </li>
          </ul>
        </article>
        {/* END OF UX/UI */}

        <article className="service">
          <div className="service__head">
            <h3>Linux Hosting</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>6 Optimized Servers Globally</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>CPanel</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Free SSL included</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Acceleration</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>ASSP Spam Control Software</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>JetBackup</p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Support</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation for your Business</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Photography from Your Business</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Teaching your Team to control & Manage CMS </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>24/7 Email Support</p>
            </li>
          </ul>
        </article>

        {/* END OF Content Creation */}
      </div>
    </section>
  );
};

export default Services;
