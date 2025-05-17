import "../styles/nav-bar.css";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import logo from '../../public/Logohorizontal.png'

const NavBar = () => {
  return (
    <nav className="nav-cont">
      
      <figure className="logo-cont">
        <img src={logo} alt="logo"  className="logo-svg"/> 
      </figure>
      
      <div className="btn-cont">
        
        <a href="https://wa.link/u9ymky" target="_blank" className="anchor-nav">  
          <FaWhatsapp />
        </a>
        
        <a href="https://instagram.com/archi.growth/" target="_blank" className="anchor-nav">
          <FaInstagram />
        </a>
      
      </div>
    
    </nav>
  );
};

export default NavBar;
