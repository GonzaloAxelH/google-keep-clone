import styled from "styled-components";
import { addNote } from "../../../data/Redux/actionCreators";
import { connect } from "react-redux";
import ImagePreview from "./ImagePreview";
import {
  WrapperFormCreateNote,
  InputTitleWrapper,
  PortadaTitle,
  Textarea,
} from "./Styles.jsx";
import autosize from "autosize";
import React, { useState, useRef } from "react";
import useClickBody from "../../../hooks/useClickBody";

import FormFooterOptions from "./FormFooterOptions";

import { v4 as uuidv4 } from "uuid";
const FormFooter = styled.div`
  display: flex;

  flex-direction: column;
  button {
    background: transparent;
    color: "gray";
    align-self: flex-end;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 1em;
  }
`;

function FormCreateNote({ saveNote }) {
  const formRef = useRef();
  const refButton = useRef();
  const textAreaRef = useRef();
  autosize(textAreaRef.current);
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [valueBackground, setValueBackground] = useState("#fff");
  const [filesUrl, setFileUrls] = useState([]);
  const [rawFiles, setRawFiles] = useState([]);
  const { isClickInElement } = useClickBody(formRef, refButton);
  const isClickForm = isClickInElement;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idNote = uuidv4();
    const newNote = {
      id: idNote,
      valueTitle,
      valueDescription,
      valueBackground,
    };
    saveNote(newNote);
    resetValuesForm();
  };
  const handleFile = (file) => {
    if (file !== null) {
      setRawFiles([...rawFiles, file]);
      const imageUrl = URL.createObjectURL(file);
      setFileUrls([...filesUrl, imageUrl]);
    }
  };
  const deleteImage = (id) => {
    const newFiles = filesUrl.filter((file, index) => index !== id);
    const newRawFiles = rawFiles.filter((file, index) => index !== id);
    setFileUrls(newFiles);
    setRawFiles(newRawFiles);
  };

  function resetValuesForm() {
    setValueTitle("");
    setValueDescription("");
    setValueBackground("#fff");
    setFileUrls([]);
    setRawFiles([]);
  }
  return (
    <WrapperFormCreateNote
      backgroundColor={valueBackground}
      onSubmit={handleSubmit}
      isClicked={isClickForm}
      ref={formRef}
    >
      {isClickForm ? (
        <div
          style={{
            display: "flex",
            paddingBottom: filesUrl === [] ? "2em" : "",
            flexWrap: "wrap",
          }}
        >
          {filesUrl.map((url, index) => {
            return (
              <ImagePreview
                url={url}
                id={index}
                key={index}
                onDeleteImage={deleteImage}
              />
            );
          })}
        </div>
      ) : null}

      <PortadaTitle>
        <input
          onChange={(e) => setValueTitle(e.target.value)}
          placeholder={isClickForm ? "Title" : "Crear una nota"}
          value={isClickForm ? valueTitle : ""}
        />
      </PortadaTitle>
      <InputTitleWrapper visible={isClickForm}>
        <Textarea
          onChange={(e) => setValueDescription(e.target.value)}
          placeholder="Description"
          ref={textAreaRef}
          value={isClickForm ? valueDescription : ""}
        ></Textarea>
      </InputTitleWrapper>

      {isClickForm ? (
        <>
          <FormFooter>
            <FormFooterOptions
              refButton={refButton}
              handleFile={handleFile}
              getColor={(color) => setValueBackground(color.hex)}
              color={valueBackground}
            />
            <button type="submit">Enviar</button>
          </FormFooter>
        </>
      ) : null}
    </WrapperFormCreateNote>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveNote: (newNote) => {
      dispatch(addNote(newNote));
    },
  };
};
export default connect(null, mapDispatchToProps)(FormCreateNote);
