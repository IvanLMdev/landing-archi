import "../../styles/nav-template-design.css";
import { links_info as info } from "../../utilities/mini_nav";

const NavTemplateDesign = () => {
  return (
    <>
      <nav className="nav-template-design">
        {info.map((x) => (
          <a key={x.key} href={x.to} target="_blank">
            <img src={x.src} alt="imagen de una web archi growth" />
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavTemplateDesign;
