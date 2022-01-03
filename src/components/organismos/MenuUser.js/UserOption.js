import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import styled from "styled-components";
import ImgUser from "../../atoms/ButtonImages/User";

const UserOptions = styled.div`
  display: flex;

  padding: 0 10px;
`;
const UserOption = () => {
  return (
    <UserOptions>
      <div className="wrapper__menu-icon">
        <AppsOutlinedIcon />
      </div>
      <ImgUser />
    </UserOptions>
  );
};

export default UserOption;
