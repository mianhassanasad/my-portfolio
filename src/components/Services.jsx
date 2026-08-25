import "./Services.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  FaQuoteLeft,
  FaQuoteRight,
  FaCode,
  FaWordpress,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaTools,
} from "react-icons/fa";

import img1 from "../assets/Testimonials/testimonials-1.jpg";
import img2 from "../assets/Testimonials/testimonials-2.jpg";
import img3 from "../assets/Testimonials/testimonials-3.jpg";
import img4 from "../assets/Testimonials/testimonials-4.jpg";
import img5 from "../assets/Testimonials/testimonials-5.jpg";

function Services() {
  const servicesList = [
    {
      id: 1,
      icon: <FaCode />,
      title: "React Web Development",
      description:
        "Building fast, reactive, and scalable single-page web applications (SPA) using React.js and modern JS tools.",
    },
    {
      id: 2,
      icon: <FaWordpress />,
      title: "WordPress Customization",
      description:
        "Customizing WordPress themes, Elementor/Divi page builds, e-commerce stores, and plugin integrations.",
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      title: "Fully Responsive Design",
      description:
        "Ensuring seamless layouts, fluid typography, and mobile-first experience across all modern mobile and desktop screens.",
    },
    {
      id: 4,
      icon: <FaRocket />,
      title: "Speed & Performance",
      description:
        "Optimizing site assets, lazy loading images, clean code structure, and caching for ultra-fast loading speed.",
    },
    {
      id: 5,
      icon: <FaSearch />,
      title: "On-Page SEO Optimization",
      description:
        "Implementing clean meta tags, semantic HTML tags, speed tweaks, and accessibility best practices for high search rankings.",
    },
    {
      id: 6,
      icon: <FaTools />,
      title: "Maintenance & Support",
      description:
        "Regular security audits, bug fixing, plugin updates, content management, and ongoing website technical assistance.",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: img1,
      text: "Hassan delivered our web platform ahead of schedule with exceptional pixel-perfect detail. Highly reliable developer!",
    },
    {
      id: 2,
      name: "Sara Wilsson",
      role: "Designer",
      image: img2,
      text: "Working with Hassan was a smooth experience. He transformed our Figma prototypes into accurate React components seamlessly.",
    },
    {
      id: 3,
      name: "Jena Karlis",
      role: "Store Owner",
      image: img3,
      text: "Our WordPress site speeds improved dramatically after optimization. Sales went up within the first two weeks!",
    },
    {
      id: 4,
      name: "Matt Brandon",
      role: "Freelancer",
      image: img4,
      text: "Great communication, top-tier technical skills in Elementor & React, and dedicated project delivery. Highly recommended!",
    },
    {
      id: 5,
      name: "John Larson",
      role: "Entrepreneur",
      image: img5,
      text: "Very skilled developer. Clean code structure, mobile responsiveness, and easy ongoing support whenever required.",
    },
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          
          {/* Section Header */}
          <div className="services-header text-center text-md-start mb-4">
            <h2 className="section-title fw-bold">Services</h2>
            <p className="subtitle text-muted">
              High-quality web development services tailored to grow your digital presence and optimize performance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {servicesList.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="service-box">
                  <div className="service-icon">{service.icon}</div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">

          {/* Section Header */}
          <div className="testimonials-header text-center text-md-start mb-4">
            <h2 className="section-title fw-bold">Testimonials</h2>
            <p className="subtitle text-muted">
              What my clients and partners say about my commitment, work quality, and delivery.
            </p>
          </div>

          {/* Testimonials Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={25}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-item">
                  <p className="testimonial-text">
                    <FaQuoteLeft className="quote-icon quote-left" />
                    {item.text}
                    <FaQuoteRight className="quote-icon quote-right" />
                  </p>

                  <div className="testimonial-user">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="testimonial-img"
                    />
                    <div className="user-info">
                      <h3>{item.name}</h3>
                      <h4>{item.role}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Services;