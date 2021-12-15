import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ModalNote from "./ModalNote";
import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FijedNotes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em 0;
`;
const OtherNotes = styled.div``;
const TitleNotes = styled.p``;

const WrapperNote = styled.div`
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
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
const InputsForm = styled.div`
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
const OptionsNotes = styled.div``;
const Note = ({ color }) => {
  const [openModal, setOpenModal] = useState(false);
  const [titleNote, setTitleNote] = useState("Nota1");
  const [descriptcionNote, setDescriptcionNote] = useState("Description");
  const handleClickNote = () => {
    setOpenModal(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <WrapperNote
        onClick={handleClickNote}
        backgroundColor={color}
        witdh={"240px"}
      >
        <h4>Nota 1</h4>
        <p>Descripccion</p>
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
      </WrapperNote>
      <ModalNote
        handleCloseModal={() => setOpenModal(false)}
        openModal={openModal}
      >
        <WrapperNote backgroundColor={color} witdh="600px">
          <form onSubmit={handleSubmit}>
            <InputsForm>
              <input
                type="text"
                value={titleNote}
                onChange={(e) => setTitleNote(e.target.value)}
              />
              <input
                type="text"
                value={descriptcionNote}
                onChange={(e) => setDescriptcionNote(e.target.value)}
              />
            </InputsForm>

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
          </form>
        </WrapperNote>
      </ModalNote>
    </>
  );
};

export default function ListNotes() {
  return (
    <>
      <Wrapper>
        <TitleNotes>Fijadas</TitleNotes>
        <FijedNotes>
          <Note color="#CCFF90" />
          <Note color="#F28B82" />
          <Note color="#E6C9A8" />
          <Note color="#FBBC04" />
          <Note color="#D7AEFB" />
          <Note color="#A7FFEB" />
          <Note color="#FFFFFF" />
          <Note color="#E6C9A8" />
          <Note color="#FBBC04" />
          <Note color="#D7AEFB" />
          <Note color="#A7FFEB" />
          <Note color="#CCFF90" />
          <Note color="#F28B82" />
        </FijedNotes>
        <TitleNotes>Others</TitleNotes>
        <OtherNotes></OtherNotes>
      </Wrapper>
    </>
  );
}
