import "../styles/card-service.css";
import imgAds from "../../public/img/Google-AdWords-logo.png";
import desWebImg from "../../public/img/we-believe.png";
function CardService() {
  return (
    <section className="service-cont">
      <h1>Servicios</h1>
      <section className="section-1">
        <img src={imgAds} alt="google add imagen" className="img-serv" />
        <article>
          <h4>Campañas publicitarias en Google ads</h4>
          <p>
            Miles de personas buscan servicios de arquitectura, interiorismo o
            construcción en Google cada día. ¿El secreto para estar en su radar?
            Aparecer entre los primeros resultados. Con Google Ads, te ayudamos
            a conectar con quienes realmente necesitan tus servicios.
          </p>
        </article>
      </section>

      <section className="section-1">
        <article>
          <h4>Desarrollamos tu sitio web</h4>
          <p>
            Para destacar en Google, inspirar profesionalismo y demostrar tu
            experiencia, necesitas más que una web cualquiera. Diseñamos sitios
            estéticos, rápidos y con un lenguaje persuasivo que conecta con tus
            potenciales clientes y los convierte en oportunidades reales
          </p>
        </article>
        <img
          src={desWebImg}
          alt="imagen desarrollo web"
          className="img-serv-2"
        />
      </section>
      <div className="line-serv"></div>
    </section>
  );
}

export default CardService;
