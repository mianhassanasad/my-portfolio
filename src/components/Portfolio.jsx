import "./Portfolio.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaLink } from "react-icons/fa";

import projectData from "../data/projectData";
  
function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? projectData
      : projectData.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        {/* Section Title */}

        <div className="section-title">
          <h2>Portfolio</h2>

          <p>
            Here are some of my recent projects including websites,
            applications and UI designs.
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
                className={filter === "web" ? "filter-active" : ""}
                onClick={() => setFilter("web")}
              >
                Web
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

            </ul>

          </div>
        </div>

        {/* Portfolio Grid */}

        <div className="row">

          {filteredItems.map((project) => (

            <div
              className="col-lg-4 col-md-6 portfolio-item mb-4"
              key={project.id}
            >

              <div className="portfolio-wrap">

                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />

                <div className="portfolio-info">

                  <h4>{project.title}</h4>

                  <p>{project.category}</p>

                </div>

                <div className="portfolio-links">

                  {/* Image Preview */}

                  <a
                    href={project.image}
                    target="_blank"
                    rel="noreferrer"
                    title="Preview Image"
                  >
                    <FaPlus />
                  </a>

                  {/* Project Details */}

                  <Link
                    to={`/project/${project.slug}`}
                    title="Project Details"
                  >
                    <FaLink />
                  </Link>

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
