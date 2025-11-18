import React, { useState } from "react";

const About = () => {
  const styles = {
    container: {
      backgroundColor: "#f8fbfa",
      minHeight: "100vh",
      fontFamily: "Inter, Noto Sans, sans-serif",
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 40px",
      borderBottom: "1px solid #e8f3ee",
    },
    contentWrapper: {
      flex: 1,
      padding: "40px",
      display: "flex",
      justifyContent: "center",
    },
    content: {
      maxWidth: "960px",
      width: "100%",
    },
    heading: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#0e1b15",
      padding: "16px 0",
    },
    paragraph: {
      color: "#0e1b15",
      fontSize: "16px",
      lineHeight: "1.6",
      padding: "8px 16px",
    },
    subHeading: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#0e1b15",
      padding: "20px 16px 8px",
    },
    teamGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "18px",
      padding: "16px",
    },
    teamCardBase: {
      textAlign: "left",
      padding: "18px 22px",
      background: "linear-gradient(112deg,#f8fbfa 60%,#e8f3ee 120%)",
      border: "1px solid #e8f3ee",
      borderRadius: "12px",
      boxShadow: "0 2px 12px rgba(80,149,119,0.07)",
      display: "flex",
      flexDirection: "column",
      minHeight: "110px",
      justifyContent: "center",
      position: "relative",
      transition:
        "background 0.19s, border 0.19s, box-shadow 0.19s, transform 0.17s",
      cursor: "pointer",
      overflow: "visible"
    },
    teamCardHovered: {
      background: "linear-gradient(112deg, #e7f4ed 60%, #d1e9e0 120%)",
      border: "2px solid #509577",
      boxShadow: "0 6px 24px rgba(80,149,119,0.13), 0 2px 12px rgba(80,149,119,0.08)",
      transform: "translateY(-3px) scale(1.025)",
      zIndex: 2,
    },
    teamName: {
      fontSize: "17px",
      fontWeight: "bold",
      color: "#0e1b15",
      marginBottom: "5px",
      letterSpacing: "0.5px",
    },
    teamRole: {
      fontSize: "15px",
      color: "#509577",
      marginBottom: "10px",
    },
    teamLine: {
      height: "2px",
      width: "32px",
      backgroundColor: "#e8f3ee",
      margin: "8px 0 8px 0",
      borderRadius: "2px",
    },
    // Inline popover (not modal)
    popover: {
      position: "absolute",
      top: "90%",
      left: "6%",
      minWidth: "88%",
      background: "#fff",
      border: "1.5px solid #509577",
      borderRadius: "10px",
      padding: "14px 18px 10px",
      boxShadow: "0 8px 32px rgba(80,149,119,0.15)",
      color: "#222e2a",
      fontSize: "15px",
      lineHeight: "1.45",
      zIndex: 10,
      marginTop: "9px",
      animation: "fadeIn 0.17s",
    },
    footer: {
      textAlign: "center",
      padding: "40px 0",
      color: "#509577",
      fontSize: "16px",
    },
    footerLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "32px",
      marginBottom: "20px",
    },
    footerLink: {
      textDecoration: "none",
      color: "#509577",
      fontSize: "16px",
    },
  };

  // Keyframes for fadeIn if needed for popover (best handled by .css, but shown here in comment):
  // 
  // @keyframes fadeIn {
  //   from { opacity: 0; transform: translateY(7px);}
  //   to { opacity: 1; transform: translateY(0);}
  // }

  // const teamMembers = [
  //   {
  //     name: "Vaishnavi Gurram",
  //     role: "CEO",
  //     details:
  //       "Vaishnavi leads Oculis with a commitment to impactful AI transforming healthcare. She is passionate about ethical innovation and building collaborative teams.",
  //   },
  //   {
  //     name: "Riya Patidar",
  //     role: "CTO",
  //     details:
  //       "Riya architects Oculis’ AI stack. Her expertise includes scalable deep learning and cloud platforms for real-time medical analysis.",
  //   },
  //   {
  //     name: "Riya Sathe",
  //     role: "Head of Research",
  //     details:
  //       "Riya drives research and clinical integration at Oculis, ensuring that technological solutions meet real-world healthcare needs with rigor and integrity.",
  //   },
  // ];

      const teamMembers = [
        {
          name: "Vaishnavi Gurram",
          role: "Model Development Lead",
          details:
            "Vaishnavi works on the core deep learning methodology for Oculis. She focuses on model development, training, and testing, aiming to build a reliable and accurate diagnostic system.",
        },
        {
          name: "Riya Patidar",
          role: "Backend & UX Lead",
          details:
            "Riya contributes to database design, authentication, and overall backend structure. She also supports UI/UX design and frontend development, helping ensure a smooth and secure user experience.",
        },
        {
          name: "Riya Sathe",
          role: "Frontend Integration Lead",
          details:
            "Riya works on frontend development and integrates the interface with backend APIs. She helps with end-to-end testing, deployment tasks, and organizing the final project documentation.",
        },
      ];


  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.container}>
      <header style={styles.header}></header>

      <div style={styles.contentWrapper}>
        <div style={styles.content}>
          <h1 style={styles.heading}>About Oculis</h1>
          <p style={styles.paragraph}>
            Oculis is an innovative AI-powered platform designed to revolutionize
            retinal disease detection. By leveraging advanced AI algorithms,
            Oculis analyzes Optical Coherence Tomography (OCT) images with
            unparalleled precision, enabling early and accurate diagnosis of
            conditions such as Diabetic Macular Edema (DME), Choroidal
            Neovascularization (CNV), Drusen, and Normal.
          </p>

          <h2 style={styles.subHeading}>Our Technology</h2>
          <p style={styles.paragraph}>
            At the heart of Oculis lies a sophisticated AI engine built on
            Convolutional Neural Networks (CNNs) and powered by TensorFlow. This
            framework allows real-time classification of OCT images, providing
            clinicians with rapid insights into retinal abnormalities.
          </p>

          <h2 style={styles.subHeading}>Our Team</h2>
          <div style={styles.teamGrid}>
            {teamMembers.map((member, idx) => {
              // Compose dynamic styles for normal and hover states
              const cardStyle = {
                ...styles.teamCardBase,
                ...(hoverIndex === idx ? styles.teamCardHovered : {}),
              };
              return (
                <div
                  key={member.name}
                  style={cardStyle}
                  onMouseEnter={() => setHoverIndex(idx)}
                  onMouseLeave={() => setHoverIndex(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Details about ${member.name}`}
                >
                  <div style={styles.teamName}>{member.name}</div>
                  <div style={styles.teamLine}></div>
                  <div style={styles.teamRole}>{member.role}</div>
                  {hoverIndex === idx && (
                    <div style={styles.popover}>
                      {member.details}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <h2 style={styles.subHeading}>Vision & Values</h2>
          <p style={styles.paragraph}>
            Our vision is to create a world where advanced AI technology is
            seamlessly integrated into healthcare, making early and accurate
            diagnoses accessible to all. We are committed to ethical AI
            development, ensuring patient privacy and data security.
          </p>
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="#" style={styles.footerLink}>
            Terms of Service
          </a>
        </div>
        <p>@2025 Oculis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
