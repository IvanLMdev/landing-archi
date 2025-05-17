import { FaWhatsapp } from "react-icons/fa";

const AsideForm = () => {
  return (
    <aside className="form-aside">
      <div className="aside-content">
        <h3 className="aside-title">
          Potencia tu estudio con herramientas hechas  <br /> para
           Arquitectos, Constructores e Interioristas
        </h3>
        
        <ul className="aside-benefits">
          <li className="benefit-item">
            <span className="benefit-icon">✔</span>
            <p>
              <strong>Páginas web profesionales para profesionales:</strong><br />
              Diseños adaptados a la <em>marca de tu empresa</em> y tu estilo.
            </p>
          </li>
          
          <li className="benefit-item">
            <span className="benefit-icon">✔</span>
            <p>
              <strong>Google Ads especializados en proyectos arquitectónicos:</strong><br />
              Atraemos clientes que buscan <em>exactamente lo que ofreces</em>.
            </p>
          </li>
          
          <li className="benefit-item">
            <span className="benefit-icon">✔</span>
            <p>
              <strong>Asesoría 1:1 gratuita:</strong><br />
              Te ayudamos a crear un <em>plan de marketing personalizado</em> sin costo.
            </p>
          </li>
        </ul>

        <a 
          href="https://wa.link/2j011u" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Quiero un plan gratuito
        </a>
      </div>
    </aside>
  );
};

export default AsideForm;