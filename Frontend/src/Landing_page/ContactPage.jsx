import React from "react";

const Contact = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f8fbfa",
      fontFamily: "Inter, 'Noto Sans', sans-serif",
      overflowX: "hidden",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      padding: "2rem 10rem",
      flex: 1,
    },
    contentContainer: {
      maxWidth: "512px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      color: "#0e1b15",
      fontSize: "28px",
      fontWeight: "700",
      textAlign: "center",
      paddingBottom: "1rem",
      paddingTop: "2rem",
    },
    label: {
      color: "#0e1b15",
      fontSize: "1rem",
      fontWeight: "500",
      marginBottom: "0.5rem",
    },
    inputContainer: {
      width: "100%",
      maxWidth: "480px",
      marginBottom: "1.5rem",
    },
    input: {
      width: "100%",
      height: "3.5rem",
      borderRadius: "12px",
      border: "1px solid #d1e6dd",
      backgroundColor: "#f8fbfa",
      color: "#0e1b15",
      padding: "15px",
      fontSize: "1rem",
      outline: "none",
    },
    textarea: {
      width: "100%",
      minHeight: "140px",
      borderRadius: "12px",
      border: "1px solid #d1e6dd",
      backgroundColor: "#f8fbfa",
      color: "#0e1b15",
      padding: "15px",
      fontSize: "1rem",
      outline: "none",
      resize: "none",
    },
    submitButton: {
      width: "100%",
      maxWidth: "480px",
      backgroundColor: "#1ab773",
      color: "#0e1b15",
      border: "none",
      borderRadius: "12px",
      padding: "0.75rem",
      fontWeight: "700",
      cursor: "pointer",
      fontSize: "0.9rem",
      marginTop: "0.5rem",
    },
    clinicTitle: {
      color: "#0e1b15",
      fontSize: "1.125rem",
      fontWeight: "700",
      paddingTop: "1.5rem",
      paddingBottom: "0.5rem",
    },
    clinicText: {
      color: "#0e1b15",
      fontSize: "1rem",
      textAlign: "center",
      marginBottom: "0.5rem",
    },
    socialContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      padding: "1rem",
    },
    socialIconBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
      backgroundColor: "#f8fbfa",
      padding: "0.75rem",
      borderRadius: "10px",
      width: "80px",
    },
    iconCircle: {
      backgroundColor: "#e8f3ee",
      borderRadius: "50%",
      padding: "0.6rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    socialLabel: {
      color: "#0e1b15",
      fontSize: "0.9rem",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.contentContainer}>
          <h2 style={styles.heading}>Contact Us</h2>

          {/* Name */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Name</label>
            <input type="text" placeholder="Your Name" style={styles.input} />
          </div>

          {/* Email */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Email</label>
            <input type="email" placeholder="Your Email" style={styles.input} />
          </div>

          {/* Subject */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Subject</label>
            <input type="text" placeholder="Subject" style={styles.input} />
          </div>

          {/* Message */}
          <div style={styles.inputContainer}>
            <label style={styles.label}>Message</label>
            <textarea placeholder="Your Message" style={styles.textarea} />
          </div>

          {/* Send Button */}
          <button style={styles.submitButton}>Send Message</button>

          {/* Clinic Info */}
          <h3 style={styles.clinicTitle}>Our Clinic</h3>
          <p style={styles.clinicText}>
            456 Health Avenue, Suite 789 Medical City, CA 91234
          </p>
          <p style={styles.clinicText}>(555) 987-6543</p>
          <p style={styles.clinicText}>info@oculis.health</p>

          {/* Social Media */}
          <div style={styles.socialContainer}>
            <div style={styles.socialIconBox}>
              <div style={styles.iconCircle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </div>
              <p style={styles.socialLabel}>LinkedIn</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
