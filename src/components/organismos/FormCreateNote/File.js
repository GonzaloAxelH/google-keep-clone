import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
export function File({ children, getFile }) {
  const [file, setFile] = useState(null);

  useEffect(() => {
    getFile(file);
  }, [file]);

  const allChilds = React.Children.map(children, (child) => {
    const clone = React.cloneElement(child, {
      file,
      setFile,
    });
    return clone;
  });
  return allChilds;
}
export function InputFile({ file, setFile }) {
  return (
    <input
      onChange={(e) => setFile(e.target.files[0])}
      type="file"
      name="file"
      hidden
      id="inputfile"
    />
  );
}
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
