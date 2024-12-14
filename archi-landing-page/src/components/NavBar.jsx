import "../styles/nav-bar.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import logo from '../../public/Logohorizontal.svg'

const NavBar = () => {
  return (
    <nav className="nav-cont">
      
      <div className="logo-cont">
        <img src={logo} alt="logo"  className="logo-svg"/> 
      </div>
      
      <div className="btn-cont">
        
        <a href="https://wa.link/u9ymky" className="anchor-nav">  
          <FaWhatsapp color="#fff" />
        </a>
        
        <a href="https://instagram.com/archi.growth/"  className="anchor-nav">
          <FaInstagram color="#fff"/>
        </a>
      
      </div>
    
    </nav>
  );
};

export default NavBar;
