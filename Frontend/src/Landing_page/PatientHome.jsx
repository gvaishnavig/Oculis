
 import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const { currentUser } = useContext(AuthContext);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  // Fetch patient-specific records
  useEffect(() => {
    if (currentUser?.email) {
      axios
        .get(`http://localhost:5000/patient/records?email=${currentUser.email}`)
        .then((res) => setRecords(res.data.records || []))
        .catch((err) => console.error(err));
    }
  }, [currentUser]);

  const styles = {
    body: { fontFamily: "'Lexend', sans-serif", backgroundColor: "#f6f8f6", color: "#0e1b0e", minHeight: "100vh", display: "flex", flexDirection: "column" },
    header: { position: "sticky", top: 0, zIndex: 10, width: "100%", borderBottom: "1px solid #e7f3e7", backgroundColor: "rgba(246, 248, 246, 0.8)", backdropFilter: "blur(8px)", display: "flex", justifyContent: "center" },
    headerContainer: { display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", width: "100%", maxWidth: "1200px", padding: "0 1.5rem" },
    logoSection: { display: "flex", alignItems: "center", gap: "0.75rem" },
    logoIcon: { width: "24px", height: "24px", color: "#17cf17" },
    nav: { display: "flex", gap: "1.5rem", alignItems: "center" },
    navLink: { fontSize: "0.9rem", fontWeight: 500, color: "#0e1b0e", textDecoration: "none", transition: "color 0.2s ease" },
    activeLink: { color: "#17cf17", fontWeight: 600 },
    rightSection: { display: "flex", alignItems: "center", gap: "1rem" },
    notifButton: { position: "relative", height: "36px", width: "36px", borderRadius: "50%", backgroundColor: "rgba(23,207,23,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" },
    notifDot: { position: "absolute", top: "6px", right: "6px", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "red" },
    logoutButton: { backgroundColor: "rgba(23,207,23,0.2)", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.9rem", fontWeight: 500, cursor: "pointer", border: "none" },
    main: { flex: 1, display: "flex", justifyContent: "center", padding: "2rem" },
    container: { width: "100%", maxWidth: "900px" },
    banner: { display: "flex", alignItems: "center", gap: "1rem", backgroundColor: "rgba(23,207,23,0.2)", border: "1px solid rgba(23,207,23,0.3)", borderRadius: "8px", padding: "1rem", marginBottom: "2rem" },
    card: { display: "flex", flexDirection: "column", border: "1px solid #e7f3e7", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", backgroundColor: "#fdfdfd", marginBottom: "1.5rem" },
    cardContent: { flex: 1, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" },
    cardImage: { width: "100%", height: "250px", backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsPmjKd0VFEKmFRkONWjabZ9ZLUKLIb5xFeIKN6ktcyOzj8JTDSNGFZzlKBnCSTaFYaKZgRfKnT6PuVk58O-KLPVFKDNnducyqE1qi6Afn-VB-ROgqF2eNCUVMdQBN4kA4vLSoJDLn0YIYkl2ZcMUAkgChZhaVT54d5MSQ-KmuaX0bjypD61H4cM_PAlSQu_keNng49dN7T9VEseIcmgLpS3tz08CMNU7g3XFvnrec9cPIRscstRgjKDTuA9XQxDzrUBBeawhkCdEi")', backgroundSize: "cover", backgroundPosition: "center" },
    button: { backgroundColor: "#17cf17", color: "#112111", fontWeight: 700, border: "none", borderRadius: "8px", padding: "0.75rem 1.5rem", cursor: "pointer", boxShadow: "0 4px 10px rgba(23,207,23,0.3)", transition: "transform 0.2s ease" },
    footer: { borderTop: "1px solid #e7f3e7", backgroundColor: "#f6f8f6", textAlign: "center", padding: "1.5rem", fontSize: "0.85rem", color: "#4e974e" },
    footerLinks: { display: "flex", justifyContent: "center", gap: "1.5rem", marginTop: "0.5rem" },
    footerLink: { color: "#4e974e", textDecoration: "none", transition: "color 0.2s ease" },
  };

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoSection}>
            <div style={styles.logoIcon}>
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" style={{ width: "24px", height: "24px", color: "#17cf17" }}>
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 style={{ fontSize: "1.25rem", fontWeight: "700" }}>Oculis</h2>
          </div>

          {/* Navbar with role-based navigation */}
          <nav style={styles.nav}>
            <span style={{ ...styles.navLink, ...styles.activeLink, cursor: "pointer" }} onClick={() => navigate("/patient")}>
              Dashboard
            </span>
            <span style={{ ...styles.navLink, cursor: "pointer" }} onClick={() => navigate("/patient/records")}>
              View Records
            </span>
            <span style={styles.navLink} >About</span>
            <span style={styles.navLink} >Contact Us</span>
            
          </nav>

          <div style={styles.rightSection}>
            <span style={{ fontSize: "0.9rem", color: "#4e974e" }}>Welcome, {currentUser?.name || "Patient"}!</span>
            <div style={styles.notifButton}>
              <span className="material-symbols-outlined">notifications</span>
              <div style={styles.notifDot}></div>
            </div>
            <button style={styles.logoutButton} onClick={() => {
              localStorage.removeItem("currentUser");
              window.location.reload();
            }}>Logout</button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.container}>
          {/* Static dashboard card */}
          <div style={styles.card}>
            <div style={styles.cardImage}></div>
            <div style={styles.cardContent}>
              <h1 style={{ fontSize: "1.75rem", fontWeight: "700" }}>Your Oculis Health Records</h1>
              <p style={{ color: "#4e974e", fontSize: "1rem" }}>
                Access your retinal scan history and reports securely. We are committed to protecting your privacy and providing you with clear, understandable health insights.
              </p>
              <button style={styles.button} onClick={() => navigate("/patient/records")}>View My Records</button>
            </div>
          </div>

          {/* Patient-specific records */}
          {records.length > 0 ? (
            records.map((record) => (
              <div key={record.id} style={styles.card}>
                <div style={styles.cardImage}></div>
                <div style={styles.cardContent}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>{record.title}</h3>
                  <p>{record.description}</p>
                  <p>Date: {record.date}</p>
                  <button style={styles.button}>View Record</button>
                </div>
              </div>
            ))
          ) : (
            <p>No records available.</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Oculis. All rights reserved.</p>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>Privacy Policy</a>
          <a href="#" style={styles.footerLink}>Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default PatientDashboard;
