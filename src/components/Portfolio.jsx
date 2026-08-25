import "./Portfolio.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaLink } from "react-icons/fa";
import projectData from "../data/projectData";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Extract unique categories dynamically from projectData
  const categories = [
    "all",
    ...new Set(projectData.map((item) => item.category)),
  ];

  const filteredItems =
    filter === "all"
      ? projectData
      : projectData.filter((item) => item.category === filter);

  // Formatting labels for filter buttons
  const formatCategoryName = (category) => {
    switch (category) {
      case "all":
        return "All";
      case "wordpress":
        return "WordPress / CMS";
      case "react":
        return "React / Front-End";
      case "ecommerce":
        return "E-Commerce";
      default:
        return category.toUpperCase();
    }
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        {/* Section Title */}
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Here are some of my recent projects including WordPress websites,
            Custom React Applications, and E-Commerce solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
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
                  <p>{formatCategoryName(project.category)}</p>
                </div>

                <div className="portfolio-links">
                  {/* Image Preview */}
                  <button
                    className="preview-btn"
                    onClick={() => setSelectedImage(project.image)}
                    aria-label="Preview Image"
                  >
                    <FaPlus />
                  </button>

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