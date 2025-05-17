import DropQuestions from "./other-comp/DropQuestions";
import NavTemplateDesign from "./other-comp/NavTemplateDesign.jsx";
import logo from "../../public/logohorizontal.png";
import { Link } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";
import "../styles/preguntas-frecuentes.css";
import Footer from './Footer.jsx'

const PreguntasFrecuentes = () => {
  return (
    <div className="--container">
      <header className="header-question">
        <Link to="/">
          <figure className="logo-question">
            <img src={logo} alt="logo de archi growth" />
          </figure>
        </Link>

        <h1 className="title-question">
          Desarrollo web: Preguntas frecuentes
        </h1>

        <Link to="/" className="home-btn">
          <HiOutlineHomeModern size={"25px"}/>
        </Link>
      </header>

      <section className="cont-question">
        <aside className="left_ aside-question ">
          <h3>¿Por qué una web es clave para atraer más clientes?</h3>
          <ul>
            <li>
              Cuando alguien busque servicios como el tuyo en Google y no te
              encuentre, simplemente irá con la competencia.
            </li>
            <li>
              Tener una web bien posicionada te hace visible y genera confianza
              al instante.
            </li>
          </ul>
          <br />
          <h3>
            ¿Cómo una web bien diseñada genera confianza y diferenciación?
          </h3>
          <ul>
            <li>
              Una página web no es solo un "catálogo digital", es tu carta de
              presentación. Cuando alguien visita tu web, en segundos decide si
              confía en tu trabajo o sigue buscando.
            </li>
            <li>📌 Una web bien diseñada:</li>
            <li>✅ Muestra profesionalismo y genera credibilidad.</li>
            <li>
              ✅ Permite que las personas conozcan tu estilo y experiencia.
            </li>
            <li>
              ✅ Diferencia tu marca de arquitectos genéricos que solo tienen
              redes sociales.
            </li>
            <li>
              ✅ Asegura que la información de contacto esté clara y accesible
              en todo momento
            </li>
            <li>
              Los profesionales y empresas más reconocidas tienen su propia web
              porque saben que es la base de su presencia digital. Sin ella,
              dependen de plataformas externas que pueden cambiar sus reglas o
              dejar de funcionar.
            </li>
          </ul>
          <br />
          <h3>WEBS 75% OFF</h3>
          <NavTemplateDesign />
        </aside>
        <DropQuestions />
      </section>
      <Footer/>
    </div>
  );
};

export default PreguntasFrecuentes;
