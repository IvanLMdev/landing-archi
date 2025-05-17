import "../styles/new-form.css";
import AsideForm from "../components/AsideForm.jsx"; //nuevo componente Aside

const NewForm = () => {
  const onSubmit = () => {
    alert("Se enviará este correo...");
  };

  return (
    <section className="--container">
      <h1 className="--title">Contacto</h1>
      <div className="content-form ">
        <form
          action="https://formsubmit.co/archi.growth.5@gmail.com"
          method="POST"
          className="form"
          onSubmit={onSubmit}
        >
          <div className="form-left">
            <h2 className="title-form">Consulta a nuestro correo</h2>
            <section className="grup-input">
              <label htmlFor="name" className="label">
                Nombre
              </label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                required
              />
            </section>

            <section className="grup-input">
              <label htmlFor="phone" className="label">
                Telefono
              </label>
              <input
                className="input"
                type="phone"
                name="phone"
                placeholder="Telefono"
              />
            </section>
            <section className="grup-input">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </section>
            <section className="grup-input">
              <label htmlFor="businnes" className="label">
                ¿Cual es tu negocio?
              </label>
              <input
                className="input"
                type="text"
                name="business"
                placeholder="¿Cual es tu negocio?"
              />
            </section>
          </div>

          <div className="form-right">
            <section className="grup-input-area">
              <label htmlFor="message" className="label">
                Mensaje
              </label>
              <textarea
                className="tex-area"
                type="text"
                name="message"
                placeholder="Dejá tu mensaje"
                required
              />
            </section>

            <button className="sudmit btn" type="sudmit">
              Enviar
            </button>
          </div>
          <input type="hidden" name="_next" value={"https://archigrowth.lat"} />
          <input type="hidden" name="_captcha" value={false} />
        </form>

        <AsideForm />
      </div>
    </section>
  );
};

export default NewForm;
