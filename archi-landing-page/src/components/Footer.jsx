import "../styles/footer.css";
import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="ul-cont-footer">
        <ul className="ul-footer">
          <h3 className="h3-footer">Contactos</h3>
          <li>
            <a href="https://wa.link/u9ymky" target="_blank">
              {" "}
              <MdOutlinePhone color="steelBlue" />: +54 9 11 6970-7268
            </a>
          </li>
          <li>
            <MdEmail color="steelBlue" />: archi.growth.5@gmail.com
          </li>
          <li>
            <address>
              <FaMapMarkerAlt color="steelBlue" />: Buenos Aires, Argentina
            </address>
          </li>
        </ul>
        <ul className="ul-footer">
          <h3 className="h3-footer">Redes sociales</h3>
          <nav className="icon-nav-footer">
            <a
              href="https://wa.link/u9ymky"
              target="_blank"
              className="anchor-nav-footer _wsp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/archi.growth/"
              target="_blank"
              className="anchor-nav-footer _ig"
            >
              <FaInstagram />
            </a>
          </nav>
        </ul>
        <ul className="ul-footer">
          <h3 className="h3-footer">Newslatter</h3>
          <form
            action="https://formsubmit.co/archi.growth.5@gmail.com"
            method="POST"
            className="newslatter"
          >
            <input type="email" name="suscrictor" placeholder="Tu Email :" />
            <button type="submit">Suscribirme</button>
            <input
              type="hidden"
              name="_next"
              value={"https://archigrowth.lat"}
            />
            <input type="hidden" name="_captcha" value={false} />
          </form>
          <p className="newslatter-p">
            Suscribete si quieres resirvir noticias y ofertas en tu correo
          </p>
        </ul>
      </section>
      <p className="copy --flex-center">
        <FaRegCopyright />
        2025 ArchiGrowth. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
