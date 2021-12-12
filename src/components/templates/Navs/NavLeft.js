import { useState } from "react";
import NavLeftContainer from "../Containers/NavLeftContainer";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import styled from "styled-components";
const Contenido = styled.div`
  padding: 64px 0.2em 0.2em 0.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  svg {
    width: 50px;
  }
`;

const Item = styled.div`
  padding: 0.2em;
  display: flex;
  border-radius: 0 50px 50px 0;
  background: ${(props) =>
    props.active && (props.isOpen || props.hover)
      ? "rgb(254,239,195)"
      : "transparent"};
  width: 100%;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.active && (props.isOpen || props.hover)
        ? "rgb(254,239,195)"
        : !props.isOpen && props.active
        ? "transparent"
        : "rgb(241,243,244)"};
  }

  svg {
    fill: rgb(95, 95, 104);
  }
  span {
    min-width: 0;
    overflow: hidden;
  }
  div {
    background: ${(props) =>
      props.active && (!props.isOpen || !props.hover)
        ? "rgb(254,239,195)"
        : "transparent"};
    display: flex;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
  }
  div:hover {
    background: ${(props) =>
      props.active && (!props.isOpen || !props.hover)
        ? "rgb(254,239,195)"
        : !props.isOpen || !props.hover
        ? "rgb(241,243,244)"
        : "transparent"};
  }
`;
const ListItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export default function NavLeft({ open, hover, ...props }) {
  const [posItem, setPosItem] = useState(1);
  return (
    <NavLeftContainer hover={hover} isOpen={open} {...props}>
      <Contenido>
        <ListItems>
          <Item
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
            hover={hover}
            isOpen={open}
            active={posItem === 2}
            onClick={() => setPosItem(2)}
          >
            <div>
              <LightbulbOutlinedIcon />
            </div>

            <span>Notas</span>
          </Item>
          <Item
            hover={hover}
            isOpen={open}
            active={posItem === 3}
            onClick={() => setPosItem(3)}
          >
            <div>
              <LightbulbOutlinedIcon />
            </div>

            <span>Notas</span>
          </Item>
          <Item
            hover={hover}
            isOpen={open}
            active={posItem === 4}
            onClick={() => setPosItem(4)}
          >
            <div>
              <LightbulbOutlinedIcon />
            </div>

            <span>Notas</span>
          </Item>
        </ListItems>
      </Contenido>
    </NavLeftContainer>
  );
}
