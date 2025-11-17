import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  const styles = {
    navbar: {
      backgroundColor: "#2A9D8F",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      position: "sticky",
      top: 0,
      zIndex: 50,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    navLinks: {
      display: "flex",
      gap: "1.5rem",
      alignItems: "center",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: 500,
      fontSize: "1rem",
      transition: "color 0.3s ease",
    },
    loginBtn: {
      backgroundColor: "white",
      color: "#2A9D8F",
      border: "none",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Oculis</div>

      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/about" style={styles.link}>
          About
        </Link>
        <Link to="/ContactPage" style={styles.link}>
          Contact
        </Link>

        {/* Show Register if user not registered, otherwise show Login */}
        
          <Link to="/login">
            <button
              style={styles.loginBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e0f2f1")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
              Login
            </button>
          </Link>
      
          <Link to="/register">
            <button
              style={styles.loginBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e0f2f1")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
            >
              Register
            </button>
          </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
