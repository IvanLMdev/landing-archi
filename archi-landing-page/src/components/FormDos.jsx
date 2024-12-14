import "../styles/form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";


const FormDos = () => {
    
  const {handleSubmit} = useForm()

  const [fullName,setFullName] =  useState()

  
  const onSubmit = (e)=>{
    e.prevetDafault()
    const FORM =  new FormData(this)
    console.log(FORM.get('name'))
  }


  return (
    <div className="content-form">
      <form
        action="https://formsubmit.co/ivanmantilla05@gmail.com"
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
            />
            {/* {errors.name && <span>{errors.name.message}</span>} */}
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
            {/* {errors.phone && <span>{errors.phone.message}</span>} */}
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
              
            />
            {/* {errors.email && <span>{errors.email.message}</span>} */}
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
            />
            {/* {errors.message && <span>{errors.message.message}</span>} */}
          </section>

          <button className="sudmit btn" type="sudmit">
            Enviar
          </button>
        </div>
        <input type="hidden" name="_next" value={"http://localhost:5173/"} />
        <input type="hidden" name="_captcha" value={true} />
      </form>
    </div>
  );
};

export default FormDos;
