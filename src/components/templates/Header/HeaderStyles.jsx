import styled from "styled-components";

export const Wrapper = styled.div`
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

export const  HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .wrapper__menu-icon {
    width: 40px;
    height: 40px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }
  .wrapper__menu-icon:hover {
    background: rgb(241, 243, 244);
  }
`;

export const  MenuButtonWrapper = styled.div``;
export const  LogoContainer = styled.div`
  display: flex;
  padding-right: 35px;
  a {
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    img {
      width: 44px;
      height: 45px;
    }
  }
  span {
    font-size: 22px;
    color: #5f6368;
    padding: 5px;
  }
`;

export const  Options = styled.div`
  display: flex;

  padding: 0 10px;
`;
export const  UserOptions = styled.div`
  display: flex;

  padding: 0 10px;
`;

