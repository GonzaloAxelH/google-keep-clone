import styled from "styled-components";
import Input from "../../atoms/Inputs/Input";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
const FormWrapper = styled.form`
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

const InputWrapper = styled.div`
  width: 100%;
  align-items: center;
  input {
    background: transparent;
    height: 48px;
    width: 100%;
    border: none;
    outline: none;
    padding: 11px 0;
  }
`;
const WrapperIcon = styled.button`
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
export default function FormSearch() {
  const [valueSearch, setValueSearch] = useState("");
  const [isClickForm, setIsClickForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onGetValue = (e) => {
    setValueSearch(e.target.value);
    console.log(e.target.value);
  };
  const isClicked = () => {
    setIsClickForm(true);
  };
  return (
    <FormWrapper
      onBlur={() => setIsClickForm(!isClickForm)}
      onSubmit={handleSubmit}
      onClick={isClicked}
      isClicked={isClickForm}
    >
      <WrapperIcon type="submit">
        <div>
          <SearchOutlinedIcon />
        </div>
      </WrapperIcon>
      <InputWrapper>
        <Input onGetValue={onGetValue} value={valueSearch} />
      </InputWrapper>
      <WrapperIcon type="button" onClick={() => setValueSearch("")}>
        <div>
          <CloseOutlinedIcon />
        </div>
      </WrapperIcon>
    </FormWrapper>
  );
}
