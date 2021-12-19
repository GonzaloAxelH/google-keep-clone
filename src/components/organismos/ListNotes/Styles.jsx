import styled from "styled-components";

export const  Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const  FijedNotes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em 0;
`;
export const  OtherNotes = styled.div``;
export const  TitleNotes = styled.p``;
export const OptionsNotes = styled.div``;
export const  WrapperNote = styled.div`
  width: ${(props) => props.witdh};
  margin: 0.7em;
  min-height: 154px;
  background: ${(props) => props.backgroundColor};
  border: ${(props) =>
    !props.backgroundColor === "#FFFFFF"
      ? "1px solid #000"
      : "1px solid transparent"};
  border-radius: 10px;
  padding: 16px 14px 7px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;

  transition: all 0.5s;
  .options-form-note {
    opacity: 0;
  }
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    .options-form-note {
      opacity: 1;
    }
  }
`;
export const  InputsForm = styled.div`
  display: flex;
  flex-direction: column;
  input {
    outline: none;
    margin: 0;
    padding: 0.5em 0.3em;
    background: transparent;
    border: none;
    font-size: 18px;
  }
  input:nth-child(1) {
    font-weight: bold;
  }
`;