import ItemQuestion from "./ItemQuestion";
import { preguntas as data } from "../../utilities/preguntas";

const DropQuestions = () => {
  return (
    <ul className="aside-question rigth">
      {data.map((x) => (
        x.key == 3 ?  <ItemQuestion key={x.key} question={x.question} answers={x.answers} bool="V"/> :
        <ItemQuestion key={x.key} question={x.question} answers={x.answers}/> 
      ))}
    </ul>
  );
};

export default DropQuestions;
