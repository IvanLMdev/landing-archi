import "../styles/service.css";
import Dropdown from "./other-comp/Dropdown";
import CardService from "./other-comp/CardService";
import { info_servicios as data } from "../utilities/info_servicios";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <section className="--container">
          <h1 className="--title">Servicios</h1>
        <section className="service-cont">
          <section className="card-serv-cont">
            <CardService
              src={data[0].src}
              alt={data[0].alt}
              title={data[0].title}
              article={data[0].article}
            />
          </section>

          <section className="card-serv-cont">
            <CardService
              src={data[1].src}
              alt={data[1].alt}
              title={data[1].title}
              article={data[1].article}
            />
            <section className="link-serc-cont">
              <Dropdown />
              <Link to={"preguntas"} className="dropdown-cont pruguntas-btn --flex-center">
                Preguntas Frecuentes sobre las webs en descuento
              </Link>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Service;
