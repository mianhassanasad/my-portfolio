import { useState, useEffect } from "react";
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
  FaSun,
  FaMoon,
} from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();
  const location = useLocation();

  // Dark/Light theme sync with DOM & localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Navigation Items with section IDs
  const navItems = [
    { title: "Home", id: "hero", icon: <FaHome className="nav-icon" /> },
    { title: "About", id: "about", icon: <FaUser className="nav-icon" /> },
    { title: "Portfolio", id: "portfolio", icon: <FaBriefcase className="nav-icon" /> },
    { title: "Services", id: "services", icon: <FaServer className="nav-icon" /> },
    { title: "Contact", id: "contact", icon: <FaEnvelope className="nav-icon" /> },
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection();
      }, 300);
    } else {
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
        <div className="d-flex flex-column h-150 justify-between">

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

          {/* Theme Toggle Button at Bottom of Sidebar */}
          <div className="text-center my-3">
            <button
              onClick={toggleTheme}
              className="btn btn-sm text-light d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill"
              style={{
                backgroundColor: theme === "light" ? "#173b6c" : "#334155",
                border: "none",
                fontSize: "13px",
              }}
              title="Toggle Dark/Light Mode"
            >
              {theme === "light" ? (
                <>
                  <FaMoon size={14} /> Dark Mode
                </>
              ) : (
                <>
                  <FaSun size={14} className="text-warning" /> Light Mode
                </>
              )}
            </button>
          </div>

        </div>
      </header>
    </>
  );
}

export default Header;