import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const toggleMobileMenu = () => {
    const x = document.getElementById("myTopnav");
    console.log("Current class:", x.className);
    if (x.className === "topnav") {
      x.className += " responsive";
      console.log("Opening menu, new class:", x.className);
    } else {
      x.className = "topnav";
      console.log("Closing menu, new class:", x.className);
    }
  };

  const closeMobileMenu = () => {
    const x = document.getElementById("myTopnav");
    x.className = "topnav";
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

  // Add scroll listener to detect current section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'team', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

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

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: "Playfair Display", Georgia, serif;
          scroll-behavior: smooth;
        }

        .topnav {
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

        .topnav a {
          float: left;
          display: block;
          color: black;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
        }

        .topnav a:hover {
          background-color: #cf2533;
          color: white;
        }

        .topnav a.active {
          background-color: #cf2533;
          color: white;
        }

        .topnav .icon {
          display: none;
          font-size: 20px;
          font-weight: bold;
          color: #333;
        }

        @media screen and (max-width: 768px) {
          .topnav a:not(:first-child) {display: none;}
          .topnav a.icon {
            float: right;
            display: block;
            padding: 14px 16px;
            font-size: 20px;
            cursor: pointer;
          }
        }

        @media screen and (max-width: 768px) {
          .topnav.responsive {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            z-index: 9999;
            overflow: visible;
          }
          .topnav.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
            padding: 14px 16px;
          }
          .topnav.responsive a {
            float: none;
            display: block !important;
            text-align: left;
            padding: 14px 16px;
            border-bottom: 1px solid #f0f0f0;
            width: 100%;
            box-sizing: border-box;
          }
          .topnav.responsive a:last-child {
            border-bottom: none;
          }
        }




        /* --- HERO SECTION STYLES (Height and Position Fixed) --- */
        .heroimage {
          width: 100%;
          height: 70vh; /* Increased height for better visibility */
          min-height: 450px; 
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/dua-alb.jpeg');
          background-size: cover;
          background-position: center top; /* Prioritizes the top content (her face) */
          background-repeat: no-repeat; 
        }

        /* Mobile-specific positioning for better face visibility */
        @media screen and (max-width: 768px) {
          .heroimage {
            background-position: 30% top; /* Show more of the left side (Dua's face) */
            background-size: cover;
          }
        }

        @media screen and (max-width: 480px) {
          .heroimage {
            background-position: 25% top; /* Even more left positioning for small screens */
          }
        }
        /* --- END HERO SECTION STYLES --- */


        .herotext {
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
        }

        .herotext button {
          border: none;
          outline: 0;
          display: inline-block;
          padding: 10px 25px;
          color: black;
          background-color: #ddd;
          text-align: center;
          cursor: pointer;
        }

        .herotext button:hover {
          background-color: #cf2533;
          color: white;
        }

        #about, #mission, #team, #events {
          max-width: 1100px;
          margin: 0 auto;
          padding: 80px 20px;
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
      `}</style>

     <div className="topnav" id="myTopnav">
        <a href="/" onClick={handleHomeClick} className={activeSection === '' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }} className={activeSection === 'team' ? 'active' : ''}>Our Team</a>
        <a href="#events" onClick={(e) => { e.preventDefault(); scrollToSection('events'); }} className={activeSection === 'events' ? 'active' : ''}>Events</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        <a href="#" onClick={handleJoinClick}>Join</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleMobileMenu} style={{fontSize: '20px', fontWeight: 'bold'}}>
          ☰
        </a>
      </div>


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
            <img src="/anita3.jpg" alt="Person 1" />
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
    <div
      style={{
        width: "300px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <img
        src="/GIM.JPG"
        alt="General Interest Meeting"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>General Interest Meeting</h3>
        <p style={{ color: "#333" }}>
          Get to know us and what to expect looking forward!
          Oct 10 6pm @Campus Center 207
        </p>
      </div>
    </div>

    <div
      style={{
        width: "300px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <img
        src="/mixer.jpeg"
        alt="Boston Mixer"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>Boston Mixer</h3>
        <p style={{ color: "#333" }}>
          Mixer with Albanian Student Orgs all around Boston.
          Oct 18, 7pm @ BU campus - George Sherman Union B03A
        </p>
      </div>
    </div>

    <div
      style={{
        width: "300px",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <img
        src="/shqiperia.png"
        alt="Independence Day"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
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

<footer id="contact"
  style={{
    backgroundColor: "#fff6f8",
    padding: "60px 20px",
    textAlign: "center",
    marginTop: "100px",
    borderTop: "1px solid #ddd",
    fontFamily: "'Playfair Display', serif",
  }}
>
  <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "#222" }}>
    Contact Us
  </h3>

  <p
    style={{
      fontSize: "1rem",
      marginBottom: "25px",
      color: "#333",
      lineHeight: "1.6",
    }}
  >
    Have questions, event ideas, or want to collaborate?<br />
    Reach out to us anytime at{" "}
    <a
      href="mailto:albassoc.tufts@gmail.com"
      style={{
        color: "#cf2533",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      albassoc.tufts@gmail.com
    </a>
  </p>

  {}
  <div style={{ marginTop: "20px" }}>
    <a
      href="https://instagram.com/asa.tufts"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#cf2533",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.1rem",
      }}
    >
      Instagram: @asa.tufts
    </a>
  </div>

  <p style={{ fontSize: "0.9rem", color: "#777", marginTop: "45px" }}>
    © {new Date().getFullYear()} Tufts Albanian Student Association. All rights reserved.
  </p>
</footer>
    </>
  );
};