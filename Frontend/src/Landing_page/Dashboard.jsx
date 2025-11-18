import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const { currentDoctor, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const sidebarLinks = [
  { label: "Dashboard", path: "/doctor/dashboard" },
  { label: "Upload", path: "/doctor/upload" },
  { label: "Patient Records", path: "/doctor/patient-records" },
  { label: "How It Works", path: "/doctor" },
  { label: "Logout", path: "logout" }
];


  const styles = {
    body: { fontFamily: 'Inter, "Noto Sans", sans-serif', backgroundColor: "#f8fbfa", minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" },
    header: { display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e8f3ee", padding: "12px 40px" },
    logoContainer: { display: "flex", alignItems: "center", gap: "8px" },
    logoText: { color: "#0e1b15", fontWeight: "bold", fontSize: "18px" },
    nav: { display: "flex", alignItems: "center", gap: "32px" },
    navLink: { textDecoration: "none", color: "#333", fontSize: "14px", fontWeight: "500", cursor: "pointer" },
    navActive: { color: "#1ab773", fontWeight: "700", fontSize: "14px", cursor: "pointer" },
    buttons: { display: "flex", gap: "8px" },
    logoutBtn: { backgroundColor: "rgba(26,183,115,0.2)", color: "#111", fontSize: "14px", fontWeight: "600", border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer" },
    profilePic: { backgroundImage: currentDoctor?.photoURL ? `url(${currentDoctor.photoURL})` : 'url("https://via.placeholder.com/40")', width: "40px", height: "40px", borderRadius: "50%", backgroundSize: "cover", backgroundPosition: "center" },
    sidebar: { width: "300px", backgroundColor: "#f8fbfa", padding: "15px",display: "flex", flexDirection: "column", justifyContent: "space-between" },
    sideItem: (active) => ({ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "12px", backgroundColor: active ? "#e8f3ee" : "transparent", cursor: "pointer", color: "#0e1b15", fontWeight: "500", fontSize: "14px" }),
    content: { flex: 1, padding: "24px", display: "flex", flexDirection: "column" },
    card: { backgroundColor: "#e8f3ee", borderRadius: "12px", padding: "24px", flex: "1", minWidth: "158px" },
    cardTitle: { fontSize: "16px", color: "#0e1b15", fontWeight: "500" },
    cardValue: { fontSize: "24px", color: "#0e1b15", fontWeight: "bold" },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
    th: { textAlign: "left", color: "#0e1b15", fontWeight: "500", fontSize: "14px", padding: "12px", borderBottom: "1px solid #d1e6dd" },
    td: { color: "#0e1b15", fontSize: "14px", padding: "12px", borderTop: "1px solid #d1e6dd" },
    button: { backgroundColor: "#e8f3ee", border: "none", borderRadius: "12px", padding: "6px 12px", cursor: "pointer", fontSize: "14px", fontWeight: "500", color: "#0e1b15" },
    action: { color: "#509577", fontWeight: "bold" },
   
  };

  // Example dynamic cards and patients per doctor
  const cards = [
    { title: "Total Scans Analyzed", value: currentDoctor?.totalScans || "5" },
    { title: "Normal Retinas", value: currentDoctor?.normalRetinas || "2" },
    { title: "DME Detected", value: currentDoctor?.dmeDetected || "1" },
    { title: "CNV Detected", value: currentDoctor?.cnvDetected || "1" },
    { title: "Drusen Detected", value: currentDoctor?.drusenDetected || "1" },
  ];

  const patients = currentDoctor?.patients || [
    { id: "PT12345", date: "2025-11-19", result: "CNV Detected" },
    { id: "PT67890", date: "2025-11-18", result: "DME Detected" },
     { id: "PT12341", date: "2025-11-17", result: "Normal" },
      { id: "PT12346", date: "2025-11-16", result: "Drusen" },
       { id: "PT12343", date: "2025-11-15", result: "Normal" },
  ];

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
          </svg>
          
          <h2 style={styles.logoText}>Oculis</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <nav style={styles.nav}>
            <span style={isActive("/doctor/dashboard") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor/dashboard")}>
              Dashboard
            </span>
            <span style={isActive("/doctor/upload") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor/upload")}>
              Upload
            </span>
            <span style={isActive("/doctor/patient-records") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor/patient-records")}>
              Patient Records
            </span>
            <span style={isActive("/doctor") ? styles.navActive : styles.navLink} onClick={() => navigate("/doctor")}>
              How It Works
            </span>
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

      {/* Main content */}
      <div style={{ display: "flex", flex: 1, padding: "20px" }}>
        {/* Sidebar */}
       <aside style={styles.sidebar}>
  {sidebarLinks.map((item) => (
    <div
      key={item.label}
      style={styles.sideItem(isActive(item.path))}
      onClick={() => navigate(item.path)}
    >
      {item.label}
    </div>
  ))}
</aside>



        {/* Dashboard content */}
        <main style={styles.content}>
          <h1 style={{ color: "#0e1b15", fontSize: "32px", fontWeight: "bold", marginBottom: "24px" }}>
            {currentDoctor?.name ? `${currentDoctor.name}'s Dashboard` : "Dashboard"}
          </h1>

          {/* Stats cards */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
            {cards.map((card) => (
              <div key={card.title} style={styles.card}>
                <p style={styles.cardTitle}>{card.title}</p>
                <p style={styles.cardValue}>{card.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity Table */}
          <h2 style={{ color: "#0e1b15", fontSize: "22px", fontWeight: "bold", marginBottom: "16px" }}>Recent Activity</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Patient ID</th>
                <th style={styles.th}>Upload Date</th>
                <th style={styles.th}>Analysis Result</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>
                  <td style={styles.td}>{p.id}</td>
                  <td style={{ ...styles.td, color: "#509577" }}>{p.date}</td>
                  <td style={styles.td}><button style={styles.button}>{p.result}</button></td>
                  <td style={{ ...styles.td, ...styles.action }}>View Report</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
