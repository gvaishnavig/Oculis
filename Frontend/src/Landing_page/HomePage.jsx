import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function OculisLanding() {
  // Inject Google Font (Manrope) into document head
  const navigate = useNavigate();
 
  useEffect(() => {
    const id = "oculis-manrope-font";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap";
      document.head.appendChild(link);
    }
    return () => {};
  }, []);

  // Inline styles mapping the original HTML/Tailwind look (light theme)
  const s = {
    page: {
      fontFamily: "'Manrope', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      color: "#264653",
      backgroundColor: "#FFFFFF",
      minHeight: "100vh",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      overflowX: "hidden",
    },
    containerOuter: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    pageWrapper: {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 auto",
    },
    topBarWrap: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      /* md:px-10 lg:px-20 xl:px-40 equivalent */
      // we'll use responsive-ish paddings via maxWidth container below
      display: "flex",
      justifyContent: "center",
      position: "sticky",
      top: 0,
      zIndex: 50,
      backgroundColor: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(6px)",
    },
    layoutContentContainer: {
      width: "100%",
      maxWidth: "1200px", // approx max-w-7xl
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      borderBottom: "1px solid #E2E8F0",
      padding: "12px 0",
      whiteSpace: "nowrap",
    },
    brandRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      color: "#264653",
    },
    logoBox: {
      width: 36,
      height: 36,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#2A9D8F",
      fontSize: 20,
    },
    siteTitle: {
      fontSize: 20,
      fontWeight: 800,
      margin: 0,
    },
    navDesktop: {
      display: "flex",
      alignItems: "center",
      gap: "1.25rem",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "2rem",
      color: "#264653",
    },
     navLink: {
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "none",
      color: "#264653",
      cursor: "pointer", // ✅ ADDED — proper clickable cursor
      transition: "color 0.2s ease",
    },
    authButtonsWrap: {
      display: "flex",
      gap: 8,
      alignItems: "center",
    },
    loginBtn: {
      minWidth: 84,
      height: 40,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      background: "rgba(42,157,143,0.2)",
      color: "#2A9D8F",
      fontWeight: 800,
      fontSize: 14,
      border: "none",
      cursor: "pointer",
      padding: "0 16px",
    },
    registerBtn: {
      minWidth: 84,
      height: 40,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      background: "#2A9D8F",
      color: "#fff",
      fontWeight: 800,
      fontSize: 14,
      border: "none",
      cursor: "pointer",
      padding: "0 16px",
    },

    // Main / hero area wrapper
    main: {
      flex: "1 1 auto",
    },
    heroOuterPad: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      display: "flex",
      justifyContent: "center",
      paddingTop: "1.25rem",
      paddingBottom: "1.25rem",
    },
    heroInner: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    heroCard: {
      minHeight: 520,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 16,
      color: "#fff",
      padding: "40px 28px",
      borderRadius: 12,
      backgroundSize: "cover",
      backgroundPosition: "center",
      // backgroundImage set inline below
    },
    heroTitle: {
      margin: 0,
      fontSize: 36,
      fontWeight: 900,
      lineHeight: 1.05,
      letterSpacing: "-0.6px",
      maxWidth: 900,
    },
    heroSubtitle: {
      margin: 0,
      fontSize: 16,
      color: "#E6EEF0",
      maxWidth: 900,
    },
    heroButtonsRow: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap",
    },
    heroPrimaryBtn: {
      height: 48,
      padding: "0 20px",
      borderRadius: 10,
      background: "#2A9D8F",
      color: "#fff",
      border: "none",
      fontWeight: 700,
      cursor: "pointer",
      fontSize: 16,
    },
    heroSecondaryBtn: {
      height: 48,
      padding: "0 20px",
      borderRadius: 10,
      background: "rgba(255,255,255,0.18)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.28)",
      fontWeight: 700,
      cursor: "pointer",
      backdropFilter: "blur(6px)",
      fontSize: 16,
    },

    // Features section
    featuresSectionOuter: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "2.5rem",
      paddingBottom: "2.5rem",
      backgroundColor: "#F4F4F7",
    },
    featuresInner: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "30px 16px",
    },
    featuresHeader: { textAlign: "center" },
    featuresTitle: {
      margin: 0,
      fontSize: 32,
      fontWeight: 800,
      lineHeight: 1.05,
    },
    featuresSubtitle: {
      margin: "8px 0 0 0",
      color: "#708087",
      fontSize: 16,
    },
    featuresGrid: {
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    featureCard: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      textAlign: "left",
      padding: 20,
      borderRadius: 10,
      background: "#FFFFFF",
      border: "1px solid #E2E8F0",
    },
    featureIconWrap: {
      padding: 10,
      borderRadius: 10,
      background: "rgba(42,157,143,0.12)",
      color: "#2A9D8F",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    featureTitle: {
      margin: 0,
      fontSize: 16,
      fontWeight: 700,
      color: "#264653",
    },
    featureBody: {
      margin: 0,
      color: "#708087",
      fontSize: 14,
    },

    // Benefits section
    benefitsOuter: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    benefitsInner: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16,
      padding: "12px",
    },
    benefitsTitle: { fontSize: 22, fontWeight: 800, margin: 0, color: "#264653" },
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      width: "100%",
    },
    benefitCard: {
      display: "flex",
      gap: 12,
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 20,
      borderRadius: 10,
      background: "#FFFFFF",
      border: "1px solid #E2E8F0",
    },

    // Integration section
    integrationOuter: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "2rem",
      paddingBottom: "2rem",
      backgroundColor: "#F4F4F7",
    },
    integrationInner: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      gap: 24,
      alignItems: "center",
      padding: 16,
      flexWrap: "wrap",
    },
    integrationLeft: {
      flex: "1 1 320px",
    },
    integrationRight: {
      flex: "1 1 320px",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12,
      maxWidth: 360,
    },
    logoBox: {
      padding: 16,
      borderRadius: 10,
      background: "#FFFFFF",
      border: "1px solid #E2E8F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    // FAQ
    faqOuter: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    faqInner: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: 16,
    },
    faqTitleWrap: { textAlign: "center" },
    faqTitle: { fontSize: 24, fontWeight: 800, margin: 0 },

    detailsCard: {
      borderRadius: 10,
      background: "#F4F4F7",
      padding: 12,
      border: "1px solid #E2E8F0",
    },

    // CTA
    ctaOuter: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "2rem",
      paddingBottom: "2rem",
    },
    ctaInner: {
      width: "100%",
      maxWidth: "1200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    ctaBox: {
      background: "linear-gradient(90deg, rgba(42,157,143,0.9), rgba(33,158,188,0.9))",
      color: "#fff",
      borderRadius: 16,
      padding: 28,
      textAlign: "center",
      width: "100%",
    },
    ctaTitle: { fontSize: 26, fontWeight: 800, margin: 0 },
    ctaSub: { marginTop: 10, color: "#E6EEF0", maxWidth: 720, marginLeft: "auto", marginRight: "auto" },
    ctaButtonsWrap: { marginTop: 12, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" },
    ctaPrimary: {
      background: "#fff",
      color: "#2A9D8F",
      border: "none",
      padding: "10px 18px",
      borderRadius: 10,
      fontWeight: 700,
      cursor: "pointer",
    },
    ctaSecondary: {
      background: "transparent",
      color: "#fff",
      border: "2px solid white",
      padding: "10px 18px",
      borderRadius: 10,
      fontWeight: 700,
      cursor: "pointer",
    },

    // responsive helper (we'll inline adaptively)
    smallStack: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
  };

  // hero background URL exactly from your HTML
  const heroBg = `linear-gradient(75deg, rgba(38, 70, 83, 0.7) 0%, rgba(38, 70, 83, 0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl9TKRTrCqd090mHfht0nACUkmpkMRPUG2yNjMOQwKBz4nEKSqrZEAbUj_WiH1gs3S_jMKptgDZN8oTQf0p1-u200p0ZhnD3Oh4SraVb5-Vh74UBu5FyVpxZEM-eTWO7862o1I-2puqw0DXltTTH0uOX87Kp1ruUsG2KpurQux0Gts20Ie7kUXh27KuOhQ7OboTdJPPjt_ipouw4b8ceZkG7BAGU7D5hCB_MOeIfwkW-HK_PQ482S6M48wYLWEY7lMrtoiC53KsRYX")`;

  return (
    <div style={s.page}>
      <div style={s.containerOuter}>
        <div style={s.pageWrapper}>
          

          {/* Main */}
          <main style={s.main}>
            {/* HERO */}
            <div style={s.heroOuterPad}>
              <div style={s.heroInner}>
                <div style={{ ...s.heroCard, backgroundImage: heroBg }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 800 }}>
                    <h1 style={s.heroTitle}>
                      AI-Powered Retinal Analysis. Predictive Insight for Better Eye Care.
                    </h1>
                    <h2 style={s.heroSubtitle}>
                      Oculis revolutionizes eye care by accurately detecting diseases like DME, CNV, and Drusen from OCT scans, enabling early intervention and improved patient outcomes.
                    </h2>
                  </div>

                  
                </div>
              </div>
            </div>

            {/* FEATURES */}
            <div style={s.featuresSectionOuter}>
              <div style={s.featuresInner}>
                <div style={s.featuresHeader}>
                  <h1 style={s.featuresTitle}>Advanced Features for Modern Eye Care</h1>
                  <p style={s.featuresSubtitle}>Our platform is built with cutting-edge technology to provide reliable, fast, and secure analysis of OCT retinal scans.</p>
                </div>

                <div style={s.featuresGrid}>
                  {/* four feature cards */}
                  <div style={s.featureCard}>
                    <div style={s.featureIconWrap}>
                      <span style={{ fontSize: 20 }}>👁️</span>
                    </div>
                    <div>
                      <h2 style={s.featureTitle}>Accurate Disease Detection</h2>
                      <p style={s.featureBody}>Leverage our highly trained AI to detect signs of DME, CNV, and Drusen with unparalleled precision.</p>
                    </div>
                  </div>

                  <div style={s.featureCard}>
                    <div style={s.featureIconWrap}>
                      <span style={{ fontSize: 20 }}>🤖</span>
                    </div>
                    <div>
                      <h2 style={s.featureTitle}>AI-Powered OCT Analysis</h2>
                      <p style={s.featureBody}>Our proprietary algorithms analyze every detail of an OCT scan to provide comprehensive insights.</p>
                    </div>
                  </div>

                  <div style={s.featureCard}>
                    <div style={s.featureIconWrap}>
                      <span style={{ fontSize: 20 }}>⚡</span>
                    </div>
                    <div>
                      <h2 style={s.featureTitle}>Fast, Actionable Results</h2>
                      <p style={s.featureBody}>Receive detailed reports in minutes, allowing for quicker diagnosis and treatment planning.</p>
                    </div>
                  </div>

                  <div style={s.featureCard}>
                    <div style={s.featureIconWrap}>
                      <span style={{ fontSize: 20 }}>🔐</span>
                    </div>
                    <div>
                      <h2 style={s.featureTitle}>Secure & Compliant Data</h2>
                      <p style={s.featureBody}>Your patient data is protected with end-to-end encryption and HIPAA-compliant protocols.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div style={s.benefitsOuter}>
              <div style={s.benefitsInner}>
                <h2 style={s.benefitsTitle}>Benefits for Healthcare Professionals</h2>

                <div style={s.benefitsGrid}>
                  <div style={s.benefitCard}>
                    <div style={{ fontSize: 26, color: "#2A9D8F" }}>📈</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#264653" }}>Improve Efficiency</h3>
                      <p style={{ margin: "6px 0 0 0", color: "#708087", fontSize: 14 }}>Automate the initial scan analysis to save valuable clinical time and focus on patient care.</p>
                    </div>
                  </div>

                  <div style={s.benefitCard}>
                    <div style={{ fontSize: 26, color: "#2A9D8F" }}>🎯</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#264653" }}>Enhance Accuracy</h3>
                      <p style={{ margin: "6px 0 0 0", color: "#708087", fontSize: 14 }}>Reduce diagnostic errors with AI-driven second opinions, backed by extensive data.</p>
                    </div>
                  </div>

                  <div style={s.benefitCard}>
                    <div style={{ fontSize: 26, color: "#2A9D8F" }}>❤️</div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#264653" }}>Better Patient Outcomes</h3>
                      <p style={{ margin: "6px 0 0 0", color: "#708087", fontSize: 14 }}>Track disease progression and treatment effectiveness with consistent, objective data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTEGRATIONS */}
            <div style={s.integrationOuter}>
              <div style={s.integrationInner}>
                <div style={s.integrationLeft}>
                  <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#264653" }}>Seamless Integration &amp; Compatibility</h2>
                  <p style={{ marginTop: 8, color: "#708087" }}>Oculis is designed to fit into your existing workflow. Integrate with leading EMR/EHR systems and telemedicine platforms to streamline patient data management.</p>
                 
                </div>

                <div style={s.integrationRight}>
                  <div style={s.logoBox}>
                    <img
                      alt="Epic"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa904UwGNJ6gtcPAkX9zc56rZ51sZk_lssKG5RyB2H2bD4yjuJjzxXaYxowaH6cZulPoROWmc4Mk3iWgw894ey843-Zk9iS8rCl8mzvuyF0zc47fcX-7VR7l3f85FbtT1HoOlbL7yEesUmMB6Fay3cv7E-af6dz2lRbJAEkK15YYUdQmKzuDp_4OMHEI6bo6xb7LLJ6kzfsxr6KxJGzb23aH70ci95X9UxigZy-QqRIDaOsvJ6Cs_0hqgyTcyJi6DFrWyV6Su-lF-W"
                      style={{ maxWidth: "100%", height: 28, objectFit: "contain" }}
                    />
                  </div>

                  <div style={s.logoBox}>
                    <img
                      alt="Cerner"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWYCckUEcZrBikARgFCf_a1uPgmdOFjXXCO4DkcDA_rGGCTjoardwR0cvKPS-2gVWFcVeB3e9MBsFASc7t7WfGL20PVWxm_WY354WBzso3WB4x3icc2GlRq7eeOeM5cVFv98nZL15bOhgjL_UJ4aj0FSvCaqABSqbF9alrmxztuvHNkCGmnC0o4jnubgkJ1J6gbi4Lg-yHhafvz1M0Rw5F0NOAJ89I7UdfG8rlhfS-Wzz5MfWHWJ8Or3E9Sx3xRGeQ4bQOOqjoIXry"
                      style={{ maxWidth: "100%", height: 28, objectFit: "contain" }}
                    />
                  </div>

                  <div style={s.logoBox}>
                    <img
                      alt="Allscripts"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFHYdGxsb6v3oaSf77rnu6bcGcBz8VoadoV8AVeOcaLBzGS0OG5xuG26eGAzbOl1pVoy7qo9quYezKUe3aJO50eAcujvsyRly6xsuMEN55A8MEFCEXd90a9j2HvEnsvDoTovXUlhQ7csRyI04TSuhkLvcprrqB6hGRy5tVbngEYI8NGgyIjg8hZ7zTIxAmxlyXQf_ykvD479I1XW6O6Plgr2DN944dMywdilseTCkfvHbvzsxElLYBUOqr_ipSicK8GdqaN0ccpCGn"
                      style={{ maxWidth: "100%", height: 24, objectFit: "contain" }}
                    />
                  </div>

                  <div style={s.logoBox}>
                    <img
                      alt="Teladoc"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWxuAXnFO_MMbclyivcMWCD4hLdzlUOA--mpS2bnY9UHyuAO6EYMMBwOnQ8NUzNzAG2aBafJ1pZ0ZwlB6ZwhsTZlEFB8USduxaFBMYLJLY0aGuthca5EMmX6jYaF2xu3uY_DkL7jhCjvrK2x5LHF3urFUMK0QTFf8sjJyVatjOZuitMichY0pwsOJguZMxzAysj-q210MNfOG5l-WI9ZAbFSgqJ4Zt8u_THZTVj7WKanS05uzZARd2IOJBuJIXbRxdLhUpKde4Vv0A"
                      style={{ maxWidth: "100%", height: 24, objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div style={s.faqOuter}>
              <div style={s.faqInner}>
                <div style={s.faqTitleWrap}>
                  <h2 style={s.faqTitle}>Frequently Asked Questions</h2>
                </div>

                <div style={{ maxWidth: 720, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
                  <details style={s.detailsCard}>
                    <summary style={{ fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      Is Oculis HIPAA compliant?
                      <span style={{ fontSize: 20 }}>▾</span>
                    </summary>
                    <p style={{ marginTop: 8, color: "#708087" }}>
                      Yes, the Oculis platform is fully HIPAA compliant. We prioritize data security and patient privacy, employing end-to-end encryption and secure, compliant cloud infrastructure to protect all data.
                    </p>
                  </details>

                  <details style={s.detailsCard}>
                    <summary style={{ fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      How accurate is the AI model?
                      <span style={{ fontSize: 20 }}>▾</span>
                    </summary>
                    <p style={{ marginTop: 8, color: "#708087" }}>
                      Our AI model is trained on a vast and diverse dataset of millions of OCT scans and has been validated in clinical studies, demonstrating over 97% accuracy in detecting key retinal diseases like DME, CNV, and Drusen.
                    </p>
                  </details>

                  <details style={s.detailsCard}>
                    <summary style={{ fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      What image file types are supported?
                      <span style={{ fontSize: 20 }}>▾</span>
                    </summary>
                    <p style={{ marginTop: 8, color: "#708087" }}>
                      Oculis supports a wide range of common medical imaging formats, JPG, PNG, and JPEG. Our platform is designed for easy upload and compatibility with most modern OCT imaging devices.
                    </p>
                  </details>

                  
                </div>
              </div>
            </div>

           

          </main>
        </div>
      </div>
    </div>
  );
}

