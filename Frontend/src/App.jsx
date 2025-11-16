 
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from './Landing_page/HomePage';


import About from './Landing_page/About';
import Login from './Landing_page/Login';
import ContactPage from './Landing_page/ContactPage';

// ✅ (Optional) Scroll to top when navigating
import { useEffect } from "react";
import Register from './Landing_page/register';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  // ✅ Hide Navbar only on specific routes (like login/register)
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      

      {/* ✅ All pages replace each other fully */}
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      
      </Routes>
    </>
  );
}

export default App;
