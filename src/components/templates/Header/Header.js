import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HeaderContainer from "../Containers/HeaderContainer";
import Logo from "../../atoms/ButtonImages/Logo";
import FormSearch from "../../molecules/FormSearch/FormSearch";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import ViewAgendaOutlinedIcon from "@mui/icons-material/ViewAgendaOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ImgUser from "../../atoms/ButtonImages/User";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import MyModalConfiguration from "./MyModalConfiguration";
import MenuItem from "@mui/material/MenuItem";
const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .wrapper__menu-icon {
    width: 40px;
    height: 40px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }
  .wrapper__menu-icon:hover {
    background: rgb(241, 243, 244);
  }
`;

const MenuButtonWrapper = styled.div``;
const LogoContainer = styled.div`
  display: flex;
  padding-right: 35px;
  a {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    img {
      width: 44px;
      height: 45px;
    }
  }
  span {
    font-size: 22px;
    color: #5f6368;
    padding: 5px;
  }
`;

const Options = styled.div`
  display: flex;

  padding: 0 10px;
`;
const UserOptions = styled.div`
  display: flex;

  padding: 0 10px;
`;

const BasicMenu = ({ handleCloseMenu, anchorEl, open }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            setOpenModal(true);
          }}
        >
          Configuracion
        </MenuItem>
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
      </Menu>
      <MyModalConfiguration
        handleCloseModal={() => setOpenModal(false)}
        openModal={openModal}
      />
    </>
  );
};

const Header = ({ OnclickToggleButton }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <HeaderContainer className="dsdsd">
      <HeaderComponent>
        <MenuButtonWrapper onClick={OnclickToggleButton}>
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
        <Options>
          <div className="wrapper__menu-icon">
            <ReplayOutlinedIcon />
          </div>
          <div className="wrapper__menu-icon">
            <ViewAgendaOutlinedIcon />
          </div>

          <div
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="wrapper__menu-icon"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <SettingsOutlinedIcon />
          </div>
          <BasicMenu
            handleCloseMenu={() => setAnchorEl(null)}
            open={open}
            anchorEl={anchorEl}
          />
        </Options>
        <UserOptions>
          <div className="wrapper__menu-icon">
            <AppsOutlinedIcon />
          </div>
          <ImgUser />
        </UserOptions>
      </HeaderComponent>
    </HeaderContainer>
  );
};
export default Header;
