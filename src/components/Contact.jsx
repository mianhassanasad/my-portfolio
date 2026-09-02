import "./Contact.css";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus({ submitted: true, success: false, message: "Sending message..." });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "10e55e05-39c4-4232-8f0c-b2ffe786303c", // Aapki nayi Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Inquiry",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          submitted: false,
          success: true,
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          submitted: false,
          success: false,
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        success: false,
        message: "Network error. Please check your connection.",
      });
    }

    // Clear status message after 6 seconds
    setTimeout(() => {
      setStatus({ submitted: false, success: false, message: "" });
    }, 6000);
  };

  return (
    <section id="contact" className="contact section-bg">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header text-center text-md-start mb-4">
          <h2 className="section-title fw-bold">Contact</h2>
          <p className="subtitle text-muted">
            Feel free to reach out anytime. I am open to discussing new projects, web development opportunities, or creative collaborations.
          </p>
        </div>

        <div className="row g-4">
          {/* Left Side Info Box */}
          <div className="col-lg-5">
            <div className="contact-info-card h-100">
              <div className="info-item">
                <div className="icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="details">
                  <h4>Location:</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaEnvelope />
                </div>
                <div className="details">
                  <h4>Email:</h4>
                  <p>
                    <a href="mailto:mianhassandev@gmail.com">
                      mianhassandev@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="details">
                  <h4>Call / WhatsApp:</h4>
                  <p>
                    <a href="tel:+923244244882">+92 324 4244882</a>
                  </p>
                </div>
              </div>

              <div className="map-wrapper mt-4">
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=Lahore,%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="210"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="col-lg-7">
            <form className="contact-form-card" onSubmit={handleSubmit}>
              {status.message && (
                <div
                  className={`alert ${
                    status.success ? "alert-success" : "alert-info"
                  } border-0 rounded-3 mb-4 text-center`}
                >
                  {status.message}
                </div>
              )}

              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-3">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Web Development Project Inquiry"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project requirements..."
                  required
                ></textarea>
              </div>

              <div className="text-center text-md-start mt-4">
                <button
                  type="submit"
                  className="btn btn-send-message"
                  disabled={status.submitted}
                >
                  <FaPaperPlane className="me-2" />
                  {status.submitted ? "Sending..." : "Send Message"}
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