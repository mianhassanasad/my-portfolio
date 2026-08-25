import "./Facts.css";
import {
  FaSmile,
  FaFolderOpen,
  FaHeadset,
  FaAward,
} from "react-icons/fa";

function Facts() {
  return (
    <section id="facts" className="facts section-bg">
      <div className="container">

        {/* Section Header */}
        <div className="facts-header text-center text-md-start mb-4">
          <h2 className="section-title fw-bold">Facts & Milestones</h2>
          <p className="subtitle text-muted">
            A quick overview of my professional experience, completed projects, and client satisfaction over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="row g-3 g-md-4">

          {/* Happy Clients */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <div className="icon-wrapper client-icon">
                <FaSmile className="fact-icon" />
              </div>
              <span className="count-number d-block">30+</span>
              <p className="count-text m-0">
                <strong>Happy Clients</strong> across worldwide marketplaces
              </p>
            </div>
          </div>

          {/* Projects Done */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <div className="icon-wrapper project-icon">
                <FaFolderOpen className="fact-icon" />
              </div>
              <span className="count-number d-block">50+</span>
              <p className="count-text m-0">
                <strong>Projects Done</strong> in React & WordPress
              </p>
            </div>
          </div>

          {/* Support & Commitment */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <div className="icon-wrapper support-icon">
                <FaHeadset className="fact-icon" />
              </div>
              <span className="count-number d-block">24/7</span>
              <p className="count-text m-0">
                <strong>Client Support</strong> & maintenance availability
              </p>
            </div>
          </div>

          {/* Client Satisfaction / Quality */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <div className="icon-wrapper quality-icon">
                <FaAward className="fact-icon" />
              </div>
              <span className="count-number d-block">100%</span>
              <p className="count-text m-0">
                <strong>Job Success</strong> rate & quality delivery
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Facts;