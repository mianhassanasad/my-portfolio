import "./Facts.css";

import {
  FaSmile,
  FaFolderOpen,
  FaHeadset,
  FaUsers,
} from "react-icons/fa";

function Facts() {
  return (
    <section id="facts" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Facts</h2>

          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
          </p>
        </div>

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch box-shadow">
            <div className="count-box">
              <FaSmile className="fact-icon" />

              <span>232</span>

              <p>
                <strong>Happy Clients</strong> consequuntur quae
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch box-shadow">
            <div className="count-box">
              <FaFolderOpen className="fact-icon" />

              <span>521</span>

              <p>
                <strong>Projects</strong> adipisci atque cum quia aut
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch box-shadow">
            <div className="count-box">
              <FaHeadset className="fact-icon" />

              <span>1463</span>

              <p>
                <strong>Hours Of Support</strong> aut commodi quaerat
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch box-shadow">
            <div className="count-box">
              <FaUsers className="fact-icon" />

              <span>15</span>

              <p>
                <strong>Hard Workers</strong> rerum asperiores dolor
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Facts;