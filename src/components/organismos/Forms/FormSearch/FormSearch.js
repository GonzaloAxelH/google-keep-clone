import styled from "styled-components";
import Input from "../../../atoms/Inputs/Input";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { FormWrapper, WrapperIcon, InputWrapper } from "./FormSearchStyles";
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
