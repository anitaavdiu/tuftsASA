import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: "Playfair Display", Georgia, serif;
          scroll-behavior: smooth;
        }

        .navbar {
          background-color: #ffffff;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto;
          padding: 10px 20px;
        }

        .logo {
          font-weight: bold;
          font-size: 1.2rem;
          color: #cf2533;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 16px;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          display: block;
          color: black;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 5px;
        }

        .nav-links li a:hover {
          background-color: #cf2533;
          color: white;
          transition: 0.3s;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.8rem;
          color: #cf2533;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: white;
            text-align: center;
            display: none;
            padding: 20px 0;
            border-top: 1px solid #ddd;
          }

          .nav-links.open {
            display: flex;
          }

          .menu-toggle {
            display: block;
          }
        }

        .heroimage {
          height: 100vh;
          width: 100%;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('/dua-alb.jpeg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          margin-top: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .herotext {
          color: white;
          text-align: center;
          padding: 0 20px;
        }

        .herotext h1 {
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          margin-bottom: 20px;
        }

        .herotext button {
          border: none;
          padding: 12px 30px;
          color: black;
          background-color: #ddd;
          cursor: pointer;
          font-size: 1rem;
          border-radius: 5px;
        }

        .herotext button:hover {
          background-color: #cf2533;
          color: white;
        }

        @media (max-width: 480px) {
          .heroimage {
            height: 90vh;
            background-position: top center;
          }

          .herotext h1 {
            font-size: 1.7rem;
          }

          .herotext button {
            font-size: 0.9rem;
            padding: 10px 22px;
          }
        }

        #about, #mission, #team, #events {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        @media (max-width: 768px) {
          #about {
            display: flex;
            flex-direction: column;
            text-align: center;
          }

          #about img {
            max-width: 100%;
            margin-top: 20px;
          }
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .card {
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          width: 250px;
          transition: 0.3s;
          border-radius: 8px;
          overflow: hidden;
          background-color: white;
        }

        .card:hover {
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }

        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-content {
          padding: 15px;
          text-align: center;
        }

        footer {
          background-color: #fff6f8;
          padding: 60px 20px;
          text-align: center;
          margin-top: 100px;
          border-top: 1px solid #ddd;
          font-family: 'Playfair Display', serif;
        }

        @media (max-width: 768px) {
          footer {
            padding: 40px 20px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">Tufts ASA</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="/">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#team" onClick={() => setMenuOpen(false)}>Our Team</a></li>
            <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li><a onClick={() => { setMenuOpen(false); navigate("/join"); }}>Join</a></li>
          </ul>
        </div>
      </nav>

      <div className="heroimage">
        <div className="herotext">
          <h1>Welcome to Tufts ASA!</h1>
          <button onClick={() => navigate("/join")}>Become a Member</button>
        </div>
      </div>
    </>
  );
}
