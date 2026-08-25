import "./About.css";
import { useState } from "react";

function About() {
  // Modal open/close state
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="about section-bg">
      <div className="container">
        {/* Section Header */}
        <div className="about-header text-center text-md-start mb-4">
          <h2 className="section-title fw-bold">About Me</h2>
          <p className="subtitle text-muted">
            Transforming ideas into responsive web experiences
          </p>
        </div>

        {/* Main Content Area */}
        <div className="about-content">
          <h3 className="role-title mb-3 text-center text-md-start">
            Frontend & WordPress Developer (3+ Years Experience)
          </h3>

          <p className="about-text text-secondary mb-4 text-center text-md-start">
            Passionate Web Developer specialized in building high-performing, user-friendly websites. 
            With 3+ years of experience across <strong>React.js</strong> modern front-end stack and 
            <strong> WordPress / CMS Page Builders (Elementor & Divi)</strong>, I focus on delivering 
            pixel-perfect layouts, fast loading speeds, and seamless user experiences.
          </p>

          {/* Download Resume Button Area */}
          <div className="mb-4 text-center text-md-start">
            <a
              id="download-btn"
              className="btn btn-download shadow-sm"
              href="/resume/Mian_Hassan_Resume.pdf"
              download="
              Mian_Hassan_Resume.pdf"
            >
              Download Resume <span className="ms-1">&rarr;</span>
            </a>
          </div>

          {/* Key Details Grid */}
          <div className="info-card p-3 p-md-4 rounded-3 mb-4">
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="info-item mb-2">
                  <span className="info-label">Degree:</span>
                  <span className="info-val">Bachelor's</span>
                </div>
                <div className="info-item mb-2">
                  <span className="info-label">City:</span>
                  <span className="info-val">Lahore, Pakistan</span>
                </div>
                <div className="info-item mb-2 mb-md-0">
                  <span className="info-label">Email:</span>
                  <a href="mailto:mianhassanwp@gmail.com" className="info-val info-email text-decoration-none">
                    mianhassanwp@gmail.com
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="info-item mb-2">
                  <span className="info-label">Primary Tech:</span>
                  <span className="info-val">React, JavaScript, HTML5/CSS3</span>
                </div>
                <div className="info-item mb-2">
                  <span className="info-label">CMS Stack:</span>
                  <span className="info-val">WordPress, Elementor, Divi</span>
                </div>
                <div className="info-item align-items-center">
                  <span className="info-label">Freelance:</span>
                  <button
                    type="button"
                    className="btn-freelance-badge"
                    onClick={() => setShowModal(true)}
                  >
                    <span className="status-dot"></span> Available / Platforms &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="tech-badges-wrapper text-center text-md-start">
            <h6 className="text-uppercase text-muted fw-bold mb-3 fs-7">Core Skills & Tools</h6>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              <span className="tech-badge">React.js</span>
              <span className="tech-badge">JavaScript (ES6+)</span>
              <span className="tech-badge">WordPress</span>
              <span className="tech-badge">Elementor Pro</span>
              <span className="tech-badge">Divi Builder</span>
              <span className="tech-badge">Bootstrap 5</span>
              <span className="tech-badge">Responsive Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Freelance Platforms Popup Modal */}
      {showModal && (
        <div className="hire-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="hire-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="m-0 fw-bold text-dark">Hire Me On</h5>
              <button className="btn-close-modal" onClick={() => setShowModal(false)}>
                &times;
              </button>
            </div>
            <p className="text-muted fs-7 mb-3">Choose your preferred freelance platform:</p>
            
            <div className="d-flex flex-column gap-2">
              <a
                href="https://www.upwork.com/freelancers/~0191a26372ac5e473a?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link upwork"
              >
                Upwork  <span>&rarr;</span>
              </a>

              <a
                href="https://www.fiverr.com/users/mianhassanmh/"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link fiverr"
              >
                Fiverr  <span>&rarr;</span>
              </a>

              <a
                href="https://www.freelancer.com/u/MianHassanmh"
                target="_blank"
                rel="noopener noreferrer"
                className="platform-link freelancer"
              >
                Freelancer.com <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;