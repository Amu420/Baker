import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuse the same styles for form

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
     const response = await fetch("/api/signup", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ username, email, password, mobilenumber }),
     });

      const data = await response.json();

      if (response.ok) {
        alert("✅ " + data.message);
        // redirect to login page after successful signup
        navigate("/");
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSignup} className="login-form">
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobilenumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
