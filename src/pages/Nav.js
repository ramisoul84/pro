import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineContacts } from "react-icons/ai";

import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <AiOutlineHome />
      </Link>
      <Link to="/about">
        <AiOutlineUser />
      </Link>
      <Link to="/skills">
        <BsFillGearFill />
      </Link>
      <Link to="/projects">
        <MdOutlineDesignServices />
      </Link>
      <Link to="/contact">
        <AiOutlineContacts />
      </Link>
    </nav>
  );
};
export default Nav;
