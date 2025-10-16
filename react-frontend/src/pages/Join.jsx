import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import tiranaBg from "../assets/tirana.jpg";

function Join() {
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const year = e.target.gradYear.value;

    try {
      const response = await fetch("https://tuftsasa.onrender.com/api/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, year }),
      });
      const result = await response.json();
      if (result.success) setSuccess(true);
      else alert("Error: " + result.message);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${tiranaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div>
        {!success ? (
          <form id="registerForm" onSubmit={handleSubmit}>
            <div className="container">
              <h1>Register</h1>
              <p>Please fill in this form to join Tufts ASA.</p>
              <hr />
              <label><b>Full Name</b></label>
              <input type="text" name="name" placeholder="Enter your full name" required />
              <label><b>Email</b></label>
              <input type="text" name="email" placeholder="Enter Email" required />
              <label><b>Graduation Year</b></label>
              <input type="number" name="gradYear" placeholder="e.g. 2027" min="2025" max="2030" required />
              <hr />
              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
              <button type="submit" className="registerbtn">Register</button>
            </div>
          </form>
        ) : (
          <div id="successBox">
            <h2>Registration Successful!</h2>
            <p>Welcome to Tufts ASA — we’re so excited to have you join us! 🇦🇱🇽🇰</p>
            <button onClick={() => window.location.href = "/"}>Back to Homepage</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Join;
