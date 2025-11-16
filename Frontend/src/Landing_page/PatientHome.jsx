import React from "react";

const PatientDashboard = () => {
  const styles = {
    body: {
      fontFamily: "'Lexend', sans-serif",
      backgroundColor: "#f6f8f6",
      color: "#0e1b0e",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      position: "sticky",
      top: 0,
      zIndex: 10,
      width: "100%",
      borderBottom: "1px solid #e7f3e7",
      backgroundColor: "rgba(246, 248, 246, 0.8)",
      backdropFilter: "blur(8px)",
      display: "flex",
      justifyContent: "center",
    },
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
      width: "100%",
      maxWidth: "1200px",
      padding: "0 1.5rem",
    },
    logoSection: { display: "flex", alignItems: "center", gap: "0.75rem" },
    logoIcon: { width: "24px", height: "24px", color: "#17cf17" },
    nav: { display: "flex", gap: "1.5rem", alignItems: "center" },
    navLink: {
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "#0e1b0e",
      textDecoration: "none",
      transition: "color 0.2s ease",
    },
    activeLink: { color: "#17cf17", fontWeight: 600 },
    rightSection: { display: "flex", alignItems: "center", gap: "1rem" },
    notifButton: {
      position: "relative",
      height: "36px",
      width: "36px",
      borderRadius: "50%",
      backgroundColor: "rgba(23,207,23,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    notifDot: {
      position: "absolute",
      top: "6px",
      right: "6px",
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "red",
    },
    logoutButton: {
      backgroundColor: "rgba(23,207,23,0.2)",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      fontSize: "0.9rem",
      fontWeight: 500,
      cursor: "pointer",
      border: "none",
    },
    main: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      padding: "2rem",
    },
    container: { width: "100%", maxWidth: "900px" },
    banner: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      backgroundColor: "rgba(23,207,23,0.2)",
      border: "1px solid rgba(23,207,23,0.3)",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "2rem",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid #e7f3e7",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      backgroundColor: "#fdfdfd",
    },
    cardContent: {
      flex: 1,
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      justifyContent: "center",
    },
    cardImage: {
      width: "100%",
      height: "250px",
      backgroundImage:
        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsPmjKd0VFEKmFRkONWjabZ9ZLUKLIb5xFeIKN6ktcyOzj8JTDSNGFZzlKBnCSTaFYaKZgRfKnT6PuVk58O-KLPVFKDNnducyqE1qi6Afn-VB-ROgqF2eNCUVMdQBN4kA4vLSoJDLn0YIYkl2ZcMUAkgChZhaVT54d5MSQ-KmuaX0bjypD61H4cM_PAlSQu_keNng49dN7T9VEseIcmgLpS3tz08CMNU7g3XFvnrec9cPIRscstRgjKDTuA9XQxDzrUBBeawhkCdEi")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    button: {
      backgroundColor: "#17cf17",
      color: "#112111",
      fontWeight: 700,
      border: "none",
      borderRadius: "8px",
      padding: "0.75rem 1.5rem",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(23,207,23,0.3)",
      transition: "transform 0.2s ease",
    },
    footer: {
      borderTop: "1px solid #e7f3e7",
      backgroundColor: "#f6f8f6",
      textAlign: "center",
      padding: "1.5rem",
      fontSize: "0.85rem",
      color: "#4e974e",
    },
    footerLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      marginTop: "0.5rem",
    },
    footerLink: {
      color: "#4e974e",
      textDecoration: "none",
      transition: "color 0.2s ease",
    },
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoSection}>
            <div style={styles.logoIcon}>
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "24px", height: "24px", color: "#17cf17" }}
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Oculis</h2>
          </div>
          <nav style={styles.nav}>
            <a href="#" style={{ ...styles.navLink, ...styles.activeLink }}>
              Dashboard
            </a>
            <a href="#" style={styles.navLink}>
              View Records
            </a>
            <a href="#" style={styles.navLink}>
              About
            </a>
            <a href="#" style={styles.navLink}>
              Contact Us
            </a>
            <a href="#" style={styles.navLink}>
              Help
            </a>
          </nav>
          <div style={styles.rightSection}>
            <span style={{ fontSize: "0.9rem", color: "#4e974e" }}>
              Welcome, Jane Doe!
            </span>
            <div style={styles.notifButton}>
              <span className="material-symbols-outlined">notifications</span>
              <div style={styles.notifDot}></div>
            </div>
            <button style={styles.logoutButton}>Logout</button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.container}>
          <div style={styles.banner}>
            <span className="material-symbols-outlined" style={{ color: "#17cf17" }}>
              info
            </span>
            <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
              New report available for your review.
            </p>
            <a
              href="#"
              style={{
                marginLeft: "auto",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#17cf17",
                textDecoration: "underline",
              }}
            >
              View Now
            </a>
          </div>

          <div style={styles.card}>
            <div style={styles.cardImage}></div>
            <div style={styles.cardContent}>
              <h1 style={{ fontSize: "1.75rem", fontWeight: "700" }}>
                Your Oculis Health Records
              </h1>
              <p style={{ color: "#4e974e", fontSize: "1rem" }}>
                Access your retinal scan history and reports securely. We are
                committed to protecting your privacy and providing you with clear,
                understandable health insights.
              </p>
              <button style={styles.button}>View My Records</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Oculis. All rights reserved.</p>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="#" style={styles.footerLink}>
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PatientDashboard;
