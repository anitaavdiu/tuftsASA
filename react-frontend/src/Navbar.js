import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a
          href="/"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            closeMenu();
          }}
        >
          Tufts ASA
        </a>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
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
          <li>
            <a
              href="#"
              onClick={() => {
                navigate("/join");
                closeMenu();
              }}
            >
              Join
            </a>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}