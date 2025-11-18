import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const PatientRecords = () => {
  const { currentUser ,logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  // Fetch doctor-specific patient records
  useEffect(() => {
    if (currentUser?.email) {
      axios
        .get(`http://localhost:5000/doctor/patients?email=${currentUser.email}`)
        .then((res) => setPatients(res.data.patients || []))
        .catch((err) => console.error(err));
    }
  }, [currentUser]);

  const styles = {
    page: { fontFamily: "'Inter', sans-serif", backgroundColor: "#f9fafb", color: "#333", minHeight: "100vh", padding: "20px" },
    headerNavbar: { display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8f3ee", padding: "12px 40px" },
    logoSection: { display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" },
    logoText: { color: "#0e1b15", fontWeight: "bold", fontSize: "18px" },
    nav: { display: "flex", alignItems: "center", gap: "24px" },
    navLink: { color: "#0e1b15", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
    navActive: { color: "#1ab773", fontWeight: "700" },
    profilePic: {
      backgroundImage: currentUser?.photo ? `url(${currentUser.photo})` : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdgI493qXyxHeqf3ak5Wpk2qK3ZEDM6IoIt9JKODAX0WodqS5CxIzHSvppknFv0zIjAhsPwy7hX7trfLxuCf_orSY0ajnPrpWMCsuV1-tYg-zrSiuC_5_tggnpKCy3hXmiCOw9Y_pOFwC3tDcIEaf7EmVqZW_r75MwERne7HslF-Gj-7kLGSKobrSQDZkS0r7tB5exhGtbsx8QCLQU1oatLYIcohsIfBr9CtPYnTUbeccErl45KZOVtQySo8Jz0zkFW94zSCMkGitf")',
      width: "40px", height: "40px", borderRadius: "50%", backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer",
    },
    titleSection: { textAlign: "center", margin: "30px 0" },
    title: { fontSize: "2rem", fontWeight: "700", color: "#2b5876", marginBottom: "8px" },
    subtitle: { fontSize: "1rem", color: "#6b7280" },
    tableContainer: { backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", overflowX: "auto", padding: "20px" },
    table: { width: "100%", borderCollapse: "collapse", minWidth: "700px" },
    th: { backgroundColor: "#f3f4f6", color: "#374151", fontWeight: "600", padding: "12px 16px", textAlign: "left", borderBottom: "2px solid #e5e7eb" },
    td: { padding: "12px 16px", borderBottom: "1px solid #e5e7eb" },
    button: { backgroundColor: "#2b5876", color: "white", border: "none", borderRadius: "8px", padding: "8px 14px", cursor: "pointer", transition: "background 0.3s" },
    status: { Completed: { color: "#10b981", fontWeight: "600" }, Pending: { color: "#f59e0b", fontWeight: "600" } },
    buttons: { display: "flex", gap: "8px" },
    logoutBtn: { backgroundColor: "rgba(26,183,115,0.2)", color: "#111", fontSize: "14px", fontWeight: "600", border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer" },
  };

  const isActive = (path) => window.location.pathname === path;

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <header style={styles.headerNavbar}>
        <div style={styles.logoSection} onClick={() => navigate("/doctor")}>
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
          <h2 style={styles.logoText}>Oculis</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <nav style={styles.nav}>
            <span style={isActive("/doctor/dashboard") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor/dashboard")}>Dashboard</span>
            <span style={isActive("/doctor/upload") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor/upload")}>Upload</span>
            <span style={isActive("/doctor/patient-records") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor/patient-records")}>Patient Records</span>
            <span style={isActive("/doctor") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor")}>How It Works</span>
          </nav>
           {/* Logout Button */}
        <div style={styles.buttons}>
          <button
  style={styles.logoutBtn}
  onClick={() => {
    logout();            // clear user from context/localStorage
    navigate("/");       // redirect to homepage
  }}
>
  Logout
</button>
        </div>
        </div>
      </header>

      {/* Page Title */}
      <div style={styles.titleSection}>
        <h1 style={styles.title}>Patient Records</h1>
        <p style={styles.subtitle}>Manage and review uploaded retinal scans</p>
      </div>

      {/* Patient Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Patient Name</th>
              <th style={styles.th}>Age</th>
              <th style={styles.th}>Scan Type</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td style={styles.td}>{patient.id}</td>
                <td style={styles.td}>{patient.name}</td>
                <td style={styles.td}>{patient.age}</td>
                <td style={styles.td}>{patient.scan}</td>
                <td style={styles.td}>{patient.date}</td>
                <td style={styles.status[patient.status]}>{patient.status}</td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#4e4376")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#2b5876")}
                  >
                    View Scan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientRecords;
