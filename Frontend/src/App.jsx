 
import './App.css';
import { AuthProvider } from "./Context/AuthContext";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from './Landing_page/HomePage';


import About from './Landing_page/About';
import Login from './Landing_page/Login';
import ContactPage from './Landing_page/ContactPage';
import Navbar from './Components/Navbar';
import PatientDashboard from './Landing_page/PatientHome';
import HowItWorks from './Landing_page/Guide';
import Dashboard from './Landing_page/Dashboard';

// ✅ (Optional) Scroll to top when navigating
import { useEffect } from "react";
import Register from './Landing_page/register';
import MyHealthRecords from './Landing_page/ViewRecords';
import Upload from './Landing_page/Upload';
import PatientRecords from './Landing_page/PatientRecords';

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
  const NavbarWrapper = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register","/patient","/doctor","/patient/records","/doctor/dashboard","/doctor/upload" ,"/doctor/patient-records" ];
  const shouldHide = hideNavbarRoutes.includes(location.pathname);

  return shouldHide ? null : <Navbar />;
};

  return (
    <>
      <AuthProvider>
        
           <NavbarWrapper />
        <Routes>
        

        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Patient" element={<PatientDashboard/>}/>
        <Route path="/doctor" element={<HowItWorks/>}/>
        <Route path="/patient/records" element={<MyHealthRecords />} />
        <Route path="/doctor/dashboard" element={<Dashboard/>}/>
        <Route path="/doctor/upload" element={<Upload/>}/>
        <Route path="/doctor/patient-records" element={<PatientRecords/>}/>

      
      </Routes>
     
      </AuthProvider>
    </>
  );
}

export default App;
