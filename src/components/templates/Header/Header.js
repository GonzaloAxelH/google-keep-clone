import styled from "styled-components";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HeaderContainer from "../Containers/HeaderContainer";

const HeaderComponent = styled.div`
  display: flex;
  div {
    width: 48px;
    height: 48px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
  }
  div:hover {
    background: rgb(241, 243, 244);
  }
`;

const MenuButtonWrapper = styled.div``;
const Header = ({ OnclickToggleButton }) => {
  return (
    <HeaderContainer>
      <HeaderComponent>
        <MenuButtonWrapper onClick={OnclickToggleButton}>
          <div>
            <MenuOutlinedIcon />
          </div>
        </MenuButtonWrapper>

        <h1>Header</h1>
      </HeaderComponent>
    </HeaderContainer>
  );
};
export default Header;
