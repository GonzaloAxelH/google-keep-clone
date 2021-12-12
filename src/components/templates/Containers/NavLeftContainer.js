import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
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
export default function NavLeftContainer({
  children,
  isOpen,
  hover,
  ...props
}) {
  return (
    <Wrapper hover={hover} isOpen={isOpen} {...props}>
      {children}
    </Wrapper>
  );
}
