import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body, html {
          margin: 0;
          padding: 0;
          font-family: "Playfair Display", Georgia, serif;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: #ffffff;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }

        ul li { float: left; }
        ul li a {
          display: block;
          color: black;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        ul li a:hover {
          background-color: #cf2533;
          color: white;
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
        }

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
          padding: 10px 25px;
          color: black;
          background-color: #ddd;
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
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#team">Our Team</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="Contact"></a></li>
          <li><a onClick={() => navigate("/join")}>Join</a></li>
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

<footer
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

  {/* Instagram Section */}
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
