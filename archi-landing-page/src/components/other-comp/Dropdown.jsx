import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";
import "../../styles/dropdown.css";

const Dropdown = () => {
  const [dropdown, setDropdowm] = useState({
    value: false,
    clase: "hidden-drop",
  });

  const ClickDropdawn = () => {
    dropdown.value
      ? setDropdowm({ value: false, clase: "hidden-drop" })
      : setDropdowm({ value: true, clase: "show-drop" });
  };

  return (
    <div className="dropdown-cont">
      <hr />
      <div className="dropdown-icon">
        <i className="arrow-icon" onClick={ClickDropdawn}>
          {dropdown.value ? (
              <IoIosArrowDropup color="rgb(109, 36, 177)" size={"1.3rem"} />
            ) : (
              <IoIosArrowDropdown color="rgb(110, 255, 165)" size={"1.3rem"} />
          )}
        </i>
        <p className="drop-paran">Ver los diseños web</p>
      </div>
      <div className="list-cont">
        <ul className={`list-webs-link ${dropdown.clase}`}>
          <a href="#">template-1</a>
          <a href="#">template-2</a>
          <a href="#">template-3</a>
          <a href="#">template-4</a>
          <a href="#">template-5</a>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
