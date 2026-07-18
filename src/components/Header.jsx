import { useState } from "react";
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

  // Navigation Items
  const navItems = [
    {
      title: "Home",
      link: "#hero",
      icon: <FaHome className="nav-icon" />,
    },
    {
      title: "About",
      link: "#about",
      icon: <FaUser className="nav-icon" />,
    },
    {
      title: "Portfolio",
      link: "#portfolio",
      icon: <FaBriefcase className="nav-icon" />,
    },
    {
      title: "Services",
      link: "#services",
      icon: <FaServer className="nav-icon" />,
    },
    {
      title: "Contact",
      link: "#contact",
      icon: <FaEnvelope className="nav-icon" />,
    },
  ];

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
              <a href="#hero">Mian Hassan</a>
            </h1>

            {/* Social Links */}

            <div className="social-links mt-3 text-center">

              <a
                href="https://twitter.com/MianHassanasad"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.facebook.com/MianHassanasadmh"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/mian________hassan/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/in/mian-hassan-62b9a41b6/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* Navigation */}

          <nav className="nav-menu">
            <ul>

              {navItems.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
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