import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId);
        }
      }, 400); 
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
    closeMobileMenu();
  };  


  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setActiveSection("");
    closeMobileMenu();
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 150);
  };

  const handleJoinClick = () => {
    navigate("/join");
    closeMobileMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "team", "events"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --primary-red: #cf2533;
          --dark-text: #111111;
          --light-bg: #ffffff;
          --hover-underline: #cf2533;
          --transition: all 0.3s ease;
          --shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.1rem 2rem;
          background: var(--light-bg);
          color: var(--dark-text);
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: var(--shadow);
          border-bottom: 1px solid #eee;
        }

        .logo {
          font-family: 'Lato', sans-serif;
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--primary-red);
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.5px;
        }

        nav {
          display: flex;
          gap: 1.6rem;
          align-items: center;
          transition: var(--transition);
        }

        nav a {
          position: relative;
          color: var(--dark-text);
          text-decoration: none;
          font-weight: 500;
          font-family: 'Lato', sans-serif;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: var(--transition);
        }

        nav a:hover,
        nav a.active {
          color: var(--primary-red);
        }

        nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0;
          background: var(--hover-underline);
          transition: width 0.3s ease;
        }

        nav a:hover::after,
        nav a.active::after {
          width: 100%;
        }

        /* Mobile menu icon */
        .menu-icon {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          cursor: pointer;
        }

        .menu-icon span {
          display: block;
          height: 3px;
          background: var(--primary-red);
          border-radius: 2px;
          transition: var(--transition);
        }

        @media (max-width: 768px) {
          nav {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--light-bg);
            flex-direction: column;
            align-items: start;
            gap: 1rem;
            padding: 1.5rem 2rem;
            box-shadow: var(--shadow);
            border-bottom: 1px solid #eee;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.4s ease;
          }

          nav.open {
            opacity: 1;
            max-height: 300px;
          }

          .menu-icon {
            display: flex;
          }

          .menu-icon.open span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .menu-icon.open span:nth-child(2) {
            opacity: 0;
          }

          .menu-icon.open span:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
          }
        }
      `}</style>

      <header>
        <div className="logo" onClick={handleHomeClick}>
          Tufts ASA
        </div>

        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={isMenuOpen ? "open" : ""}>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#team"
            className={activeSection === "team" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("team");
            }}
          >
            Team
          </a>
          <a
            href="#events"
            className={activeSection === "events" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("events");
            }}
          >
            Events
          </a>
          <a onClick={handleJoinClick}>Join</a>
        </nav>
      </header>
    </>
  );
}
