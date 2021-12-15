import styled from "styled-components";

const WrapperUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background: rgb(241, 243, 244);
  }

  border-radius: 50%;
`;

const Background = styled.div`
  background-image: url("https://lh3.googleusercontent.com/ogw/ADea4I6G9ODbVrzpSzl8oZhIwXpg8aP6dxx2HnD4g84y=s32-c-mo");
  width: 32px;
  background-size: cover;
  height: 32px;
  border-radius: 50%;
`;
export default function User({ onClickUser, imgUrl }) {
  return (
    <WrapperUser onClick={onClickUser}>
      <Background url={imgUrl}></Background>
    </WrapperUser>
  );
}
