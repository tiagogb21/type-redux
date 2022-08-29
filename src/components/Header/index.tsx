import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { ImUser } from "react-icons/im";
import { BiWinkSmile } from "react-icons/bi";

import "./styles.css";

const Header: React.FC = () => {
  const clickOpenCloseMenu = () => {
    return "a";
  };

  const clickOpenCloseUser = () => {
    return "b";
  };

  return (
    <header className="general-header__container">
      {/* Menu */}
      <button className="btn-menu" type="button" onClick={clickOpenCloseMenu}>
        <GiHamburgerMenu />
      </button>
      {/* Logo */}
      <h1 className="logo-smile">
        <BiWinkSmile />
        <span>SMI</span>
        <span>LE</span>
      </h1>
      {/* User */}
      <button className="btn-user" type="button" onClick={clickOpenCloseUser}>
        <ImUser />
      </button>
    </header>
  );
};

export default Header;
