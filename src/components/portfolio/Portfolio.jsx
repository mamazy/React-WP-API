import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Personal Websites",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "1",
  },
  {
    id: 2,
    image: IMG2,
    title: "Company Websites",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "2",
  },
  {
    id: 3,
    image: IMG3,
    title: "E-Commerce Websites",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "3",
  },
  {
    id: 4,
    image: IMG4,
    title: "Web Applications",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "4",
  },
  {
    id: 5,
    image: IMG5,
    title: "Linux Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "5",
  },
  {
    id: 6,
    image: IMG6,
    title: "Windows Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "6",
  },
  {
    id: 7,
    image: IMG6,
    title: "Windows Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "7",
  },
  {
    id: 8,
    image: IMG6,
    title: "Windows Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "8",
  },
  {
    id: 8,
    image: IMG6,
    title: "Windows Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "9",
  },
  {
    id: 10,
    image: IMG6,
    title: "Windows Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "10",
  },
  {
    id: 11,
    image: IMG6,
    title: "Windows Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "11",
  },
  {
    id: 12,
    image: IMG6,
    title: "Windows Hosting",
    info: "#contact",
    more: "https://www.tolue.net",
    aidi: "12",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, info, more, aidi }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="{title}" />
              </div>

              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={info} className="btn">
                  Request
                </a>

                <a
                  href={more}
                  id={aidi}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
