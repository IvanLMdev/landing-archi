import "../styles/form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {

  const [validForm,setValidform] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors ,},
    reset
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setValidform(true)
    alert('Eviando correo...')
    reset()
  });




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
              {...register("name", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
                minLength: {
                  value: 2,
                  message: "Nombre de ve ser mayor a 2 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "Nombre de ser menor a 40 caracteres",
                },
              })}
            />
            {errors.name && <span>{errors.name.message}</span>}
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
              {...register("phone",{
                required:{
                  value:true,
                  message:"El telefono es requerido"
                },
                pattern:{
                  value: /^\d{7,14}$/,
                  message:"Telefono no valido"
                }
              })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
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
              {...register("email",{
                  required:{
                  value: true,
                  message: "El correo es requerido"
                },
                pattern:{
                  value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message:"Correo no valido"
                }
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
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
              {...register("businnes")}
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
              {...register("message", {
                required: {
                  value: true,
                  message: "Debes enviar un mensaje",
                },
                maxLength: {
                  value: 200,
                  message: "Maximo 200 cracteres",
                },
              })}
            />
            {errors.message && <span>{errors.message.message}</span>}
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

export default Form;
