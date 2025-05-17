import ItemDropdown from "./ItemDropdown";
import { IoIosArrowDropdown } from "react-icons/io";
import { links_info as info } from "../../utilities/mini_nav";
import { useState } from "react";
import "../../styles/dropdown.css";

const Dropdown = () => {
  const [dropdown, setDropdowm] = useState({
    value: false,
    clase: "",
  });

  const ClickDropdown = (e) => {
    dropdown.value
      ? setDropdowm({ value: false, clase: "" })
      : setDropdowm({ value: true, clase: "show-drop" });
  };

  return (
    <>
      <button className="dropdown-cont --flexcenter" onClick={ClickDropdown}>
        <div className="dropdown-icon">
          <p className="drop-paran">Ver los sitios con 75% off</p>
          <i
            className={`${
              dropdown.value ? "rotate-i" : ""
            } arrow-icon --flex-center`}
          >
            <IoIosArrowDropdown color="rgb(109, 36, 177)" size={"1.3rem"} />
          </i>
        </div>
      </button>

      <nav className={`list-cont ${dropdown.clase}`}>
        {dropdown.value ? (
          <ul className={`list-webs-link`}>
            {info.map((x) => (
              <ItemDropdown key={x.key} href={x.to} src={x.src} />
            ))}
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
};

export default Dropdown;
