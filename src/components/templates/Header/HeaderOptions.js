import { useState } from "react";
import { Options } from "./HeaderStyles.jsx";
import IconWrapper from "../../atoms/Icons/IconWrapper";
import MenuUser from "../../Modals/Menu";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

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

export default HeaderOptions;
