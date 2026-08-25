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
        <div className="section-title text-center text-md-start mb-4">
          <h2 className="fw-bold">Facts & Milestones</h2>
          <p className="text-muted">
            A quick overview of my professional experience, completed projects, and client satisfaction over the years.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="row g-3 g-md-4">

          {/* Happy Clients */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <FaSmile className="fact-icon text-primary mb-2" />
              <span className="count-number d-block">30+</span>
              <p className="count-text m-0">
                <strong>Happy Clients</strong> across worldwide marketplaces
              </p>
            </div>
          </div>

          {/* Projects Done */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <FaFolderOpen className="fact-icon text-success mb-2" />
              <span className="count-number d-block">50+</span>
              <p className="count-text m-0">
                <strong>Projects Done</strong> in React & WordPress
              </p>
            </div>
          </div>

          {/* Support & Commitment */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <FaHeadset className="fact-icon text-info mb-2" />
              <span className="count-number d-block">24/7</span>
              <p className="count-text m-0">
                <strong>Client Support</strong> & maintenance availability
              </p>
            </div>
          </div>

          {/* Client Satisfaction / Quality */}
          <div className="col-6 col-lg-3">
            <div className="count-box text-center">
              <FaAward className="fact-icon text-warning mb-2" />
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