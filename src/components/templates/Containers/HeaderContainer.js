import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  width: calc(100% - 10px);
  display: flex;
  height: 64px;
  border-bottom: 1px solid rgb(218, 220, 224);
  z-index: 10;
  background: #fff;
  z-index: 12;
`;
const HeaderContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeaderContainer;
