import "./About.css";

function About() {
  return (
    <section id="about" className="about section-bg">
      <div className="container py-4">
        {/* Header Row */}
        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4 pb-3 border-bottom">
          <div>
            <h2 className="section-heading mb-1">About Me</h2>
            <p className="text-muted mb-0 fs-6">
              Transforming ideas into responsive web experiences
            </p>
          </div>
          <a
            id="download-btn"
            className="btn btn-download shadow-sm"
            href="/resume/Mian-Hassan.pdf"
            download="Mian_Hassan_Resume.pdf"
          >
            Download Resume <span className="ms-1">&rarr;</span>
          </a>
        </div>

        {/* Main Content Area */}
        <div className="about-content">
          <h3 className="role-title mb-3">
            Frontend & WordPress Developer (3+ Years Experience)
          </h3>

          <p className="about-text text-secondary mb-4">
            Passionate Web Developer specialized in building high-performing, user-friendly websites. 
            With 3+ years of experience across <strong>React.js</strong> modern front-end stack and 
            <strong> WordPress / CMS Page Builders (Elementor & Divi)</strong>, I focus on delivering 
            pixel-perfect layouts, fast loading speeds, and seamless user experiences.
          </p>

          {/* Key Details Card */}
          <div className="info-card p-4 rounded-3 mb-4">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="info-item mb-2">
                  <span className="info-label">Degree:</span>
                  <span className="info-val">Bachelor's</span>
                </div>
                <div className="info-item mb-2">
                  <span className="info-label">City:</span>
                  <span className="info-val">Lahore, Pakistan</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <a href="mailto:mianhassanwp@gmail.com" className="info-val text-primary text-decoration-none">
                    mianhassanwp@gmail.com
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item mb-2">
                  <span className="info-label">Primary Tech:</span>
                  <span className="info-val">React, JavaScript, HTML5/CSS3</span>
                </div>
                <div className="info-item mb-2">
                  <span className="info-label">CMS Stack:</span>
                  <span className="info-val">WordPress, Elementor, Divi</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Freelance:</span>
                  <span className="badge bg-success ms-2">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="tech-badges-wrapper">
            <h6 className="text-uppercase text-muted fw-bold mb-2 fs-7">Core Skills & Tools</h6>
            <div className="d-flex flex-wrap gap-2">
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
    </section>
  );
}

export default About;