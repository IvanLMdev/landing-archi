import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import NavTemplateDesign from "./NavTemplateDesign";

const ItemQuestion = ({ question, answers, bool = "F" }) => {
  const [useDrop, setDrop] = useState({ flag: false, valueClass: "hidden_" });

  function OnClick() {
    useDrop.flag
      ? setDrop({ flag: false, valueClass: "hidden_" })
      : setDrop({ flag: true, valueClass: "show_" });
  }

  return (
    <>
      <li className="li-question" onClick={OnClick}>
        <div className="--flex-between">
          {question}
          <i
            className={`--flex-center icon-drop-question ${
              useDrop.flag ? "rotate_" : ""
            }`}
          >
            <IoIosArrowDropdown color="#6effa5" />
          </i>
        </div>
      </li>
      <ol className={`${useDrop.valueClass} answer-list`}>
        {bool == "F" ? (
          useDrop.flag ? (
            answers.map((x) => <li key={crypto.randomUUID()}>{x.answer}</li>)
          ) : (
            <></>
          )
        ) : (
          <NavTemplateDesign />
        )}
      </ol>
    </>
  );
};

export default ItemQuestion;
