import styled from "styled-components";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import { useState } from "react";
const WrapperFormCreateNote = styled.form`
  width: 70%;
  background: #fff;
  box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
  -webkit-box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
  -moz-box-shadow: -2px 3px 12px -8px rgba(0, 0, 0, 0.95);
  border-radius: 8px;
  padding: 1em;
`;
const FocusContentForm = styled.div`
  display: none;
`;
const PortadaTitle = styled.div``;
const InputTitleWrapper = styled.div``;
const InputCreateNoteWrapper = styled.div``;
const InputTagsWrapper = styled.div`
  display: flex;
`;
const OptionsNotes = styled.div``;
const ButtonClose = styled.button``;
export default function FormCreateNote() {
  const [focus, setFocus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <WrapperFormCreateNote
      onSubmit={handleSubmit}
      onBlur={() => setFocus(!focus)}
      isFocus={focus}
    >
      <PortadaTitle>
        <p>Crear una nota ...</p>
      </PortadaTitle>
      <FocusContentForm isFocus={focus}>
        <InputTitleWrapper></InputTitleWrapper>
        <InputCreateNoteWrapper></InputCreateNoteWrapper>
        <InputTagsWrapper>
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
          <ButtonClose>Cerrar</ButtonClose>
        </InputTagsWrapper>
      </FocusContentForm>
    </WrapperFormCreateNote>
  );
}
