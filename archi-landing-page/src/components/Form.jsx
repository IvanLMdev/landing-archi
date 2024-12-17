import "../styles/form.css";

const Form = () => {


  const onSubmit = () => {
    alert('Se enviara este correo...')
  };


  return (
    <div className="content-form">
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
              Correo
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Correo"
              required
            />
          
          </section>
          <section className="grup-input">
            <label htmlFor="businnes" className="label">
              Tu negocio
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
    </div>
  );
};

export default Form;
