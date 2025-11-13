import React from "react";

const Dashboard = () => {
  const styles = {
    body: {
      fontFamily: 'Inter, "Noto Sans", sans-serif',
      backgroundColor: "#f8fbfa",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #e8f3ee",
      padding: "12px 40px",
    },
    logoText: {
      color: "#0e1b15",
      fontWeight: "bold",
      fontSize: "18px",
      marginLeft: "8px",
    },
    navLink: {
      color: "#0e1b15",
      fontSize: "14px",
      fontWeight: "500",
      textDecoration: "none",
      margin: "0 10px",
    },
    profilePic: {
      backgroundImage:
        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdgI493qXyxHeqf3ak5Wpk2qK3ZEDM6IoIt9JKODAX0WodqS5CxIzHSvppknFv0zIjAhsPwy7hX7trfLxuCf_orSY0ajnPrpWMCsuV1-tYg-zrSiuC_5_tggnpKCy3hXmiCOw9Y_pOFwC3tDcIEaf7EmVqZW_r75MwERne7HslF-Gj-7kLGSKobrSQDZkS0r7tB5exhGtbsx8QCLQU1oatLYIcohsIfBr9CtPYnTUbeccErl45KZOVtQySo8Jz0zkFW94zSCMkGitf")',
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    sidebar: {
      width: "300px",
      backgroundColor: "#f8fbfa",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    sideItem: (active) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 14px",
      borderRadius: "12px",
      backgroundColor: active ? "#e8f3ee" : "transparent",
      cursor: "pointer",
      color: "#0e1b15",
      fontWeight: "500",
      fontSize: "14px",
    }),
    content: {
      flex: 1,
      padding: "24px",
      display: "flex",
      flexDirection: "column",
    },
    card: {
      backgroundColor: "#e8f3ee",
      borderRadius: "12px",
      padding: "24px",
      flex: "1",
      minWidth: "158px",
    },
    cardTitle: {
      fontSize: "16px",
      color: "#0e1b15",
      fontWeight: "500",
    },
    cardValue: {
      fontSize: "24px",
      color: "#0e1b15",
      fontWeight: "bold",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    th: {
      textAlign: "left",
      color: "#0e1b15",
      fontWeight: "500",
      fontSize: "14px",
      padding: "12px",
      borderBottom: "1px solid #d1e6dd",
    },
    td: {
      color: "#0e1b15",
      fontSize: "14px",
      padding: "12px",
      borderTop: "1px solid #d1e6dd",
    },
    button: {
      backgroundColor: "#e8f3ee",
      border: "none",
      borderRadius: "12px",
      padding: "6px 12px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      color: "#0e1b15",
    },
    action: {
      color: "#509577",
      fontWeight: "bold",
    },
  };

  const cards = [
    { title: "Total Scans Analyzed", value: "1,250" },
    { title: "Normal Retinas", value: "850" },
    { title: "DME Detected", value: "200" },
    { title: "CNV Detected", value: "100" },
    { title: "Drusen Detected", value: "100" },
  ];

  const patients = [
    { id: "PT12345", date: "2024-01-15", result: "Normal" },
    { id: "PT67890", date: "2024-01-14", result: "DME Detected" },
    { id: "PT11223", date: "2024-01-13", result: "CNV Detected" },
    { id: "PT44556", date: "2024-01-12", result: "Drusen Detected" },
  ];

  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.header}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="24" height="24" fill="#0e1b15">
            <path d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" />
          </svg>
          <h2 style={styles.logoText}>Oculis</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <nav>
            {["Dashboard", "Upload", "Records", "About", "Contact"].map(
              (item) => (
                <a key={item} href="#" style={styles.navLink}>
                  {item}
                </a>
              )
            )}
          </nav>
          <div style={styles.profilePic}></div>
        </div>
      </header>

      {/* Main content */}
      <div style={{ display: "flex", flex: 1, padding: "20px" }}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          {["Dashboard", "Upload", "Results", "Reports", "Settings"].map(
            (item, i) => (
              <div key={item} style={styles.sideItem(i === 0)}>
                <span>{item}</span>
              </div>
            )
          )}
        </aside>

        {/* Dashboard content */}
        <main style={styles.content}>
          <h1
            style={{
              color: "#0e1b15",
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "24px",
            }}
          >
            Dashboard
          </h1>

          {/* Stats cards */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {cards.map((card) => (
              <div key={card.title} style={styles.card}>
                <p style={styles.cardTitle}>{card.title}</p>
                <p style={styles.cardValue}>{card.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity Table */}
          <h2
            style={{
              color: "#0e1b15",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Recent Activity
          </h2>
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
                  <td style={styles.td}>
                    <button style={styles.button}>{p.result}</button>
                  </td>
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
