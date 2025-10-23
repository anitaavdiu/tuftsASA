import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";

import duaAlb from "../assets/dua-alb.jpeg";
import jumbo from "../assets/jumbo.jpeg";
import logo from "../assets/logo.jpg";
import anita from "../assets/anita.jpeg";
import jessica from "../assets/jessica.jpeg";
import emma from "../assets/emma.jpeg";
import alma from "../assets/alma.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="heroimage" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${duaAlb})`
      }}>
        <div className="herotext">
          <h1>Welcome to Tufts ASA!</h1>
          <button onClick={() => window.location.href = "/join"}>Become a Member</button>
        </div>
      </div>

      {/* About Section */}
      <section id="about">
        <article>
          <h2>About Us</h2>
          <p>
            The Albanian Student Association at Tufts University was founded 
            to create a welcoming space for students from Albania, Kosovo, and the wider diaspora — 
            as well as anyone curious about our culture. Albanian is one of Europe’s oldest and most 
            distinct languages, and this uniqueness often leaves Albanian students without a 
            cultural home on campus. Our organization fills this gap by bringing students together 
            to celebrate their traditions, language, and history while fostering pride in our shared heritage.
          </p>
        </article>
        <aside>
          <img src={logo} alt="ASA Logo" />
        </aside>
      </section>

      {/* Mission Section */}
      <section id="mission" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${jumbo})`
      }}>
        <div>
          <h2>Our Mission</h2>
          <p>
            We strive to create a place that feels like home far from home for Albanian students at Tufts. 
            We aim to build a tight-knit community through cultural celebrations, workshops, and gatherings, 
            while also welcoming all students who wish to learn more about Albanian traditions. 
            In doing so, we not only strengthen our own community but also enrich the diversity of Tufts as a whole.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team">
        <h2>Our Team</h2>
        <div className="card-container">
          <div className="card">
            <img src={anita} alt="Anita Avdiu" />
            <div className="card-content">
              <h4><b>Anita Avdiu</b></h4>
              <p>President</p>
            </div>
          </div>
          <div className="card">
            <img src={jessica} alt="Jessica Berberi" />
            <div className="card-content">
              <h4><b>Jessica Berberi</b></h4>
              <p>Vice President</p>
            </div>
          </div>
          <div className="card">
            <img src={emma} alt="Emma Ademaj" />
            <div className="card-content">
              <h4><b>Emma Ademaj</b></h4>
              <p>Secretary</p>
            </div>
          </div>
          <div className="card">
            <img src={alma} alt="Alma Alla" />
            <div className="card-content">
              <h4><b>Alma Alla</b></h4>
              <p>Treasurer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events">
        <h2>Upcoming Events</h2>
        <div className="event-container">
          <div className="event-card">
            <h3>General Interest Meeting</h3>
            <p>Get to know us and what to expect looking forward!</p>
          </div>
          <div className="event-card">
            <h3>Boston Mixer</h3>
            <p>Mixer with Albanian Student Orgs all around Boston</p>
          </div>
          <div className="event-card">
            <h3>Independence Day</h3>
            <p>Celebration for Albania's Independence Day</p>
          </div>
        </div>
      </section>
    </>
  );
}
