import { useState } from "react";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Contenido, Wrapper, ListItems, Item } from "./Styles.jsx";
import { paths } from "../../../Routes/Routes";

function NavLeftContainer({ children, isOpen, hover, ...props }) {
  return (
    <Wrapper hover={hover} isOpen={isOpen} {...props}>
      {children}
    </Wrapper>
  );
}

export default function NavLeft({ open, hover, ...props }) {
  const [posItem, setPosItem] = useState(1);
  return (
    <NavLeftContainer hover={hover} isOpen={open} {...props}>
      <Contenido>
        <ListItems>
          <Item
            to={paths.HOME}
            hover={hover}
            isOpen={open}
            active={posItem === 1}
            onClick={() => setPosItem(1)}
          >
            <div className="content">
              <LightbulbOutlinedIcon />
            </div>
            <span>Notas</span>
          </Item>
          <Item
            to={paths.REMINDERS}
            hover={hover}
            isOpen={open}
            active={posItem === 2}
            onClick={() => setPosItem(2)}
          >
            <div>
              <NotificationsNoneOutlinedIcon />
            </div>

            <span>Recordatorios</span>
          </Item>
          <Item
            to={paths.LABELS}
            hover={hover}
            isOpen={open}
            active={posItem === 3}
            onClick={() => setPosItem(3)}
          >
            <div>
              <EditOutlinedIcon />
            </div>

            <span>Editar etiquetas</span>
          </Item>
          <Item
            to={paths.ARCHIVE}
            hover={hover}
            isOpen={open}
            active={posItem === 4}
            onClick={() => setPosItem(4)}
          >
            <div>
              <ArchiveOutlinedIcon />
            </div>

            <span>Archivar</span>
          </Item>

          <Item
            to={paths.TRASH}
            hover={hover}
            isOpen={open}
            active={posItem === 5}
            onClick={() => setPosItem(5)}
          >
            <div>
              <DeleteOutlinedIcon />
            </div>

            <span>Papelera</span>
          </Item>
        </ListItems>
      </Contenido>
    </NavLeftContainer>
  );
}
