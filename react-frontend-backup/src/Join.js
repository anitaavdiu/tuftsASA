import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    const x = document.getElementById("myTopnav");
    const opening = x.className === "topnav";
    if (opening) {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    setIsMenuOpen(opening);
  };

  const closeMobileMenu = () => {
    const x = document.getElementById("myTopnav");
    x.className = "topnav";
    setIsMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    closeMobileMenu();
  };

  const handleJoinClick = () => {
    navigate("/join");
    closeMobileMenu();
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://tuftsasa.onrender.com/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
      } else {
        alert("Error: " + result.message);
      }
    } catch (err) {
      console.error("Request failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <style>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          font-family: "Playfair Display", Georgia, serif;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('/tirana.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        * {
          box-sizing: border-box;
        }

        /* Navbar */
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

        /* Form container */
        .container {
          padding: 16px;
          background-color: white;
          max-width: 400px;
          margin: 140px auto 60px auto;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        input[type=text], input[type=number], input {
          width: 100%;
          padding: 15px;
          margin: 5px 0 22px 0;
          display: inline-block;
          border: none;
          background: #f1f1f1;
          border-radius: 6px;
        }

        input[type=text]:focus, input[type=number]:focus {
          background-color: #ddd;
          outline: none;
        }

        hr {
          border: 1px solid #f1f1f1;
          margin-bottom: 25px;
        }

        .registerbtn {
          background-color: #cf2533;
          color: white;
          padding: 16px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          opacity: 0.9;
          font-size: 1rem;
        }

        .registerbtn:hover {
          opacity: 1;
          background-color: #b21f28;
        }

        #successBox {
          display: none;
          max-width: 500px;
          background: #f8f8f8;
          border-radius: 12px;
          padding: 30px;
          text-align: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        #successBox h2 {
          color: #cf2533;
        }

        #successBox button {
          background-color: #cf2533;
          color: white;
          padding: 10px 20px;
          margin-top: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        #successBox button:hover {
          background-color: #a71f25;
        }
      `}</style>

      {(() => {
        const menuClass = isMenuOpen ? 'topnav responsive' : 'topnav';
        return (
          <div className={menuClass} id="myTopnav">
            <span className="label">Join</span>
            <a href="/" onClick={handleHomeClick}>Home</a>
            <a href="/#about" onClick={(e) => { e.preventDefault(); navigate("/"); closeMobileMenu(); }}>About</a>
            <a href="/#team" onClick={(e) => { e.preventDefault(); navigate("/"); closeMobileMenu(); }}>Our Team</a>
            <a href="/#events" onClick={(e) => { e.preventDefault(); navigate("/"); closeMobileMenu(); }}>Events</a>
            <a href="/#contact" onClick={(e) => { e.preventDefault(); navigate("/"); closeMobileMenu(); }}>Contact</a>
            <a href="#" onClick={handleJoinClick} className="active">Join</a>
            <a href="javascript:void(0);" className="icon" onClick={toggleMobileMenu} style={{fontSize: '20px', fontWeight: 'bold'}}>
              ☰
            </a>
          </div>
        );
      })()}

      {}
      {!success ? (
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to join Tufts ASA.</p>
            <hr />

            <label htmlFor="name"><b>Full Name</b></label>
            <input
              type="text"
              placeholder="Enter your full name"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email"><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="year"><b>Graduation Year</b></label>
            <input
              type="number"
              placeholder="e.g. 2027"
              name="year"
              id="gradYear"
              min="2025"
              max="2030"
              value={formData.year}
              onChange={handleChange}
              required
            />

            <hr />
            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>

            <button type="submit" className="registerbtn">Register</button>
          </div>
        </form>
      ) : (
        <div id="successBox" style={{ display: "block" }}>
          <h2>Registration Successful!</h2>
          <p>
            Welcome to Tufts ASA — we’re so excited to have you join us! 🇦🇱🇽🇰
          </p>
          <button onClick={() => (window.location.href = "/")}>
            Back to Homepage
          </button>
        </div>
      )}
    </>
  );
}
