import Menu from "@mui/material/Menu";
const BasicMenu = ({
  idMenu,
  handleCloseMenu,
  anchorEl,
  openMenu,
  children,
}) => {
  return (
    <Menu
      id={idMenu}
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleCloseMenu}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {children}
    </Menu>
  );
};

export default BasicMenu;
