import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    closeMobileMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setActiveSection('');
    closeMobileMenu();
  };

  const handleJoinClick = () => {
    navigate("/join");
    closeMobileMenu();
  };

  // Scroll listener to detect current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'team', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get display text for current section
  const getSectionDisplayName = () => {
    const displayNames = {
      'about': 'About',
      'team': 'Our Team',
      'events': 'Events',
      'contact': 'Contact',
      '': 'Home'
    };
    return displayNames[activeSection] || 'Home';
  };

  return (
    <>
      <style>{`
        .navbar {
          overflow: hidden;
          background-color: #ffffff;
          border-bottom: 1px solid #ddd;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          min-height: 50px;
        }

        .navbar a {
          float: left;
          display: block;
          color: black;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
          background-color: white;
        }

        .navbar a:hover {
          background-color: #cf2533;
          color: white;
        }

        .navbar a.active {
          background-color: #cf2533;
          color: white;
        }

        .navbar .icon {
          display: none;
          font-size: 20px;
          font-weight: bold;
          color: #333;
        }

        .mobile-label {
          display: none;
          float: left;
          padding: 14px 16px;
          font-size: 17px;
          color: black;
          font-weight: normal;
        }

        @media screen and (max-width: 768px) {
          .mobile-label {
            display: block;
          }

          .navbar a:not(:first-child) {
            display: none;
          }

          .navbar a.icon {
            float: right;
            display: block;
            padding: 14px 16px;
            font-size: 20px;
            cursor: pointer;
          }
        }

        @media screen and (max-width: 768px) {
          .navbar.responsive {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 9999;
            overflow: visible;
          }
          .navbar.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
            padding: 14px 16px;
          }
          .navbar.responsive a {
            float: none;
            display: block !important;
            text-align: left;
            padding: 14px 16px;
            border-bottom: 1px solid #f0f0f0;
            width: 100%;
            box-sizing: border-box;
          }
          .navbar.responsive a:last-child {
            border-bottom: none;
          }
          .navbar.responsive .mobile-label {
            display: none;
          }
        }
      `}</style>

      <nav className={`navbar ${isMenuOpen ? 'responsive' : ''}`}>
        <span className="mobile-label">{getSectionDisplayName()}</span>
        <a href="/" onClick={handleHomeClick}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Our Team</a>
        <a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}>Events</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        <a href="#" onClick={handleJoinClick}>Join</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleMobileMenu} style={{fontSize: '20px', fontWeight: 'bold'}}>
          ☰
        </a>
      </nav>
    </>
  );
}
