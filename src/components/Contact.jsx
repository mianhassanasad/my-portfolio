import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Feel free to contact me anytime. I'm always open to discussing
            new projects, creative ideas, or opportunities.
          </p>
        </div>

        <div className="row">

          {/* Left Side */}
          <div className="col-lg-5 d-flex align-items-stretch">

            <div className="info">

              <div className="address">
                <FaMapMarkerAlt className="contact-icon" />
                <h4>Location:</h4>
                <p>Lahore, Pakistan</p>
              </div>

              <div className="email">
                <FaEnvelope className="contact-icon" />
                <h4>Email:</h4>
                <p>mianhassanmhofficial@gmail.com</p>
              </div>

              <div className="phone">
                <FaPhoneAlt className="contact-icon" />
                <h4>Call:</h4>
                <p>+92 324 4244882</p>
              </div>

              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="290"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">

            <form className="php-email-form">

              <div className="row">

                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

              </div>

              <div className="form-group mt-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Enter subject"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={8}
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <button type="submit">
                  Send Message
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;