import React from "react";

const PatientRecords = () => {
  const styles = {
    page: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#f9fafb",
      color: "#333",
      minHeight: "100vh",
      padding: "40px",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "8px",
      color: "#2b5876",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#6b7280",
    },
    tableContainer: {
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      overflowX: "auto",
      padding: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: "700px",
    },
    th: {
      backgroundColor: "#f3f4f6",
      color: "#374151",
      fontWeight: "600",
      padding: "12px 16px",
      textAlign: "left",
      borderBottom: "2px solid #e5e7eb",
    },
    td: {
      padding: "12px 16px",
      borderBottom: "1px solid #e5e7eb",
    },
    button: {
      backgroundColor: "#2b5876",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "8px 14px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#4e4376",
    },
    status: {
      completed: { color: "#10b981", fontWeight: "600" },
      pending: { color: "#f59e0b", fontWeight: "600" },
    },
  };

  const patients = [
    { id: 1, name: "Aarav Sharma", age: 45, scan: "Retinal Scan 1", date: "2025-11-01", status: "Completed" },
    { id: 2, name: "Meera Nair", age: 38, scan: "Retinal Scan 2", date: "2025-11-02", status: "Pending" },
    { id: 3, name: "Rohan Gupta", age: 52, scan: "Retinal Scan 3", date: "2025-11-04", status: "Completed" },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Patient Records</h1>
        <p style={styles.subtitle}>Manage and review uploaded retinal scans</p>
      </header>

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
                <td
                  style={
                    patient.status === "Completed"
                      ? styles.status.completed
                      : styles.status.pending
                  }
                >
                  {patient.status}
                </td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#4e4376")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "#2b5876")
                    }
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
