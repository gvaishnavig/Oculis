import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyHealthRecords = () => {
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
    body: { fontFamily: "'Lexend', sans-serif", backgroundColor: "#f6f8f7", color: "#0e1b0e", minHeight: "100vh", display: "flex", flexDirection: "column" },
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
    main: { flex: 1, display: "flex", justifyContent: "center", padding: "2rem 1rem" },
    container: { width: "100%", maxWidth: "1024px", display: "flex", flexDirection: "column" },
    heading: { fontSize: "2.5rem", fontWeight: 900, color: "#111827", marginBottom: "0.5rem" },
    subText: { fontSize: "0.875rem", color: "#6b7280", padding: "0 1rem 1rem 1rem" },
    chipsContainer: { display: "flex", flexWrap: "wrap", gap: "0.75rem", padding: "0.75rem 0.5rem", borderBottom: "1px solid #e5e7eb", marginBottom: "1rem" },
    chip: { display: "flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#f3f4f6", borderRadius: "0.5rem", padding: "0.25rem 1rem", cursor: "pointer", transition: "background-color 0.2s ease" },
    listContainer: { display: "flex", flexDirection: "column", gap: "0.5rem", padding: "0.5rem" },
    listItem: { display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#ffffff", padding: "1rem", minHeight: "72px", borderRadius: "0.5rem", border: "1px solid #e5e7eb", transition: "background-color 0.2s ease" },
    listItemLeft: { display: "flex", alignItems: "center", gap: "1rem" },
    iconCircle: { width: "48px", height: "48px", borderRadius: "0.5rem", backgroundColor: "rgba(61, 153, 112,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3d9970", flexShrink: 0 },
    listItemText: { display: "flex", flexDirection: "column" },
    scanId: { fontSize: "1rem", fontWeight: 600, color: "#111827", margin: 0 },
    scanDate: { fontSize: "0.875rem", color: "#6b7280", margin: 0 },
    statusBadge: { display: "flex", alignItems: "center", gap: "0.5rem", borderRadius: "9999px", padding: "0.25rem 0.75rem" },
    statusDot: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981" },
    statusText: { fontSize: "0.75rem", fontWeight: 500 },
    viewButton: { display: "none", backgroundColor: "#3d9970", color: "#ffffff", borderRadius: "0.5rem", padding: "0.625rem 1.25rem", fontSize: "0.875rem", fontWeight: 500, cursor: "pointer", transition: "background-color 0.2s ease" },
  };

  return (
    <div style={styles.body}>
      {/* Header (Navbar same as PatientDashboard) */}
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
          <nav style={styles.nav}>
            <a href="/patient/dashboard" style={styles.navLink}>Dashboard</a>
            <a href="/patient/records" style={{ ...styles.navLink, ...styles.activeLink }}>View Records</a>
            <a href="/patient/about" style={styles.navLink}>About</a>
            <a href="/patient/contact" style={styles.navLink}>Contact Us</a>
            <a href="/patient/help" style={styles.navLink}>Help</a>
          </nav>
          <div style={styles.rightSection}>
            <span style={{ fontSize: "0.9rem", color: "#4e974e" }}>Welcome, {currentUser?.name || "Patient"}!</span>
            <div style={styles.notifButton}>
              <span className="material-symbols-outlined">notifications</span>
              <div style={styles.notifDot}></div>
            </div>
            <button style={styles.logoutButton} onClick={() => navigate("/login")}>Logout</button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.container}>
          <p style={styles.heading}>My Health Records</p>
          <p style={styles.subText}>Showing {records.length} records for {currentUser?.name || "Patient"}</p>

          {/* Chips */}
          <div style={styles.chipsContainer}>
            <div style={styles.chip}><p style={{ margin: 0 }}>Date: Newest</p></div>
            <div style={styles.chip}><p style={{ margin: 0 }}>Type of Scan</p></div>
            <div style={styles.chip}><p style={{ margin: 0 }}>Report Status</p></div>
          </div>

          {/* Records */}
          <div style={styles.listContainer}>
            {records.length > 0 ? (
              records.map((rec) => (
                <div key={rec.id} style={styles.listItem}>
                  <div style={styles.listItemLeft}>
                    <div style={styles.iconCircle}>
                      <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>ophthalmology</span>
                    </div>
                    <div style={styles.listItemText}>
                      <p style={styles.scanId}>Scan ID: {rec.id}</p>
                      <p style={styles.scanDate}>{rec.date}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <div style={{
                      ...styles.statusBadge,
                      backgroundColor: rec.status === "available" ? "rgba(16,185,129,0.1)" : "#f3f4f6",
                    }}>
                      <div style={{
                        ...styles.statusDot,
                        backgroundColor: rec.status === "available" ? "#10b981" : "#9ca3af",
                      }}></div>
                      <p style={{
                        ...styles.statusText,
                        color: rec.status === "available" ? "#065f46" : "#6b7280",
                      }}>
                        {rec.status === "available" ? "Report Available" : "Pending Review"}
                      </p>
                    </div>
                    <button style={styles.viewButton}>View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No records available.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyHealthRecords;
