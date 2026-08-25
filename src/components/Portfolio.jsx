import "./Portfolio.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearchPlus, FaExternalLinkAlt } from "react-icons/fa";
import projectData from "../data/projectData";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "all",
    ...new Set(projectData.map((item) => item.category)),
  ];

  const filteredItems =
    filter === "all"
      ? projectData
      : projectData.filter((item) => item.category === filter);

  const formatCategoryName = (category) => {
    switch (category) {
      case "all":
        return "All";
      case "wordpress":
        return "WordPress";
      case "react":
        return "React.js";
      case "ecommerce":
        return "E-Commerce";
      default:
        return category.toUpperCase();
    }
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Explore recent WordPress, React, and E-Commerce builds.</p>
        </div>

        {/* Filter Bar with Mobile Scroll Wrapper */}
        <div className="filter-container text-center mb-4">
          <ul id="portfolio-flters">
            {categories.map((cat) => (
              <li
                key={cat}
                className={filter === cat ? "filter-active" : ""}
                onClick={() => setFilter(cat)}
              >
                {formatCategoryName(cat)}
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="row g-4">
          {filteredItems.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="portfolio-wrap">
                <div className="portfolio-img-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                </div>

                <div className="portfolio-card-body">
                  <div className="portfolio-card-info">
                    <h4>{project.title}</h4>
                    <p>{formatCategoryName(project.category)}</p>
                  </div>

                  <div className="portfolio-actions">
                    <button
                      className="action-btn"
                      onClick={() => setSelectedImage(project.image)}
                      aria-label="Preview Image"
                    >
                      <FaSearchPlus />
                    </button>

                    <Link
                      to={`/project/${project.slug}`}
                      className="action-btn"
                      aria-label="Project Details"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Portfolio Preview"
            className="lightbox-image"
          />
        </div>
      )}
    </section>
  );
}

export default Portfolio;