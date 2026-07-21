import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projectData.find(
    (item) => item.slug === slug
  );

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

            <img
              src={project.image}
              alt={project.title}
              className="project-image img-fluid shadow"
            />

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

    </section>
  );
}

export default ProjectDetails;