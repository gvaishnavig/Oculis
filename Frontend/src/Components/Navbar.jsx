import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        borderBottom: "2px solid #32a862",
        boxShadow: "0 6px 10px rgba(0,255,255,0.3)",
        marginBottom: "8rem",
        backgroundColor: "#3D9970",
        padding: "0.3rem 1rem", // reduced navbar padding
        minHeight: "60px",     // smaller height
      }}
    >

       
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="images/Oculis-Logo.png"
            style={{ width: "120px", marginRight: "2rem" }} // smaller logo
            alt="Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0 gap-2">
            <li className="nav-item">
              <Link to ="/"
                className="nav-link fs-6"
                style={{
                  color: "#f5f5f5",
                  transition: "all 0.3s ease",
                  padding: "0.3rem 0.8rem", // reduced link padding
                }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to ="/About"
                className="nav-link fs-6"
                style={{
                  color: "#f5f5f5",
                  transition: "all 0.3s ease",
                  padding: "0.3rem 0.8rem",
                }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQ"
                className="nav-link fs-6"
                style={{
                  color: "#f5f5f5",
                  transition: "all 0.3s ease",
                  padding: "0.3rem 0.8rem",
                }}>
              
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact"
                className="nav-link fs-6"
                style={{
                  color: "#f5f5f5",
                  transition: "all 0.3s ease",
                  padding: "0.3rem 0.8rem",
                }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .nav-link:hover {
            color: #224831ff !important;
            background-color: rgba(255, 255, 255, 0.15);
            border-radius: 6px;
            transform: scale(1.03);
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
