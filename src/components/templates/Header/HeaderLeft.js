import Logo from "../../atoms/ButtonImages/Logo";
import { LogoContainer, MenuButtonWrapper } from "./HeaderStyles.jsx";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
const HeaderLeft = ({ OnclickToggleNavleft }) => {
  return (
    <>
      <MenuButtonWrapper onClick={OnclickToggleNavleft}>
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
    </>
  );
};

export default HeaderLeft;
