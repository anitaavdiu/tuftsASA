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
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('/dua-alb.jpeg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          margin-top: 60px;
        }

        .herotext {
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          padding: 0 20px;
        }

        .herotext h1 {
          font-size: 2.8rem;
        }

        .herotext button {
          border: none;
          padding: 12px 30px;
          color: black;
          background-color: #ddd;
          cursor: pointer;
          font-size: 1rem;
          border-radius: 5px;
          margin-top: 15px;
        }

        .herotext button:hover {
          background-color: #cf2533;
          color: white;
        }

        @media (max-width: 768px) {
          .heroimage {
            height: 80vh;
            background-size: contain;
            background-position: top;
          }
          .herotext h1 {
            font-size: 1.8rem;
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

      <section
        id="about"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "50px",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "18px" }}>About Us</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "35px", color: "#222" }}>
            The Albanian Student Association was founded to create a welcoming space
            for students from Albania, Kosovo, the wider diaspora, as well as
            anyone curious about our rich culture.
            <br /><br />
            Albanians are known for our deep pride, patriotism, and hospitality, which are
            values shaped by a long history of resilience and perseverance. ASA gives
            that pride a space to be shared, celebrated, and kept alive together.
          </p>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "18px" }}>Our Mission</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#222" }}>
            We strive to create a place that feels like home far from home for Albanian
            students at Tufts. We aim to build a tight-knit community through cultural
            celebrations, workshops, and gatherings.
          </p>
        </div>

        <div style={{ flex: 1, textAlign: "center", minWidth: "280px" }}>
          <img
            src="/logo.jpg"
            alt="ASA Logo"
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "8px",
              boxShadow: "0 5px 18px rgba(0,0,0,0.12)",
            }}
          />
        </div>
      </section>

      <section id="team">
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <div className="card-container">
          <div className="card">
            <img src="/anita1.jpeg" alt="Person 1" />
            <div className="card-content">
              <h4>Anita Avdiu</h4>
            </div>
          </div>
          <div className="card">
            <img src="/jessica.jpeg" alt="Person 2" />
            <div className="card-content">
              <h4>Jessica Berberi</h4>
            </div>
          </div>
          <div className="card">
            <img src="/Emma1.JPG" alt="Person 3" />
            <div className="card-content">
              <h4>Emma Ademaj</h4>
            </div>
          </div>
          <div className="card">
            <img src="/alma.jpeg" alt="Person 4" />
            <div className="card-content">
              <h4>Alma Alla</h4>
            </div>
          </div>
        </div>
      </section>

      <section id="events" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "40px" }}>Upcoming Events</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <div style={{
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "white",
          }}>
            <img src="/GIM.JPG" alt="General Interest Meeting" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>General Interest Meeting</h3>
              <p style={{ color: "#333" }}>
                Get to know us and what to expect looking forward!
                Oct 10 6pm @Campus Center 207
              </p>
            </div>
          </div>

          <div style={{
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "white",
          }}>
            <img src="/mixer.jpeg" alt="Boston Mixer" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>Boston Mixer</h3>
              <p style={{ color: "#333" }}>
                Mixer with Albanian Student Orgs all around Boston.
                Oct 18, 7pm @ BU campus - George Sherman Union B03A
              </p>
            </div>
          </div>

          <div style={{
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
            backgroundColor: "white",
          }}>
            <img src="/shqiperia.png" alt="Independence Day" style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>Independence Day</h3>
              <p style={{ color: "#333" }}>
                Celebration for Albania's Independence Day.
                Date TBD.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" style={{
        backgroundColor: "#fff6f8",
        padding: "60px 20px",
        textAlign: "center",
        marginTop: "100px",
        borderTop: "1px solid #ddd",
        fontFamily: "'Playfair Display', serif",
      }}>
        <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#222" }}>Contact Us</h3>
        <p style={{
          fontSize: "1rem",
          marginBottom: "25px",
          color: "#333",
          lineHeight: "1.6",
        }}>
          Have questions, event ideas, or want to collaborate?<br />
          Reach out to us anytime at{" "}
          <a href="mailto:albassoc.tufts@gmail.com" style={{
            color: "#cf2533",
            textDecoration: "none",
            fontWeight: "bold",
          }}>
            albassoc.tufts@gmail.com
          </a>
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="https://instagram.com/asa.tufts" target="_blank" rel="noopener noreferrer" style={{
            color: "#cf2533",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}>
            Instagram: @asa.tufts
          </a>
        </div>

        <p style={{ fontSize: "0.9rem", color: "#777", marginTop: "45px" }}>
          © {new Date().getFullYear()} Tufts Albanian Student Association. All rights reserved.
        </p>
      </footer>
    </>
  );
}
