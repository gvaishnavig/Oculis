
import React from "react";


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
      gridTemplateColumns: "repeat(auto-fit, minmax(158px, 1fr))",
      gap: "12px",
      padding: "16px",
    },
    teamCard: {
      textAlign: "center",
      paddingBottom: "16px",
    },
    teamImageWrapper: {
      padding: "0 16px",
    },
    teamImage: (url) => ({
      width: "100%",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      backgroundImage: `url(${url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
    teamName: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#0e1b15",
      marginTop: "8px",
    },
    teamRole: {
      fontSize: "14px",
      color: "#509577",
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

  return (
    <div style={styles.container}>
      {/* Header removed logo/title */}
      <header style={styles.header}></header>

      {/* Main content */}
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
            <div style={styles.teamCard}>
              <div style={styles.teamImageWrapper}>
                <div
                  style={styles.teamImage(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBV3Hv9k0Oo0XtS1IemeXRXPq6nK-GdwbGnE9-L4A-MzNh1CTr1sRI_DjlIakg0aykENZ7g1iuoVqshyGvIR_1LZqrJ-0zUJSIcFGP2I3Z7Ez6jaDCgJ0fGy3mYxjHkKCVg8KI5AbmnyM4KJ_sz5Sof9zAcZXzpriZ71IW4qRwqpF2cLfV6eNJTePd-jpB6vHgN63ELtTpUS4H0PwF2Jxuzl_fvyOmv1p6fcODbwYd7M3bydv91hrSSTylKqvnHfKWGZMKPA7XvlCTx"
                  )}
                />
              </div>
              <p style={styles.teamName}>Vaishnavi Gurram</p>
              <p style={styles.teamRole}>CEO</p>
            </div>

            <div style={styles.teamCard}>
              <div style={styles.teamImageWrapper}>
                <div
                  style={styles.teamImage(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBwAVyJfTGOvibrSQjkoRei31ijw3z0XKbA2cOLpJAx3vU3D_lnFRMuDvqCwO7TkbZ8k9ALN9o7qmMD-LGmd_ce6-u4-ey-nNXMW8SV8MhnShMYZdqnZwdUN3b8Uv2MX4e8A1_Ks-fdhs2kVNMQAT0z9aLJhiuWDsi12ddoWMjJN1hWqdFeudqXR3Z8QxtLhJrW4tboIujPFMqRvzv2JpYg1_Xn127KQPRUDFnIFg6mx0113zKO3CjjBRl2gWgut_-Z_pMFvhAss9u2"
                  )}
                />
              </div>
              <p style={styles.teamName}>Riya Patidar</p>
              <p style={styles.teamRole}>CTO</p>
            </div>

            <div style={styles.teamCard}>
              <div style={styles.teamImageWrapper}>
                <div
                  style={styles.teamImage(
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAIZeK_ks4ynx8iefdZQlpujPTSpsPyElK9sapaVYcT54jLy0QsO4mcIxvKNP3czHsFGeD05Uts5Rjtp9RG40hiIDpGAoiNgLRG1Y14NggTZbNp27xYnWNv6Wm51wUkRzpGPXXc4OfltwEXUBVsmc-CrIGM2O71zXYVwByvHNSV-RR-OWI6reaGiu7mqZitHn9gElwcYrU-UD_yGUwBdoAHgAbeLZUVP2zIbvpzO3suSk-aBn18AcDxY63ALfxgZ8M1gPxSGGNWvhrg"
                  )}
                />
              </div>
              <p style={styles.teamName}>Riya Sathe</p>
              <p style={styles.teamRole}>Head of Research</p>
            </div>
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

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="#" style={styles.footerLink}>
            Terms of Service
          </a>
        </div>
        <p>@2024 Oculis. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
