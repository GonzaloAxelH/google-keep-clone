import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const  Contenido = styled.div`
  padding: 64px 0.2em 0.2em 0.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  svg {
    width: 50px;
  }
`;


export const  ListItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const  Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: ${(props) => (props.isOpen || props.hover ? "280px" : "56px")};
  height: 100vh;
  overflow: hidden;
  background: #fff;
  z-index: 10;
  -webkit-box-shadow: ${(props) =>
    props.hover && !props.isOpen
      ? "14px 5px 18px -19px rgba(0, 0, 0, 0.63)"
      : "none"};
  box-shadow: ${(props) =>
    props.hover && !props.isOpen
      ? "14px 5px 18px -19px rgba(0, 0, 0, 0.63)"
      : "none"};
`;