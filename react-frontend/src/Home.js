import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  // State to toggle the 'responsive' class for the mobile menu
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(prev => !prev);
  };

  const handleNavLinkClick = (path) => {
    // Close the menu if it's responsive (mobile)
    if (isResponsive) {
      setIsResponsive(false);
    }

    // Handle internal navigation (scroll to section or react-router)
    if (path.startsWith("#")) {
      // Use requestAnimationFrame to ensure the class change finishes before scrolling
      requestAnimationFrame(() => {
        document.querySelector(path).scrollIntoView({ behavior: 'smooth' });
      });
    } else if (path === "/join") {
      navigate("/join");
    } else if (path === "/") {
      navigate("/");
    }
  };

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: "Playfair Display", Georgia, serif;
        }

        /* --- NAVIGATION STYLES (W3Schools Style) --- */

        .navbar {
          background-color: #ffffff;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        /* Main Navigation List - Acts as the topnav container */
        .desktop-nav {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          display: flex; /* Default: horizontal layout for desktop/mobile closed */
          justify-content: flex-start;
          align-items: center; /* FIX 1: Vertically align Home link and Icon */
        }

        /* Desktop Link Styling */
        .desktop-nav li { 
          /* Ensures list items are part of the flex layout */
        }
        
        .desktop-nav li a {
          display: block;
          color: black;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        .desktop-nav li a:hover {
          background-color: #cf2533;
          color: white;
        }

        /* Hamburger Icon Styling (Hidden by default on desktop) */
        .desktop-nav .icon {
            display: none;
            cursor: pointer;
            margin-left: auto; /* Pushes the icon to the right */
        }
        
        .desktop-nav .icon a {
            font-size: 20px;
            font-weight: bold;
        }


        /* --- MEDIA QUERY: MOBILE VIEW (<= 768px) --- */
        @media screen and (max-width: 768px) {
          
          /* Hide all links except the first one (Home) and the icon */
          .desktop-nav li:not(:first-child):not(.icon) {
            display: none;
          }
          
          /* Show the hamburger icon */
          .desktop-nav .icon {
            display: block;
          }
        }

        /* --- MEDIA QUERY: RESPONSIVE STATE (Menu Open on Mobile) --- */
        @media screen and (max-width: 768px) {
          .desktop-nav.responsive {
            position: relative;
            display: block; /* Allows vertical stacking of dropdown items */
            padding-bottom: 5px; 
          }

          .desktop-nav.responsive .icon {
            position: absolute;
            right: 0;
            top: 0;
            padding: 14px 16px; /* Match link padding */
          }
          
          /* FIX 2: Add extra right padding to Home link in the open state 
             to prevent text from clashing with the absolute icon. */
          .desktop-nav.responsive li:first-child a {
              padding-right: 60px; 
          }
          
          /* Show all links vertically when 'responsive' class is active */
          .desktop-nav.responsive li,
          .desktop-nav.responsive li:not(:first-child):not(.icon) {
            display: block;
            text-align: left;
            width: 100%;
          }

          /* Ensure the first child (Home) is also full width */
          .desktop-nav.responsive li:first-child {
            width: 100%;
          }
        }
        /* --- END NAVIGATION STYLES --- */


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

      <nav className="navbar">
        {/* The main UL now holds all links and uses the correct classes */}
        <ul className={`desktop-nav ${isResponsive ? 'responsive' : ''}`}>
          
          {/* 1. Home Link (Always visible on all screen sizes) */}
          <li><a href="/" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/'); }}>Home</a></li>
          
          {/* 2. Hidden Links (Shown on desktop, hidden on mobile until toggled) */}
          <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#about'); }}>About</a></li>
          <li><a href="#team" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#team'); }}>Our Team</a></li>
          <li><a href="#events" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#events'); }}>Events</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#contact'); }}>Contact</a></li>
          <li><a onClick={() => handleNavLinkClick('/join')}>Join</a></li>
          
          {/* 3. Hamburger Icon (Visible only on mobile, triggers the menu toggle) */}
          <li className="icon">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleResponsive(); }}>
              &#9776; {/* Unicode for hamburger icon */}
            </a>
          </li>
        </ul>
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
}
