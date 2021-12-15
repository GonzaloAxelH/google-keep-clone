import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: calc(100% - 10px);
  height: 64px;
  border-bottom: 1px solid rgb(218, 220, 224);
  background: #fff;
  z-index: 12;
  padding: 8px;

  align-items: center;
`;
const HeaderContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default HeaderContainer;
