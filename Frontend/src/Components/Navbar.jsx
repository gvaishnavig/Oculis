function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{
        borderBottom:'2px solid #32a862',
        boxShadow:'0 6px 10px rgba(0,255,255,0.3)',
        marginBottom:"8rem",
        backgroundColor:"#3D9970"
        
      }}
    >
      <div class="container ">
        <a class="navbar-brand" href="#">
          <img
            src="images/Oculis-Logo.png"
            style={{ width: "20%", marginRight: "50rem" ,paddingRight:"5rem"}}
            alt="Logo"
          />
        </a>
         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link active fs-6" style={{color:"#f5f5f5"}} aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fs-6" style={{color:"#f5f5f5"}} href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fs-6" style={{color:"#f5f5f5"}} href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fs-6" style={{color:"#f5f5f5"}} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
