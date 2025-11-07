
import React from "react";

const Contact = () => {
  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #e0f7e9, #ffffff)",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "40px",
      width: "400px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      textAlign: "center",
    },
    title: {
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "20px",
      color: "#2e7d32",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "6px",
      border: "1px solid #c8e6c9",
      fontSize: "14px",
      outline: "none",
      backgroundColor: "#f1f8f3",
    },
    button: {
      width: "100%",
      padding: "12px",
      marginTop: "15px",
      backgroundColor: "#66bb6a",
      color: "white",
      border: "none",
      borderRadius: "6px",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "0.3s",
    },
    toggleText: {
      marginTop: "20px",
      fontSize: "14px",
      color: "#555",
    },
    link: {
      color: "#388e3c",
      cursor: "pointer",
      textDecoration: "underline",
      marginLeft: "4px",
    },
  };

  const [isLogin, setIsLogin] = React.useState(true);

  const handleToggle = () => setIsLogin(!isLogin);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isLogin ? "Login to Oculis" : "Register for Oculis"}</h2>
        {!isLogin && (
          <input type="text" placeholder="Full Name" style={styles.input} />
        )}
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button style={styles.button}>
          {isLogin ? "Login" : "Register"}
        </button>
        <p style={styles.toggleText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span style={styles.link} onClick={handleToggle}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;

