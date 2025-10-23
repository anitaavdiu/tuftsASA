import React, { useState } from "react";
import "./Navbar.css";
// IMPORT NavLink HERE
import { useNavigate, NavLink } from "react-router-dom"; 

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Use NavLink for the logo to highlight it on the root path ("/") */}
        <NavLink
          to="/" // Changed href to to
          className="nav-logo"
          onClick={closeMenu}
          // The 'end' prop ensures it only highlights when the path is exactly "/"
          end 
        >
          Tufts ASA
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* NOTE: The scroll-to-section links below should remain <a> tags 
            because they don't navigate to a new route, they just scroll 
            on the current page. We can't use NavLink for these. 
          */}
          
          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              About
            </a>
          </li>
          {/* ... other scroll links ... */}
          <li>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#team")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#events")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                closeMenu();
              }}
            >
              Contact
            </a>
          </li>
          
          {/* Use NavLink for "Join" since it navigates to a new route */}
          <li>
            <NavLink
              to="/join" // Changed href to to
              onClick={closeMenu}
            >
              Join
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};