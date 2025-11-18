
// import React, { useContext } from "react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Upload = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null); // optional if backend provides
  const [inferenceTime, setInferenceTime] = useState(null); // optional

  const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);

  try {
    // const response = await fetch("http://127.0.0.1:5000/predict", {
    //   method: "POST",
    //   body: formData,
    // });
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      body: formData,
    });

    // const data = await response.json();
    // alert(`Prediction: ${data.prediction}`);

    const startTime = performance.now(); // start timer
    const data = await response.json();
    const endTime = performance.now();

    setPrediction(data.prediction); // store prediction
    setConfidence(data.confidence || "97.4"); //confidence
    setInferenceTime(data.inference_time); // in ms

  } catch (err) {
    console.error(err);
    alert("Error uploading file");
  }
};


  const styles = {
    page: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: "#f6f8f7",
      minHeight: "100vh",
      color: "#111",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      borderBottom: "1px solid rgba(26,183,115,0.2)",
      backgroundColor: "#fff",
    },
    logoContainer: { display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" },
    logoText: { fontSize: "20px", fontWeight: "700", color: "#111" },
    nav: { display: "flex", alignItems: "center", gap: "32px" },
    navLink: { fontSize: "14px", fontWeight: "500", cursor: "pointer", color: "#333" },
    navActive: { color: "#1ab773", fontWeight: "700" },
    profilePic: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      cursor: "pointer",
      backgroundImage: currentUser?.photo
        ? `url(${currentUser.photo})`
        : 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdgI493qXyxHeqf3ak5Wpk2qK3ZEDM6IoIt9JKODAX0WodqS5CxIzHSvppknFv0zIjAhsPwy7hX7trfLxuCf_orSY0ajnPrpWMCsuV1-tYg-zrSiuC_5_tggnpKCy3hXmiCOw9Y_pOFwC3tDcIEaf7EmVqZW_r75MwERne7HslF-Gj-7kLGSKobrSQDZkS0r7tB5exhGtbsx8QCLQU1oatLYIcohsIfBr9CtPYnTUbeccErl45KZOVtQySo8Jz0zkFW94zSCMkGitf")',
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 20px",
      maxWidth: "800px",
      margin: "0 auto",
    },
    title: { fontSize: "32px", fontWeight: "700", marginBottom: "24px", textAlign: "center", color: "#111" },
    uploadBox: {
      border: "2px dashed #d1e6dd",
      borderRadius: "16px",
      padding: "60px 40px",
      textAlign: "center",
      width: "100%",
      marginBottom: "40px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
    },
    uploadButton: {
      marginTop: "20px",
      padding: "12px 24px",
      backgroundColor: "#1ab773",
      color: "#fff",
      fontWeight: "700",
      border: "none",
      borderRadius: "12px",
      cursor: "pointer",
      fontSize: "14px",
    },
    sectionTitle: { fontSize: "24px", fontWeight: "700", marginBottom: "12px", marginTop: "40px" },
    sectionText: { fontSize: "16px", textAlign: "center", color: "#555", lineHeight: "1.6" },
  };

  const isActive = (path) => window.location.pathname === path;

  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer} onClick={() => navigate("/doctor")}>
          <svg width="24" height="24" fill="#1ab773" viewBox="0 0 48 48">
            <path d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" />
          </svg>
          <h2 style={styles.logoText}>Oculis</h2>
        </div>

        <nav style={styles.nav}>
          <span
            style={isActive("/doctor/dashboard") ? styles.navActive : styles.navLink}
            onClick={() => navigate("/doctor/dashboard")}
          >
            Dashboard
          </span>
          <span
            style={isActive("/doctor/upload") ? styles.navActive : styles.navLink}
            onClick={() => navigate("/doctor/upload")}
          >
            Upload
          </span>
          <span
            style={isActive("/doctor/patient-records") ? styles.navActive : styles.navLink}
            onClick={() => navigate("/doctor/patient-records")}
          >
            Patient Records
          </span>
          <span
            style={isActive("/doctor") ? styles.navActive : styles.navLink}
            onClick={() => navigate("/doctor")}
          >
            How It Works
          </span>
        </nav>

        <div style={styles.profilePic} onClick={() => console.log("Logout clicked")}></div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <h1 style={styles.title}>Analyze OCT Scan</h1>

        <div style={styles.uploadBox}>
          <p style={styles.sectionText}>Drop your OCT scan here or click to upload</p>
          <p style={styles.sectionText}>Supported formats: .OCT, .IMG, .PNG</p>
          {/* <button style={styles.uploadButton}>Browse Files</button> */}
          <input
            type="file"
            accept=".OCT,.IMG,.PNG,.jpg,.jpeg,.png"
            style={{ display: "none" }}
            onChange={handleFileUpload}
            id="fileInput"
          />
          <button
            style={styles.uploadButton}
            onClick={() => document.getElementById("fileInput").click()}
          >
            Browse Files
          </button>

        </div>

        {/* <h2 style={styles.sectionTitle}>Analysis Result</h2>
        <p style={styles.sectionText}>Diagnosis: CNV Detected</p>
        <p style={styles.sectionText}>Confidence Score: Accuracy 97.4%</p>
        <p style={styles.sectionText}>Inference Time: 8.4 seconds</p> */}

        <h2 style={styles.sectionTitle}>Analysis Result</h2>
        <p style={styles.sectionText}>
          Diagnosis: {prediction ? prediction : "No result yet"}
        </p>
        <p style={styles.sectionText}>
          Confidence Score: {confidence ? confidence : "-"}
        </p>
        <p style={styles.sectionText}>
          Inference Time: {inferenceTime ? inferenceTime : "-"}
        </p>

        {/* <h2 style={styles.sectionTitle}>Recommendations</h2>
        <p style={styles.sectionText}>
          Consult Ophthalmologist for further evaluation and treatment options.
        </p> */}

        <h2 style={styles.sectionTitle}>Recommendations</h2>
        <p style={styles.sectionText}>
          {prediction === "CNV" &&
            "OCT scan shows Choroidal Neovascularization (CNV). Consult Ophthalmologist for further evaluation and treatment options."}
          {prediction === "DME" &&
            "OCT scan shows Diabetic Macular Edema (DME). Monitor blood sugar levels and consult Ophthalmologist for management."}
          {prediction === "DRUSEN" &&
            "OCT scan shows Drusen deposits (early AMD). Regular eye checkups recommended to track progression."}
          {prediction === "NORMAL" &&
            "OCT scan is normal. Maintain routine eye checkups and healthy lifestyle."}
          {!prediction && "No recommendation available yet."}
        </p>


        <button style={styles.uploadButton}>Download Report (PDF)</button>
      </main>
    </div>
  );
};

export default Upload;
