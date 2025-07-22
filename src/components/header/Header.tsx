import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.svg";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" title="Timer" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
