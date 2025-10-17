import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  // Use React state to manage the responsive menu class
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(prev => !prev);
  };

  const handleNavLinkClick = (path, e) => {
    e.preventDefault(); // Prevent default link behavior

    // Close the menu if it's responsive (mobile)
    if (isResponsive) {
      setIsResponsive(false);
    }

    // Handle internal navigation (scroll to section)
    if (path.startsWith("#")) {
      requestAnimationFrame(() => {
        const target = document.querySelector(path);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    } else {
      // Handle navigation via react-router
      navigate(path);
    }
  };

  return (
    <>
      <style>{`
        /* Global Styles */
        body, html {
          margin: 0;
          padding: 0;
          font-family: "Playfair Display", Georgia, serif;
        }

        /* --- NAVIGATION STYLES --- */

        .topnav {
          overflow: hidden;
          background-color: #ffffff;
          border-bottom: 1px solid #ddd;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        /* Use flexbox for better alignment on desktop */
        .topnav-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-height: 50px;
        }

        .topnav a {
          display: block;
          color: black;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
          font-size: 17px;
          float: left; /* Keep float for general horizontal flow on desktop */
        }

        .topnav a:hover {
          background-color: #cf2533;
          color: white;
        }

        .topnav a.active {
          background-color: #cf2533;
          color: white;
        }

        /* The icon link needs to be pushed to the right on desktop and in the closed mobile state */
        .topnav a.icon {
          display: none;
          float: right; /* Use float:right to push it to the far right */
        }

        /* --- MEDIA QUERY: MOBILE VIEW (<= 768px) --- */
        @media screen and (max-width: 768px) {
          /* Hide all links except Home and the Icon */
          .topnav a:not(:first-child):not(.icon) {
            display: none;
          }
          
          /* Show the hamburger icon and float it right */
          .topnav a.icon {
            display: block;
          }

          /* --- OPEN STATE (.responsive) --- */
          .topnav.responsive {
            position: relative;
            /* This is the fix for content collapsing */
            height: auto; 
            overflow: visible; 
            display: block; 
          }

          /* Position the icon absolutely in the top right of the expanded menu */
          .topnav.responsive a.icon {
            position: absolute;
            right: 0;
            top: 0;
            margin: 0;
            padding: 14px 16px;
            float: none; /* Clear float */
          }
          
          /* Ensure all links stack vertically when responsive class is active */
          .topnav.responsive a {
            float: none;
            display: block;
            text-align: left;
            width: 100%; /* Crucial: Ensures links take up full width and forces container expansion */
            box-sizing: border-box; /* Crucial: Prevents padding from breaking 100% width and causing overflow */
          }
          
          /* Crucial: Add right padding to Home link to prevent text collision with the absolute icon */
          .topnav.responsive a:first-child {
            padding-right: 60px; 
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

     {/* Apply the responsive class based on React State */}
     <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        {/* Note: I've added active class to the Home link for visual consistency */}
        <a href="/" className="active" onClick={(e) => handleNavLinkClick("/", e)}>Home</a>
        <a href="#about" onClick={(e) => handleNavLinkClick("#about", e)}>About</a>
        <a href="#team" onClick={(e) => handleNavLinkClick("#team", e)}>Our Team</a>
        <a href="#events" onClick={(e) => handleNavLinkClick("#events", e)}>Events</a>
        <a href="#contact" onClick={(e) => handleNavLinkClick("#contact", e)}>Contact</a>
        <a href="/join" onClick={(e) => handleNavLinkClick("/join", e)}>Join</a>
        
        {/* The icon now triggers the React state change */}
        <a href="#" className="icon" onClick={(e) => { e.preventDefault(); toggleResponsive(); }}>
        &#9776;
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
            onError="this.onerror=null; this.src='https://placehold.co/520x350/E0E0E0/333333?text=Logo+Placeholder'"
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
            <img src="/anita3.jpg" alt="Person 1" onError="this.onerror=null; this.src='https://placehold.co/250x200/cf2533/ffffff?text=Anita'" />
            <div className="card-content">
              <h4>Anita Avdiu</h4>
            </div>
          </div>
          <div className="card">
            <img src="/jessica.jpeg" alt="Person 2" onError="this.onerror=null; this.src='https://placehold.co/250x200/cf2533/ffffff?text=Jessica'" />
            <div className="card-content">
              <h4>Jessica Berberi</h4>
            </div>
          </div>
          <div className="card">
            <img src="/Emma1.JPG" alt="Person 3" onError="this.onerror=null; this.src='https://placehold.co/250x200/cf2533/ffffff?text=Emma'" />
            <div className="card-content">
              <h4>Emma Ademaj</h4>
            </div>
          </div>
          <div className="card">
            <img src="/alma.jpeg" alt="Person 4" onError="this.onerror=null; this.src='https://placehold.co/250x200/cf2533/ffffff?text=Alma'" />
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
              onError="this.onerror=null; this.src='https://placehold.co/300x180/E0E0E0/333333?text=GIM+Event'"
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
              onError="this.onerror=null; this.src='https://placehold.co/300x180/E0E0E0/333333?text=Mixer+Event'"
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
              onError="this.onerror=null; this.src='https://placehold.co/300x180/E0E0E0/333333?text=Independence+Day'"
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

        {/* Instagram Link */}
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
