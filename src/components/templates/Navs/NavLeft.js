import { useState, useContext } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Contenido, Wrapper, ListItems } from "./NavLeftStyles.jsx";
import { FullContext } from "../../../App.js";
import ItemNavLeft from "../../molecules/ItemNavLeft/ItemNavLeft.js";
export default function NavLeft() {
  const { openNavLeft, openNavLeftHover, setOpenNavLeftHover } =
    useContext(FullContext);
  const [posItem, setPosItem] = useState(1);
  return (
    <Wrapper
      hover={openNavLeftHover}
      isOpen={openNavLeft}
      onMouseEnter={() => setOpenNavLeftHover(true)}
      onMouseLeave={() => setOpenNavLeftHover(false)}
    >
      <Contenido>
        <ListItems>
          <ItemNavLeft
            path="/"
            active={posItem === 1}
            onClick={() => setPosItem(1)}
            Icon={() => <LightbulbOutlinedIcon />}
          >
            Notas
          </ItemNavLeft>
          <ItemNavLeft
            path="/reminders"
            active={posItem === 2}
            Icon={() => <NotificationsNoneOutlinedIcon />}
            onClick={() => setPosItem(2)}
          >
            Recordatorios
          </ItemNavLeft>
          <ItemNavLeft
            path="/labels"
            active={posItem === 3}
            Icon={() => <EditOutlinedIcon />}
            onClick={() => setPosItem(3)}
          >
            Editar etiquetas
          </ItemNavLeft>
          <ItemNavLeft
            path="/archive"
            active={posItem === 4}
            Icon={() => <ArchiveOutlinedIcon />}
            onClick={() => setPosItem(4)}
          >
            Archivar
          </ItemNavLeft>

          <ItemNavLeft
            path="/trash"
            Icon={() => <DeleteOutlinedIcon />}
            onClick={() => setPosItem(5)}
            active={posItem === 5}
          >
            Trash
          </ItemNavLeft>
        </ListItems>
      </Contenido>
    </Wrapper>
  );
}
