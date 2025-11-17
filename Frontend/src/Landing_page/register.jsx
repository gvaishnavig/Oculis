import React ,{useState}from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const Register = () => {

   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        name,
        email,
        password,
        role
      });

      console.log("Response:", res);

      if (res.status === 201) {
      alert("Registration Successful!");
       registerUser();  
      
      navigate("/")
    } else {
      alert(res.data.message || "Something went wrong");
    }

  } catch (err) {
    console.error("error: ", err);

    if (!err.response) {
      alert("No response from backend");
      return;
    }
      alert(err.response.data.message || "Registration failed");
    }
  };
  

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

  const rightPanelStyle = {
    padding: "3rem",
  };

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

  const hoverButtonStyle = {
    backgroundColor: "#36a66c",
    transform: "scale(1.03)",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
  };

  const textStyle = {
    marginBottom: "2rem",
    color: "#4b5563",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Left Panel */}
        <div style={leftPanelStyle}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV6DhQByv5HEPKzUo3kN3O3hQSYqpQlLd79DjrbiYJw1kASnlVMpGdmD75MPo9IsRbcUJ3mNUxxqJ2jwNDWqOPhAqHbNDk4eMzS6KCzG0FGTwFWnSnKG0gP-q1bI0DRql6vDLSlTpHbNe_oRcBIUx9kzmSUv35lHKgJWAAruf7cFaXa43C1cJ1ydKz9fuI6am_EqQ_8OQsBYsHxki-gFJmtENBZURo00cTUPdCl4OrXom96KxbcnBMpUQ0ftc7Ku3pRC68YUQXg2Vg"
            alt="Oculis Logo"
            style={{ height: "80px", marginBottom: "2rem" }}
          />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeI0KVlwsD0VKkqbDuVJJxVbk3ch5HDfbByjrad-gYafOHhAgKiGR414rek0WOghPndNWbPVY4kjH5lOhfHr46qhpowz0qlrLTl4STKfEwYCaZGVycwBRqwXFH-b-XIc8GmVWwJaFxOqf2DTA9VtiJzRP1OjiDmBZL37r529poX9e2Qwc0y2kmO7W-k5JIhIvnARrXfACwPtsmgA7DjSBmCKJiF_buNnYtqUKNe-IDuWWY_-sGVXzUYY-uZVo53N-TCHkD1LDPRv0y"
            alt="Abstract retina illustration"
            style={{ maxWidth: "300px", width: "100%", marginBottom: "2rem" }}
          />
          <h1 style={{ ...headingStyle, color: "#3D9970", marginTop: "2rem" }}>
            Oculis AI Platform
          </h1>
          <p style={textStyle}>
            Advanced Retinal Analysis for Early Disease Detection.
          </p>
        </div>

        {/* Right Panel - Register Form */}
        <div style={rightPanelStyle}>
          <h2 style={headingStyle}>Create an Account</h2>
          <p style={textStyle}>Join Oculis to start analyzing your scans.</p>
          <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Full Name"
    style={inputStyle}
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <input
    type="email"
    placeholder="Email"
    style={inputStyle}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="password"
    placeholder="Password"
    style={inputStyle}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <input
  type="password"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  style={inputStyle}
/>

  <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  style={inputStyle}
>
  <option value="choose"></option>
  <option value="patient">Patient</option>
  <option value="doctor">Doctor</option>
  <option value="admin">Admin</option>
</select>

  <button
    type="submit"
    style={buttonStyle}
    onMouseOver={(e) => Object.assign(e.target.style, hoverButtonStyle)}
    onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
  >
    Register
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default Register;
