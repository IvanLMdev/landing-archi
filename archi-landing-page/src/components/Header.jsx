import "../styles/header.css";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <section className="stiky-cont">
      <NavBar />
      <section className="header-cont">
        <header className="header">
          <h1 className="header-tittle">
            Te ayudamos <br /> a vender tus <br /> servicios de <br />
            arquitectura e interiorismo
          </h1>
          <h2 className="header-tittle-d">Experiencia. Compromiso. Valor.</h2>
        </header>
      </section>
    </section>
  );
};

export default Header;
