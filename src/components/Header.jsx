import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import profileImg from "../assets/profile.jpg";

import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaServer,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation Items with section IDs
  const navItems = [
    { title: "Home", id: "hero", icon: <FaHome className="nav-icon" /> },
    { title: "About", id: "about", icon: <FaUser className="nav-icon" /> },
    { title: "Portfolio", id: "portfolio", icon: <FaBriefcase className="nav-icon" /> },
    { title: "Services", id: "services", icon: <FaServer className="nav-icon" /> },
    { title: "Contact", id: "contact", icon: <FaEnvelope className="nav-icon" /> },
  ];

  // Handler for smooth navigation across sub-pages and home sections (Optimized for Mobile)
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Agar hum pehle se home page (/) par nahi hain, toh pehle home par jayein
    if (location.pathname !== "/") {
      navigate("/");
      // Mobile aur sub-pages ke liye proper delay taaki DOM load ho jaye
      setTimeout(() => {
        scrollToSection();
      }, 300);
    } else {
      // Agar pehle hi home page par hain
      setTimeout(() => {
        scrollToSection();
      }, 100);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <header id="header" className={menuOpen ? "header-active" : ""}>
        <div className="d-flex flex-column">

          {/* Profile */}
          <div className="profile">
            <img
              src={profileImg}
              alt="Mian Hassan"
              className="img-fluid rounded-circle"
            />

            <h1 className="text-light">
              <a href="/" onClick={(e) => handleNavClick(e, "hero")}>Mian Hassan</a>
            </h1>

            {/* Social Links */}
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/MianHassanasad" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://www.facebook.com/MianHassanasadmh" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/mian________hassan/" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/mian-hassan-62b9a41b6/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="nav-menu">
            <ul>
              {navItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </header>
    </>
  );
}

export default Header;