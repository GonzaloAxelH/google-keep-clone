import styled from "styled-components";

export const HeaderWrapper  = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(218, 220, 224);
  background: #fff;
  z-index: 12;
  padding: 8px;
  
  box-shadow: ${(props)=> props.isScrollPage ? "-2px 3px 12px -8px rgb(0 0 0 / 95%)" : "none"};
  -webkit-box-shadow: ${(props)=> props.isScrollPage ? "-2px 3px 12px -8px rgb(0 0 0 / 95%)" : "none"};
  align-items: center;
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
  align-items: center;
  padding: 0 10px;
`;
