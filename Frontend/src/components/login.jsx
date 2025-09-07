import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", { // use Vite proxy
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ " + data.message);
        // Redirect to dashboard or home after login
        setTimeout(() => {
          navigate("/dashboard"); // change route as needed
        }, 1000);
      } else {
        setMessage("❌ " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

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

        <button type="submit">Login</button>

        {/* Sign Up button */}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="signup-btn"
        >
          Sign Up
        </button>

        {/* Show message */}
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
