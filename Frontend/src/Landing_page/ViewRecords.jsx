import React from "react";

const MyHealthRecords = () => {
  const styles = {
    body: {
      fontFamily: "'Lexend', sans-serif",
      backgroundColor: "#f6f8f7",
      color: "#0e1b0e",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      padding: "1rem",
    },
    innerContainer: {
      width: "100%",
      maxWidth: "1024px",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #e2e8f0",
      padding: "1rem 1.5rem",
    },
    logoSection: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      color: "#3d9970",
    },
    logoIcon: {
      width: "24px",
      height: "24px",
      color: "#3d9970",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "1.5rem",
    },
    navLink: {
      fontSize: "0.875rem",
      fontWeight: 500,
      color: "#4b5563",
      textDecoration: "none",
      cursor: "pointer",
      transition: "color 0.2s ease",
    },
    navLinkActive: {
      fontWeight: 700,
      color: "#3d9970",
    },
    profileImage: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    main: {
      flex: 1,
      padding: "2rem 1rem",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: 900,
      color: "#111827",
      marginBottom: "0.5rem",
    },
    subText: {
      fontSize: "0.875rem",
      color: "#6b7280",
      padding: "0 1rem 1rem 1rem",
    },
    chipsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem",
      padding: "0.75rem 0.5rem",
      borderBottom: "1px solid #e5e7eb",
      marginBottom: "1rem",
    },
    chip: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      backgroundColor: "#f3f4f6",
      borderRadius: "0.5rem",
      padding: "0.25rem 1rem",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    listContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      padding: "0.5rem",
    },
    listItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ffffff",
      padding: "1rem",
      minHeight: "72px",
      borderRadius: "0.5rem",
      border: "1px solid #e5e7eb",
      transition: "background-color 0.2s ease",
    },
    listItemHover: {
      backgroundColor: "#f9fafb",
    },
    listItemLeft: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    iconCircle: {
      width: "48px",
      height: "48px",
      borderRadius: "0.5rem",
      backgroundColor: "rgba(61, 153, 112,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#3d9970",
      flexShrink: 0,
    },
    listItemText: {
      display: "flex",
      flexDirection: "column",
    },
    scanId: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#111827",
      margin: 0,
    },
    scanDate: {
      fontSize: "0.875rem",
      color: "#6b7280",
      margin: 0,
    },
    statusBadge: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      borderRadius: "9999px",
      padding: "0.25rem 0.75rem",
    },
    statusDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: "#10b981",
    },
    statusText: {
      fontSize: "0.75rem",
      fontWeight: 500,
    },
    viewButton: {
      display: "none",
      backgroundColor: "#3d9970",
      color: "#ffffff",
      borderRadius: "0.5rem",
      padding: "0.625rem 1.25rem",
      fontSize: "0.875rem",
      fontWeight: 500,
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
  };

  const records = [
    { id: "OC-84620", date: "October 26, 2023", status: "available" },
    { id: "OC-79341", date: "August 15, 2023", status: "pending" },
    { id: "OC-61182", date: "April 02, 2023", status: "available" },
    { id: "OC-50927", date: "January 20, 2023", status: "available" },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          {/* Header */}
          <header style={styles.header}>
            <div style={styles.logoSection}>
              <svg
                style={styles.logoIcon}
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>Oculis</h2>
            </div>
            <div style={styles.nav}>
              <a style={styles.navLink}>Dashboard</a>
              <a style={{ ...styles.navLink, ...styles.navLinkActive }}>View Records</a>
              <a style={styles.navLink}>Profile</a>
              <a style={styles.navLink}>Logout</a>
            </div>
            <div
              style={{
                ...styles.profileImage,
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtXrffIybCAy6QuZoy6QoyilLuJDHgT6FygUXOz-IdNdz5VjiWIVPIUUS__Z-OvNDTUBFeppTsu6l1MWo16NLvdxWJMGhFhxS5nph06s7k-WdZLFOcBm77VMgr0buWGqlZeDXSNk6W8CnNLypKNNzY7VJXfHLyYI4bt4JDvEzkdSw5897XhKIb5Dl3m2vnAtpWej1_5IhTDnQRT5gh26kYrA8-vqqtEv6LSKS0gp54o-fM5bsUBJpTTvNq4f1m_jpjbBLRu_mKJHet")',
              }}
            ></div>
          </header>

          {/* Main */}
          <main style={styles.main}>
            <p style={styles.heading}>My Health Records</p>
            <p style={styles.subText}>Showing {records.length} records</p>

            {/* Chips */}
            <div style={styles.chipsContainer}>
              <div style={styles.chip}>
                <p style={{ margin: 0 }}>Date: Newest</p>
              </div>
              <div style={styles.chip}>
                <p style={{ margin: 0 }}>Type of Scan</p>
              </div>
              <div style={styles.chip}>
                <p style={{ margin: 0 }}>Report Status</p>
              </div>
            </div>

            {/* Records */}
            <div style={styles.listContainer}>
              {records.map((rec, idx) => (
                <div key={idx} style={styles.listItem}>
                  <div style={styles.listItemLeft}>
                    <div style={styles.iconCircle}>
                      <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
                        ophthalmology
                      </span>
                    </div>
                    <div style={styles.listItemText}>
                      <p style={styles.scanId}>Scan ID: {rec.id}</p>
                      <p style={styles.scanDate}>{rec.date}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <div
                      style={{
                        ...styles.statusBadge,
                        backgroundColor:
                          rec.status === "available" ? "rgba(16,185,129,0.1)" : "#f3f4f6",
                      }}
                    >
                      <div
                        style={{
                          ...styles.statusDot,
                          backgroundColor: rec.status === "available" ? "#10b981" : "#9ca3af",
                        }}
                      ></div>
                      <p
                        style={{
                          ...styles.statusText,
                          color: rec.status === "available" ? "#065f46" : "#6b7280",
                        }}
                      >
                        {rec.status === "available" ? "Report Available" : "Pending Review"}
                      </p>
                    </div>
                    <button style={styles.viewButton}>View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyHealthRecords;
