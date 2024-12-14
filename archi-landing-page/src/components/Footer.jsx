import '../styles/footer.css'
import { FaRegCopyright } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='footer'>
       <ul className='ul-contact'>
            <h3>contactos</h3>
            <li><a href="https://wa.link/u9ymky"> <MdOutlinePhone /> +54 9 11 6970-7268</a></li>
            <li><a href="https://wa.link/paj2g2"> <MdOutlinePhone /> +54 9 11 6415-1597</a></li>            
        </ul>
        <p className='copy'>Copyright<FaRegCopyright />2025, Archi Growth</p> 
    </footer>
  )
}

export default Footer