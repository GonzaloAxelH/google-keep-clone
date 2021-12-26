import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../atoms/ButtonImages/Logo";
import FormSearch from "../../molecules/FormSearch/FormSearch";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ImgUser from "../../atoms/ButtonImages/User";
import BasicMenu from "../../Modals/Menu";
import { useState } from "react";
import ModalShared from "../../Modals/MyModalShared";
import ModalConfiguration from "../../Modals/MyModalConfig";
import {
  Wrapper,
  HeaderComponent,
  LogoContainer,
  Options,
  UserOptions,
  MenuButtonWrapper,
} from "./HeaderStyles.jsx";

const IconWrapper = ({ Icon, onClick, children, ...args }) => {
  return (
    <>
      <div onClick={onClick} className="wrapper__menu-icon" {...args}>
        <Icon />
      </div>
      {children}
    </>
  );
};

const MenuUser = ({ idmenu, handleCloseMenu, open, anchorEl }) => {
  const [openModalConfig, setOpenModalConfig] = useState(false);
  const [openModalShared, setOpenModalShared] = useState(false);
  return (
    <>
      <BasicMenu
        idMenu={idmenu}
        handleCloseMenu={handleCloseMenu}
        openMenu={open}
        anchorEl={anchorEl}
      >
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            setOpenModalConfig(true);
          }}
        >
          Configuracion
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            setOpenModalShared(true);
          }}
        >
          Shared
        </MenuItem>
      </BasicMenu>

      <ModalShared
        handleCloseModal={() => setOpenModalShared(!openModalShared)}
        openModal={openModalShared}
      />
      <ModalConfiguration
        handleCloseModal={() => setOpenModalConfig(!openModalConfig)}
        openModal={openModalConfig}
      />
    </>
  );
};

const HeaderOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const open1 = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);
  return (
    <Options>
      <IconWrapper
        id="basic-button"
        aria-controls="basic-menu2"
        aria-haspopup="true"
        aria-expanded={open2 ? "true" : undefined}
        Icon={ReplayOutlinedIcon}
        onClick={(e) => setAnchorE2(e.currentTarget)}
      >
        <MenuUser
          idmenu="menu-settings"
          handleClosemenu={() => setAnchorE2(null)}
          open={open2}
          anchorEl={anchorE2}
        />
      </IconWrapper>

      <IconWrapper
        id="basic-button"
        aria-controls="basic-menu"
        aria-expanded={open1 ? "true" : undefined}
        className="wrapper__menu-icon"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        Icon={SettingsOutlinedIcon}
      >
        <MenuUser
          idmenu="menu-shared"
          handleCloseMenu={() => setAnchorEl(null)}
          open={open1}
          anchorEl={anchorEl}
        />
      </IconWrapper>
    </Options>
  );
};

const UserOption = () => {
  return (
    <UserOptions>
      <div className="wrapper__menu-icon">
        <AppsOutlinedIcon />
      </div>
      <ImgUser />
    </UserOptions>
  );
};

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

const Header = ({ OnclickToggleNavleft, isScrollPage }) => {
  return (
    <Wrapper isScrollPage={isScrollPage}>
      <HeaderComponent>
        <HeaderLeft OnclickToggleNavleft={OnclickToggleNavleft} />
        <FormSearch />
        <HeaderOptions />
        <UserOption />
      </HeaderComponent>
    </Wrapper>
  );
};
export default Header;
