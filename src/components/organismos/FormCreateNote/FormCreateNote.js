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
import { useState, useRef, useEffect } from "react";
import useClickBody from "../../../hooks/useClickBody";
export default function FormCreateNote() {
  const formRef = useRef();
  const textAreaRef = useRef();
  autosize(textAreaRef.current);
  const [valueTitle, setValueTitle] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const { isClickInElement } = useClickBody(formRef);
  const isClickForm = isClickInElement;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <WrapperFormCreateNote
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
      {isClickForm ? <FormFooterOptions /> : null}
    </WrapperFormCreateNote>
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
