
import './App.css'
import { Route,Routes } from "react-router-dom";
import'./Landing_page/HomePage';
import About from './Landing_page/About';
import Navbar from './Components/Navbar';
//import Contact from './Landing_page/ContactPage';
//import FAQ from './Landing_page/FAQ_page';


function App() {
 return(
  <>
  <Navbar/>
   <div>
   <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/About' element={<About/>}/>
       
      
       
   </Routes>
   </div>
    </>
 );
     
}

export default App
