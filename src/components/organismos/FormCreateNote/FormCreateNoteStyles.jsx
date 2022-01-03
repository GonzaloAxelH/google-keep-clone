import styled from 'styled-components'
export const WrapperFormCreateNote = styled.form`
  width: 70%;
  overflow: hidden;
  height: ${(props) => (props.isClicked ? "auto" : "60px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:${(props)=> props.backgroundColor};
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
  -webkit-box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
  border-radius: 8px;
  padding: 1em;
`;

export const PortadaTitle = styled.div`
  width: 100%;
  
  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
  }
`;
export const InputTitleWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
`;


export const Textarea = styled.textarea`
  background:transparent;
  width: 100%;
  outline: none;
  font-size: 17px;
  font-weight: 300;
  border: none;
  padding: 12px 0 12px 3px;
  font-family: sans-serif;
  word-wrap: break-word;
  resize: none;
  overflow-x: hidden;
`;