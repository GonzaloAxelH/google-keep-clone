import FormSearch from "../../molecules/FormSearch/FormSearch";
import HeaderLeft from "./HeaderLeft";
import HeaderOptions from "./HeaderOptions";
import UserOption from "../../organismos/MenuUser.js/UserOption";
import { Wrapper, HeaderComponent } from "./HeaderStyles.jsx";

const Header = ({ OnclickToggleNavleft, isScrollPage }) => {
  return (
    <Wrapper isScrollPage={isScrollPage}>
      <HeaderComponent>
        <HeaderLeft OnclickToggleNavleft={OnclickToggleNavleft} />
        <FormSearch />
        <HeaderOptions />
        <UserOption />
      </HeaderComponent>
    </Wrapper>
  );
};
export default Header;
