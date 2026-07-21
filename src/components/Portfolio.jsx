import "./Portfolio.css";
import { useState } from "react";
import { FaPlus, FaLink } from "react-icons/fa";

import img1 from "../assets/Portfolio/one.png";
import img2 from "../assets/Portfolio/portfolio1.jpg";
import img3 from "../assets/Portfolio/portfolio-2.jpg";
import img4 from "../assets/Portfolio/portfolio-3.jpg";
import img5 from "../assets/Portfolio/portfolio-4.jpg";
import img6 from "../assets/Portfolio/portfolio-5.jpg";
import img7 from "../assets/Portfolio/portfolio-6.jpg";
import img8 from "../assets/Portfolio/portfolio-7.jpg";
import img9 from "../assets/Portfolio/portfolio-8.jpg";

function Portfolio() {

  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "web",
      image: img1,
      title: "Website 1",
      link: "#",
    },
    {
      id: 2,
      category: "app",
      image: img2,
      title: "App 1",
      link: "#",
    },
    {
      id: 3,
      category: "card",
      image: img3,
      title: "Card 1",
      link: "#",
    },
    {
      id: 4,
      category: "web",
      image: img4,
      title: "Website 2",
      link: "#",
    },
    {
      id: 5,
      category: "app",
      image: img5,
      title: "App 2",
      link: "#",
    },
    {
      id: 6,
      category: "card",
      image: img6,
      title: "Card 2",
      link: "#",
    },
    {
      id: 7,
      category: "card",
      image: img7,
      title: "Card 3",
      link: "#",
    },
    {
      id: 8,
      category: "web",
      image: img8,
      title: "Website 3",
      link: "#",
    },
    {
      id: 9,
      category: "web",
      image: img9,
      title: "Website 4",
      link: "#",
    },
  ];

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === filter
        );

  return (
    <section id="portfolio" className="portfolio section-bg">

      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>

          <p>
            Here are some of my recent projects including
            websites, applications and UI designs.
          </p>

        </div>

        {/* Filter Buttons */}

        <div className="row">

          <div className="col-lg-12 d-flex justify-content-center">

            <ul id="portfolio-flters">

              <li
                className={filter === "all" ? "filter-active" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </li>

              <li
                className={filter === "app" ? "filter-active" : ""}
                onClick={() => setFilter("app")}
              >
                App
              </li>

              <li
                className={filter === "card" ? "filter-active" : ""}
                onClick={() => setFilter("card")}
              >
                Card
              </li>

              <li
                className={filter === "web" ? "filter-active" : ""}
                onClick={() => setFilter("web")}
              >
                Web
              </li>

            </ul>

          </div>

        </div>

        {/* Portfolio Grid */}

        <div className="row">

          {filteredItems.map((item) => (

            <div
              className="col-lg-4 col-md-6 portfolio-item"
              key={item.id}
            >

              <div className="portfolio-wrap">

                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid"
                />

                <div className="portfolio-links">

                  <a
                    href={item.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaPlus />
                  </a>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLink />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Portfolio;
