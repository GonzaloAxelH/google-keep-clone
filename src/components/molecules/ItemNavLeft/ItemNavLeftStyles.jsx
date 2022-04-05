import styled from "styled-components"
import { Link } from "react-router-dom"
export const  Item = styled(Link)`
    text-decoration:none;
  padding: 0.2em;
  display: flex;
  border-radius: 0 50px 50px 0;
  background: ${(props) =>
    props.active && (props.isOpen || props.hover)
      ? "rgb(254,239,195)"
      : "transparent"};
  width: 100%;

  align-items: center;
    color: rgb(95, 95, 104);
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