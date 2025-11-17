import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext); // update currentUser
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // --- Handle Login ---
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,},
         { headers: { "Content-Type": "application/json" } }
       
    );

      // If login successful
      if (res.data.user && res.data.user.role) {
        loginUser(res.data.user); // update AuthContext

        // Navigate based on role
        if (res.data.user.role === "patient") navigate("/patient");
        else if (res.data.user.role === "doctor") navigate("/doctor");
        else navigate("/"); // fallback
      } else {
        alert(res.data.error || "Login failed");
      }
    } catch (err) {
      console.error(err);
     // Axios throws error for non-2xx status codes
    if (err.response && err.response.data && err.response.data.error) {
      alert(err.response.data.error); // shows "Invalid email or password"
    } else {
      alert("Login failed. Could not reach server.");
    }
    }
  };

  // --- Styles (same as your previous code) ---
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #e0f2f1 50%, #ffffff 50%)",
    padding: "1rem",
    fontFamily: "'Poppins', sans-serif",
  };
  const cardStyle = {
    maxWidth: "1200px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
  };
  const leftPanelStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    backgroundColor: "rgba(139, 228, 190, 0.2)",
  };
  const rightPanelStyle = { padding: "3rem" };
  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    marginBottom: "1rem",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    fontSize: "1rem",
  };
  const buttonStyle = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "10px",
    backgroundColor: "#3D9970",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s ease-in-out",
  };
  const hoverButtonStyle = { backgroundColor: "#36a66c", transform: "scale(1.03)" };
  const headingStyle = { fontSize: "2rem", fontWeight: "700", marginBottom: "0.5rem" };
  const textStyle = { marginBottom: "2rem", color: "#4b5563" };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Left Panel */}
        <div style={leftPanelStyle}>
          <h1 style={{ ...headingStyle, color: "#3D9970", marginTop: "2rem" }}>
            Oculis AI Platform
          </h1>
          <p style={textStyle}>Advanced Retinal Analysis for Early Disease Detection.</p>
        </div>

        {/* Right Panel */}
        <div style={rightPanelStyle}>
          <h2 style={headingStyle}>Welcome Back</h2>
          <p style={textStyle}>Please enter your details to sign in.</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => Object.assign(e.target.style, hoverButtonStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
