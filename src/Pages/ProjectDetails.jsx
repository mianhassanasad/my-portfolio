import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";
import "./ProjectDetails.css";
import { useState } from "react";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projectData.find(
    (item) => item.slug === slug
  );
  
  const [mainImage, setMainImage] = useState(project?.image);
  const [isZoomed, setIsZoomed] = useState(false); // Zoom state added

  if (!project) {
    return (
      <div className="container py-5 text-center">

        <h1>Project Not Found</h1>

        <Link
          to="/"
          className="btn btn-primary mt-4"
        >
          Back Home
        </Link>

      </div>
    );
  }

  return (
    <section className="project-details">

      <div className="container">

        {/* Back Button */}

        <div className="mb-5">

          <Link
            to="/"
            className="btn btn-outline-primary"
          >
            ← Back to Portfolio
          </Link>

        </div>

        {/* Hero */}

        <div className="row align-items-center g-5">

          <div className="col-lg-6">

            {/* Main Image with Click to Zoom */}
            <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setIsZoomed(true)}>
              <img
                src={mainImage}
                alt={project.title}
                className="project-image img-fluid shadow"
              />
              <div 
                style={{
                  position: "absolute",
                  bottom: "15px",
                  right: "15px",
                  background: "rgba(20, 157, 221, 0.9)",
                  color: "#fff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}
              >
                🔍 Click to Zoom
              </div>
            </div>

            <div className="thumbnail-gallery">

              {project.gallery.map((img, index) => (

                <img
                  key={index}
                  src={img}
                  alt=""
                  className={`thumbnail ${mainImage === img ? "active-thumb" : ""
                    }`}
                  onClick={() => setMainImage(img)}
                />

              ))}

            </div>

          </div>

          <div className="col-lg-6">

            <span className="project-category">
              {project.category.toUpperCase()}
            </span>

            <h1 className="project-title mt-3">
              {project.title}
            </h1>

            <p className="project-description">
              {project.description}
            </p>

            <div className="mt-4">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary me-3"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* Overview */}

        <div className="row mt-5">

          <div className="col-lg-8">

            <div className="project-card">

              <h2>Project Overview</h2>

              <p>
                {project.overview}
              </p>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="project-card">

              <h2>Project Info</h2>

              <p>
                <strong>Client:</strong> {project.client}
              </p>

              <p>
                <strong>Role:</strong> {project.role}
              </p>

              <p>
                <strong>Duration:</strong> {project.duration}
              </p>

              <p>
                <strong>Status:</strong> {project.status}
              </p>

            </div>

          </div>

        </div>

        {/* Technologies */}

        <div className="project-card mt-5">

          <h2>Technologies Used</h2>

          <div className="tech-list">

            {project.technologies.map((tech, index) => (

              <span
                key={index}
                className="badge bg-primary"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

        {/* Features */}

        <div className="project-card mt-5">

          <h2>Key Features</h2>

          <ul className="feature-list">

            {project.features.map((feature, index) => (

              <li key={index}>
                ✅ {feature}
              </li>

            ))}

          </ul>

        </div>

      </div>

      {/* Zoom Modal Pop-up */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
            cursor: "zoom-out"
          }}
        >
          <div style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomed(false)}
              style={{
                position: "absolute",
                top: "-45px",
                right: "0",
                background: "#149ddd",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "38px",
                height: "38px",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
              }}
            >
              &times;
            </button>
            <img
              src={mainImage}
              alt="Zoomed Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: "10px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            />
          </div>
        </div>
      )}

    </section>
  );
}

export default ProjectDetails;