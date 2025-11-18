
 import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const PatientDashboard = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
    page: { fontFamily: "Inter, sans-serif", backgroundColor: "#f6f8f7", minHeight: "100vh", display: "flex", flexDirection: "column" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(26,183,115,0.2)", padding: "16px 40px" },
    logoContainer: { display: "flex", alignItems: "center", gap: "10px" },
    logoText: { fontSize: "20px", fontWeight: "700", color: "#111" },
    nav: { display: "flex", gap: "32px", alignItems: "center" },
    navLink: { cursor: "pointer", fontSize: "14px", fontWeight: 500, color: "#333" },
    navActive: { cursor: "pointer", fontSize: "14px", fontWeight: 700, color: "#1ab773" },
    buttons: { display: "flex", alignItems: "center", gap: "16px" },
    logoutBtn: { backgroundColor: "rgba(26,183,115,0.2)", color: "#111", fontSize: "14px", fontWeight: 600, border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer" },
    main: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" },
    headingContainer: { maxWidth: "800px", marginBottom: "40px", textAlign: "center" },
    title: { fontSize: "36px", fontWeight: "900", color: "#111", marginBottom: "16px" },
    subtitle: { fontSize: "16px", color: "#555" },
    container: { maxWidth: "1000px", width: "100%", display: "flex", flexDirection: "column", gap: "24px" },
    card: { border: "1px solid rgba(26,183,115,0.2)", borderRadius: "12px", padding: "20px", backgroundColor: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
    cardTitle: { fontSize: "18px", fontWeight: "700" },
    cardText: { fontSize: "14px", color: "#555" },
    footer: { borderTop: "1px solid rgba(26,183,115,0.2)", padding: "40px 20px", textAlign: "center", color: "#666", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" },
    footerLinks: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" },
    footerLink: { color: "#666", textDecoration: "none", fontSize: "14px" },
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <svg width="24" height="24" fill="#1ab773">
            <path d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" />
          </svg>
          <h2 style={styles.logoText}>Oculis</h2>
        </div>

        {/* Navbar */}
        <nav style={styles.nav}>
          <span style={isActive("/patient/dashboard") ? styles.navActive : styles.navLink} onClick={() => navigate("/patient/dashboard")}>Dashboard</span>
          <span style={isActive("/patient/records") ? styles.navActive : styles.navLink} onClick={() => navigate("/patient/records")}>View Records</span>
          <span style={isActive("/patient/about") ? styles.navActive : styles.navLink} onClick={() => navigate("/patient/about")}>About</span>
          <span style={isActive("/patient/contact") ? styles.navActive : styles.navLink} onClick={() => navigate("/patient/contact")}>Contact</span>
        </nav>

        {/* Logout */}
        <div style={styles.buttons}>
          <span>Welcome, {currentUser?.name || "Patient"}!</span>
          <button style={styles.logoutBtn} onClick={logout}>Logout</button>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.headingContainer}>
          <h1 style={styles.title}>Welcome to Your Dashboard</h1>
          <p style={styles.subtitle}>Access your retinal scan history and reports securely.</p>
        </div>

        <div style={styles.container}>
          {records.length > 0 ? (
            records.map((record) => (
              <div key={record.id} style={styles.card}>
                <div style={styles.cardTitle}>{record.title || record.scanType || "Patient Scan"}</div>
                <div style={styles.cardText}>Date: {record.date}</div>
                <div style={styles.cardText}>Status: {record.status || "Pending"}</div>
              </div>
            ))
          ) : (
            <p>No records available.</p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>Privacy Policy</a>
          <a href="#" style={styles.footerLink}>Terms of Service</a>
          <a href="#" style={styles.footerLink}>Contact</a>
        </div>
        <p>© 2024 Oculis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PatientDashboard;
