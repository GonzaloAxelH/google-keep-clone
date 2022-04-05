import styled from "styled-components";
const LabelWrapper = styled.label`
  cursor: pointer;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function LabelInputFile({ toggle, children }) {
  return (
    <LabelWrapper onClick={toggle} htmlFor="inputfile">
      {children}
    </LabelWrapper>
  );
}
