import { FullContext } from "../../../App";
import { useContext } from "react";
import { Item } from "./ItemNavLeftStyles.jsx";
import { Link } from "react-router-dom";
const ItemNavLeft = ({ Icon, path, active, children, ...props }) => {
  const { openNavLeft, openNavLeftHover } = useContext(FullContext);
  return (
    <Item
      to={path}
      hover={openNavLeftHover}
      isOpen={openNavLeft}
      active={active}
      {...props}
    >
      <div>
        <Icon />
      </div>
      <span>{children}</span>
    </Item>
  );
};

export default ItemNavLeft;
