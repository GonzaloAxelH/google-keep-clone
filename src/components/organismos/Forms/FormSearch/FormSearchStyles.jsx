import styled from "styled-components"
export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  background: ${(props) => (!props.isClicked ? "rgb(241, 242, 244)" : "#fff")};
  box-shadow: ${(props) =>
    props.isClicked ? "-2px 3px 12px -8px rgba(0, 0, 0, 0.95)" : "none"};
  -webkit-box-shadow: ${(props) =>
    props.isClicked ? "-2px 3px 12px -8px rgba(0, 0, 0, 0.95)" : "none"};
  -moz-box-shadow: ${(props) =>
    props.isClicked ? "-2px 3px 12px -8px rgba(0, 0, 0, 0.95)" : "none"};
  border-radius: 8px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  align-items: center;
  input {
    background: transparent;
    height: 48px;
    width: 100%;
    border: none;
    outline: none;
    padding: 11px 0;
    font-size: 16px;
  }
`;
export const WrapperIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  border: none;
  background: transparent;
  cursor: pointer;
  div {
    width: 40px;
    height: 40px;
    transition: 0s all;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  div:hover {
    background: rgb(227, 229, 230);
    border-radius: 50%;
  }
`;