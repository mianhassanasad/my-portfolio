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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Direct mailto trigger fallback
    const mailtoLink = `mailto:mianhassandev@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
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
              {submitted && (
                <div className="alert alert-custom border-0 rounded-3 mb-4 text-center">
                  Thank you! Opening your email app to send the message...
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
                <button type="submit" className="btn btn-send-message">
                  <FaPaperPlane className="me-2" /> Send Message
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