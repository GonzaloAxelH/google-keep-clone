import React, { useContext } from "react";

import Logo from "../../atoms/ButtonImages/Logo";
import HeaderOptions from "./HeaderOptions";
import UserOption from "../../Modals/MenuUser/UserOption";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  HeaderWrapper,
  MenuButtonWrapper,
  LogoContainer,
} from "./HeaderStyles.jsx";
import { FullContext } from "../../../App";
import FormSearch from "../../organismos/Forms/FormSearch/FormSearch";

const Header = () => {
  const { setOpenNavLeft, openNavLeft } = useContext(FullContext);
  return (
    <HeaderWrapper>
      <MenuButtonWrapper onClick={() => setOpenNavLeft(!openNavLeft)}>
        <div className="wrapper__menu-icon">
          <MenuOutlinedIcon />
        </div>
      </MenuButtonWrapper>
      <LogoContainer>
        <a href="#logo">
          <Logo />
          <span>Keep</span>
        </a>
      </LogoContainer>
      <FormSearch />
      <HeaderOptions />
      <UserOption />
    </HeaderWrapper>
  );
};
export default Header;
