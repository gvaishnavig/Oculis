import React from "react";

const HowItWorks = () => {
  const styles = {
    page: {
      fontFamily: "Inter, sans-serif",
      backgroundColor: "#f6f8f7",
      color: "#333",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid rgba(26,183,115,0.2)",
      padding: "16px 40px",
    },
    logoContainer: { display: "flex", alignItems: "center", gap: "10px" },
    logoText: { fontSize: "20px", fontWeight: "700", color: "#111" },
    nav: { display: "flex", alignItems: "center", gap: "32px" },
    navLink: {
      textDecoration: "none",
      color: "#333",
      fontSize: "14px",
      fontWeight: "500",
    },
    navActive: {
      color: "#1ab773",
      fontWeight: "700",
      fontSize: "14px",
    },
    buttons: { display: "flex", gap: "8px" },
    loginBtn: {
      backgroundColor: "rgba(26,183,115,0.2)",
      color: "#111",
      fontSize: "14px",
      fontWeight: "600",
      border: "none",
      borderRadius: "8px",
      padding: "10px 20px",
      cursor: "pointer",
    },
    signupBtn: {
      backgroundColor: "#1ab773",
      color: "#11211a",
      fontSize: "14px",
      fontWeight: "600",
      border: "none",
      borderRadius: "8px",
      padding: "10px 20px",
      cursor: "pointer",
    },
    main: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: "80px 20px",
    },
    headingContainer: {
      maxWidth: "800px",
      marginBottom: "60px",
    },
    title: {
      fontSize: "42px",
      fontWeight: "900",
      color: "#111",
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "18px",
      color: "#555",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
      maxWidth: "1000px",
      width: "100%",
      position: "relative",
    },
    card: {
      backgroundColor: "rgba(255,255,255,0.7)",
      border: "1px solid rgba(26,183,115,0.2)",
      borderRadius: "16px",
      padding: "24px",
      textAlign: "left",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      backdropFilter: "blur(6px)",
    },
    iconCircle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      backgroundColor: "rgba(26,183,115,0.1)",
      color: "#1ab773",
      marginBottom: "12px",
      fontSize: "28px",
    },
    stepTitle: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#111",
      marginBottom: "6px",
    },
    stepText: {
      fontSize: "14px",
      color: "#666",
      lineHeight: "1.5",
    },
    buttonContainer: { marginTop: "60px" },
    ctaButton: {
      backgroundColor: "#1ab773",
      color: "#11211a",
      fontSize: "16px",
      fontWeight: "700",
      border: "none",
      borderRadius: "12px",
      padding: "14px 28px",
      cursor: "pointer",
      boxShadow: "0 6px 14px rgba(26,183,115,0.3)",
      transition: "transform 0.2s",
    },
    footer: {
      borderTop: "1px solid rgba(26,183,115,0.2)",
      padding: "40px 20px",
      textAlign: "center",
      color: "#666",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
    },
    footerLinks: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "24px",
    },
    footerLink: {
      color: "#666",
      textDecoration: "none",
      fontSize: "14px",
    },
    socials: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
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

        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Dashboard</a>
          <a href="#" style={styles.navLink}>Upload</a>
          <a href="#" style={styles.navActive}>How It Works</a>
          <a href="#" style={styles.navLink}>Help</a>
        </nav>

        <div style={styles.buttons}>
          <button style={styles.loginBtn}>Login</button>
          <button style={styles.signupBtn}>Sign Up</button>
        </div>
      </header>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.headingContainer}>
          <h1 style={styles.title}>How Our AI-Powered Analysis Works</h1>
          <p style={styles.subtitle}>
            Get a detailed retinal analysis in three simple steps.
          </p>
        </div>

        <div style={styles.grid}>
          {/* Step 1 */}
          <div style={styles.card}>
            <div style={styles.iconCircle}>📤</div>
            <h2 style={styles.stepTitle}>1. Upload Scan</h2>
            <p style={styles.stepText}>
              Securely upload your patient's OCT retinal scan files directly to our platform.
            </p>
          </div>

          {/* Step 2 */}
          <div style={styles.card}>
            <div style={styles.iconCircle}>🧠</div>
            <h2 style={styles.stepTitle}>2. AI Analyzes</h2>
            <p style={styles.stepText}>
              Our advanced AI model analyzes the scan for key biomarkers of DME, CNV, Drusen, and other conditions.
            </p>
          </div>

          {/* Step 3 */}
          <div style={styles.card}>
            <div style={styles.iconCircle}>📑</div>
            <h2 style={styles.stepTitle}>3. Receive Report</h2>
            <p style={styles.stepText}>
              Instantly receive a comprehensive report with diagnostic classification and visual highlights.
            </p>
          </div>
        </div>

        <div style={styles.buttonContainer}>
          <button
            style={styles.ctaButton}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Analyze a Scan Now
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="#" style={styles.footerLink}>
            Terms of Service
          </a>
          <a href="#" style={styles.footerLink}>
            Contact
          </a>
        </div>

        <div style={styles.socials}>
          <a href="#" style={{ color: "#666" }}>🔗</a>
          <a href="#" style={{ color: "#666" }}>🐦</a>
        </div>

        <p style={{ fontSize: "14px" }}>© 2024 Oculis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HowItWorks;
