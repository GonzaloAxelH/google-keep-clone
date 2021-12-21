import styled from "styled-components";
import { CirclePicker } from "react-color";
import {
  WrapperFormCreateNote,
  InputTitleWrapper,
  PortadaTitle,
  OptionsNotes,
  Textarea,
} from "./Styles.jsx";
import autosize from "autosize";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import React, { useState, useRef, useEffect } from "react";
import useClickBody from "../../../hooks/useClickBody";

export default function FormCreateNote() {
  const formRef = useRef();
  const textAreaRef = useRef();
  autosize(textAreaRef.current);
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [valueBackground, setValueBackground] = useState("#fff");
  const [filesUrl, setFileUrls] = useState([]);
  const [rawFiles, setRawFiles] = useState([]);
  const { isClickInElement } = useClickBody(formRef);
  const isClickForm = isClickInElement;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    console.log(valueBackground);
  }, [rawFiles, filesUrl, valueBackground]);

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
  return (
    <WrapperFormCreateNote
      backgroundColor={valueBackground}
      onSubmit={handleSubmit}
      isClicked={isClickForm}
      ref={formRef}
    >
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

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {isClickForm
          ? filesUrl.map((url, index) => {
              return (
                <ImagePreview
                  url={url}
                  id={index}
                  key={index}
                  onDeleteImage={deleteImage}
                />
              );
            })
          : null}
      </div>
      {isClickForm ? (
        <File getFile={handleFile}>
          <InputFile />
          <LabelInputFile>
            <ImageOutlinedIcon />
          </LabelInputFile>
        </File>
      ) : null}
      {isClickForm ? (
        <ColorPicker
          getColor={(color) => setValueBackground(color.hex)}
          color={valueBackground}
        />
      ) : null}
    </WrapperFormCreateNote>
  );
}

const WrapperImagenPreview = styled.div`
  position: relative;
  .delete-btn-image {
    dispaly: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    padding: 0.5em;
    width: 50px;
    height: 50px;
    right: 0;
    cursor: pointer;
    top: 7px;
  }
`;
function ImagePreview({ url, id, onDeleteImage }) {
  return (
    <WrapperImagenPreview>
      <img
        width={300}
        style={{
          borderRadius: "10px",
          margin: "0.4em",
          objectFit: "contain",
        }}
        src={url}
        alt=""
      />
      <div className="delete-btn-image" onClick={() => onDeleteImage(id)}>
        <ArchiveOutlinedIcon />
      </div>
    </WrapperImagenPreview>
  );
}
function File({ children, getFile }) {
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
function InputFile({ file, setFile }) {
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
`;

function LabelInputFile({ toggle, children }) {
  return (
    <LabelWrapper onClick={toggle} htmlFor="inputfile">
      {children}
    </LabelWrapper>
  );
}

function FormFooterOptions() {
  return (
    <OptionsNotes>
      <AddAlertOutlinedIcon />
      <PersonAddOutlinedIcon />
      <PaletteOutlinedIcon />
      <ImageOutlinedIcon />
      <ArchiveOutlinedIcon />
      <MoreVertOutlinedIcon />
      <UndoOutlinedIcon />
      <RedoOutlinedIcon />
    </OptionsNotes>
  );
}

function ColorPicker({ getColor, color }) {
  return <CirclePicker color={color} onChangeComplete={getColor} />;
}
