import BasicMenu from "../../Modals/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import MyModalShared from "../../Modals/MyModalShared";
import ModalConfiguration from "../../Modals/MyModalConfig";

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

      <MyModalShared
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
export default MenuUser;
