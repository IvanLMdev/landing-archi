

const CardService = ({ src, alt, title, article }) => {
  return (
    <>
      <img src={src} alt={alt} className="img-card-serv" width={"180px"} height={"180px"}/>
      <article>
        <h4>{title}</h4>
        <p>{article}</p>
      </article>
    </>
  );
};

export default CardService;
